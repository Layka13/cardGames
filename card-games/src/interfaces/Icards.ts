export interface Ideck {
  succes: boolean;
  deck_id: string;
  shuffled: true;
  remaining: number;
  cards?: Icard[];
}

export interface DeckResponse {
  response?: Ideck;
  [key: string]: any;
}

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
