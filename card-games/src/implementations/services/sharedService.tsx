import { allCardCodes, allCardValues } from "../../interfaces/IDeck";
import { SUITS } from "../../interfaces/Icards";

export const getCardCodes = (length: number): string[] => {
  return allCardCodes.slice(0, length);
};

export const getCardValues = (length: number): string[] => {
  return allCardValues.slice(0, length);
};

export const getSelectedCards = (
  values: string[],
  suits: SUITS[],
): string[] => {
  return allCardCodes.filter((code) => {
    return (
      suits.includes(code.charAt(1) as unknown as SUITS) &&
      values.includes(code.charAt(0))
    );
  });
};
