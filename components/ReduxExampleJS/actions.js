export const DEAL_HAND = "DEAL_HAND";

export const dealHand = () => ({ type: DEAL_HAND });

export const PLAY_CARD = "PLAY_CARD";

export const playCard = (handIndex, cardIndex) => ({
  type: PLAY_CARD,
  handIndex,
  cardIndex
});
