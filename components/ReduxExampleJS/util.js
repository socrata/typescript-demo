export const Suits = ["diamonds", "spades", "hearts", "clovers"];

export const Ranks = [
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

export const generateDeck = () => {
  const deck = [];

  // add a card for each suit and rank
  Suits.forEach(suit => {
    Ranks.forEach(rank => {
      deck.push({ suit, rank });
    });
  });

  // shuffle the deck
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  return deck;
};
