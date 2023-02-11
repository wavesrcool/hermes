import { LibraryWriteCapitalizedFirstLetter } from "../capitalized-first-letter/LibraryWriteCapitalizedFirstLetter";

/**
 * * Hermes Documentation
 *
 * @created 01 03 2023
 * @collection library synchronous function
 * @notes [ ]
 *
 */
export const LibraryWriteCapitalizedWords = (l: string): string => {
  const ws = l
    .split(" ")
    .map((i) => LibraryWriteCapitalizedFirstLetter(i))
    .join(" ");

  return ws;
};
