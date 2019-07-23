/** Deal a hand to a new player */
export const DEAL_HAND = "DEAL_HAND";
export const dealHand = () => ({ type: DEAL_HAND });

/** Play a card from a hand */
export const PLAY_CARD = "PLAY_CARD";
export const playCard = (handIndex, cardIndex) => ({
  type: PLAY_CARD,
  handIndex,
  cardIndex
});

/** Reshuffle the discard pile into the deck */
export const RESHUFFLE_DISCARD = "RESHUFFLE_DISCARD";
export const reshuffleDiscardPile = () => ({
  type: RESHUFFLE_DISCARD
});
