/** Get the number of cards in the deck */
export const getNumberOfCardsInDeck = state => state.deck.length;

/** Get the number of cards in the discard pile */
export const getNumberOfCardsInDiscardPile = state => state.discardPile.length;

/** Get all of the hands */
export const getHands = state => state.hands;

/** Get a specific hand */
export const getHand = (state, index) => state.hands[index];
