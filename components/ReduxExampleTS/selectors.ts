import { State } from "./types";

/** Get the number of cards in the deck */
export const getNumberOfCardsInDeck = (state: State) => state.deck.length;

/** Get the number of cards in the discard pile */
export const getNumberOfCardsInDiscardPile = (state: State) =>
  state.discardPile.length;

/** Get all of the hands */
export const getHands = (state: State) => state.hands;

/** Get a specific hand */
export const getHand = (state: State, index: number) => state.hands[index];
