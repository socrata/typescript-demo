import { DEAL_HAND, PLAY_CARD } from "./actions";
import { generateDeck } from "./util";

const defaultState = {
  deck: generateDeck(),
  discardPile: [],
  hands: []
};

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

const playCard = (state, { handIndex, cardIndex }) => {
  const { deck, hands } = state;

  const hand = hands[handIndex];

  // grab a card off the deck
  const newCard = deck[0];

  // and remove it
  const restOfDeck = deck.slice(1);

  const removedCard = { ...hand[cardIndex] };

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

export default (state = defaultState, action) => {
  switch (action.type) {
    case DEAL_HAND:
      return dealHand(state, action);
    case PLAY_CARD:
      return playCard(state, action);
    default:
      return state;
  }
};
