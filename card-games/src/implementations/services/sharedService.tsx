import { allCardCodes } from "../../interfaces/IDeck";

export const getCardCodes = (length: number): string[] => {
  return allCardCodes.slice(0, length);
};
