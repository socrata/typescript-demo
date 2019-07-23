/**
 * In this file, we're using the "typesafe-actions" library to cut down on boilerplate
 * https://github.com/piotrwitek/typesafe-actions
 *
 * The official redux docs have suggestions here, but they are very verbose
 * https://redux.js.org/recipes/usage-with-typescript
 */

import { action } from "typesafe-actions";

/** Deal a hand to a new player */
export const DEAL_HAND = "DEAL_HAND";
export const dealHand = () => action(DEAL_HAND);
export type DealHandAction = ReturnType<typeof dealHand>;

/** Play a card from a hand */
export const PLAY_CARD = "PLAY_CARD";
export const playCard = (handIndex: number, cardIndex: number) =>
  action(PLAY_CARD, { handIndex, cardIndex });
export type PlayCardAction = ReturnType<typeof playCard>;

/** Reshuffle the discard pile into the deck */
export const RESHUFFLE_DISCARD = "RESHUFFLE_DISCARD";
export const reshuffleDiscardPile = () => action(RESHUFFLE_DISCARD);
export type ReshuffleDiscardAction = ReturnType<typeof reshuffleDiscardPile>;

export const FOLD_HAND = "FOLD_HAND";
export const foldHand = (index: number) => action(FOLD_HAND, { index });
export type FoldHandAction = ReturnType<typeof foldHand>;

/** List of all action types */
export type ActionTypes =
  | DealHandAction
  | PlayCardAction
  | ReshuffleDiscardAction
  | FoldHandAction;
