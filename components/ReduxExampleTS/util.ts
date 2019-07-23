import { Card } from "./types";
import { Suits, Ranks } from "./constants";

/** Geneate a standard 52-card deck */
export const generateDeck = (): Card[] => {
  const deck: Card[] = [];

  // add a card for each suit and rank
  Suits.forEach(suit => {
    Ranks.forEach(rank => {
      deck.push({ suit, rank });
    });
  });

  return shuffleDeck(deck);
};

/** Shuffle a deck. Returns a deck. */
export const shuffleDeck = (deck: Card[]): Card[] => {
  const shuffled = [...deck];

  // shuffle the deck
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

/** Hit an API to get a randomly-generated name */
export const getRandomName = async (): Promise<string> => {
  const result = await fetch("/name");
  const json = await result.json();
  return json[0];
};
