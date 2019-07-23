/**
 * NOTE:
 * See `types.ts` for a nice lengthy description about why these are still here from the JS version.
 *
 * Long story short: These arrays are used to generate the `Deck` and you cannot iterate over string literal types at runtime.
 */

import { Suit, Rank } from "./types";

/** All possible suits */
export const Suits: Suit[] = ["diamonds", "spades", "hearts", "clovers"];

/** All possible ranks */
export const Ranks: Rank[] = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
