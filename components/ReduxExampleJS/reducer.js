import { DEAL_HAND, PLAY_CARD, RESHUFFLE_DISCARD } from "./actions";
import { generateDeck, shuffleDeck } from "./util";

const defaultState = {
  deck: generateDeck(),
  discardPile: [],
  hands: []
};

/** Dealing a hand to a new player */
const dealHand = state => {
  const { deck } = state;

  // grab the top five cards off the deck
  const topOfDeck = deck.slice(0, 5);

  // and remove them
  const restOfDeck = deck.slice(5);

  return {
    ...state,
    deck: restOfDeck,
    hands: [...state.hands, topOfDeck]
  };
};

/** Play a card from a hand */
const playCard = (state, { handIndex, cardIndex }) => {
  const { deck, hands } = state;

  if (deck.length <= 0) {
    return state;
  }

  const hand = hands[handIndex];

  // grab a card off the deck
  const newCard = deck[0];

  // and remove it
  const restOfDeck = deck.slice(1);

  // grab the removed card before we change the hand
  const removedCard = { ...hand[cardIndex] };

  // hand with the newly drawn cad
  const updatedHand = [
    ...hand.slice(0, cardIndex),
    newCard,
    ...hand.slice(cardIndex + 1)
  ];

  return {
    ...state,
    deck: restOfDeck,
    hands: [
      ...hands.slice(0, handIndex),
      updatedHand,
      ...hands.slice(handIndex + 1)
    ],
    discardPile: [...state.discardPile, removedCard]
  };
};

/** Re-shuffle the discard pile into the deck */
const reshuffleDiscardPile = state => {
  const { deck, discardPile } = state;

  return {
    ...state,
    deck: shuffleDeck([...deck, ...discardPile]),
    discardPile: []
  };
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case DEAL_HAND:
      return dealHand(state, action);
    case PLAY_CARD:
      return playCard(state, action);
    case RESHUFFLE_DISCARD:
      return reshuffleDiscardPile(state, action);
    default:
      return state;
  }
};
