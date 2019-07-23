import { Suits, Ranks } from "./constants";

/** Geneate a standard 52-card deck */
export const generateDeck = () => {
  const deck = [];

  // add a card for each suit and rank
  Suits.forEach(suit => {
    Ranks.forEach(rank => {
      deck.push({ suit, rank });
    });
  });

  return shuffleDeck(deck);
};

/** Shuffle a deck. Returns a deck. */
export const shuffleDeck = deck => {
  const shuffled = [...deck];

  // shuffle the deck
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

/** Hit an API to get a randomly-generated name */
export const getRandomName = async () => {
  try {
    const result = await fetch("/name");
    const json = await result.json();
    return json[0];
  } catch (e) {
    console.error("Error getting a random name", e);
  }
};
