export const getNumberOfCardsInDeck = state => state.deck.length;

export const getNumberOfCardsInDiscardPile = state => state.discardPile.length;

export const getHands = state => state.hands;

export const getHand = (state, index) => state.hands[index];
