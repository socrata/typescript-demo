/**
 * NOTE:
 * You'll notice that the types defined here are _also_ defined in `constants.ts`
 * This is because these types are *not* present at runtime, and we can't iterate over them.
 *
 * Typescript does allow iterating over `enum` but that has its own drawbacks, such as not allowing
 * numbers as values which we need here for `Rank`
 * (pointing this out to draw attention to the fact that, yes, there are some things you have to work around)
 *
 * BUT you'll also notice that the arrays in `constants.ts` are typed to be these `Suit` and `Rank` types!
 */

/** The suit of a card */
export type Suit = "diamonds" | "spades" | "hearts" | "clovers";

/**
 * The rank of a card
 * NOTE: These start at 2. Some are numerals represented as strings, others are single-character representations.
 */
export type Rank =
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K"
  | "A";

/** A card */
export interface Card {
  /** The suit of the card */
  suit: Suit;

  /** The rank of the card */
  rank: Rank;
}

/**
 * A player in the game
 *
 * TODO
 * This isn't currently used!
 * As an exercise, change `hands`in the `State` interface from a `Card[][]` to a `Player[]`
 */
export interface Player {
  /** The player's name */
  name: string;

  /** The player's hand */
  hand: Card[];
}

/** State stored in redux */
export interface State {
  /** All of the cards left in the deck; at the start this will have all the cards */
  deck: Card[];

  /** Discard pile. When a player plays a card, it goes here. */
  discardPile: Card[];

  /** List of hands currently in the game */
  hands: Card[][]; // TODO refactor this to be a list of `Players`
}
