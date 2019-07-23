import {
  DEAL_HAND,
  PLAY_CARD,
  RESHUFFLE_DISCARD,
  ActionTypes,
  PlayCardAction,
  FoldHandAction,
  FOLD_HAND
} from "./actions";
import { generateDeck, shuffleDeck, getRandomName } from "./util";

import { State } from "./types";

/** Default state to use when reducer is created */
const defaultState: State = {
  deck: generateDeck(),
  discardPile: [],
  hands: []
};

/** Fold a hand */
const foldHand = (
  state: State,
  { payload: { index } }: FoldHandAction
): State => {
  const deletedHand = [...state.hands[index]];
  const hands = [...state.hands];
  hands.splice(index, 1);

  return {
    ...state,
    hands,
    discardPile: [...state.discardPile, ...deletedHand]
  };
};

/** Dealing a hand to a new player */
const dealHand = (state: State): State => {
  const { deck } = state;

  // grab the top five cards off the deck
  const topOfDeck = deck.slice(0, 5);

  // and remove them
  const restOfDeck = deck.slice(5);

  // TODO add metadata around players
  const playerName = getRandomName();

  return {
    ...state,
    deck: restOfDeck,
    hands: [...state.hands, topOfDeck]
  };
};

/** Play a card from a hand */
const playCard = (
  state: State,
  { payload: { handIndex, cardIndex } }: PlayCardAction
): State => {
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
const reshuffleDiscardPile = (state: State): State => {
  const { deck, discardPile } = state;

  return {
    ...state,
    deck: shuffleDeck([...deck, ...discardPile]),
    discardPile: []
  };
};

export default (state = defaultState, action: ActionTypes) => {
  switch (action.type) {
    case DEAL_HAND:
      return dealHand(state);
    case PLAY_CARD:
      return playCard(state, action as PlayCardAction);
    case RESHUFFLE_DISCARD:
      return reshuffleDiscardPile(state);
    case FOLD_HAND:
      return foldHand(state, action as FoldHandAction);
    default:
      return state;
  }
};
