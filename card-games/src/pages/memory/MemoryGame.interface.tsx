import { SUITS } from "../../interfaces/Icards";

export interface memorySettings {
  suits: SUITS[];
  numberOfCards: number;
}

export const defaultNumberOfCards = 5;
export const defaultSuits = [];
