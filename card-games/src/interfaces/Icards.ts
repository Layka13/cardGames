export enum SUITES {
  "HEARTS",
  "SPADES",
  "CLUBS",
  "DIAMONDS",
}

export enum VALUES {
  "one" = "1",
  "two" = "2",
  "three" = "3",
  "four" = "4",
  "five" = "5",
  "six" = "6",
  "seven" = "7",
  "eight" = "8",
  "nine" = "9",
  "ten" = "0",
  "jack" = "JACK",
  "queen" = "QUEEN",
  "king" = "KING",
  "ace" = "ACE",
}

export interface Icard {
  code: string;
  image: string;
  images: {
    svg: string;
    png: string;
  };
  value: VALUES;
  suit: SUITES;
}

export const backImage = "https://deckofcardsapi.com/static/img/back.png";
