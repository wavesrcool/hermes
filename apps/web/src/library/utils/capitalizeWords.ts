import { capitalizeFirst } from "@hermes-web-library/utils/capitalizeFirst";

/**
 * * Hermes Documentation
 *
 * @created 01 06 2023
 * @collection hermes synchronous function
 * @notes [ ]
 *
 */
export const capitalizeWords = (l: string): string => {
  const ws = l
    .split(" ")
    .map((i) => capitalizeFirst(i))
    .join(" ");

  return ws;
};
