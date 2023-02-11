/**
 * * Hermes Documentation
 *
 * @created 01 06 2023
 * @collection hermes synchronous function
 * @notes [ ]
 *
 */
export const capitalizeFirst = (l: string): string => {
  const ws = `${l.charAt(0).toUpperCase()}${l.slice(1)}`;
  return ws;
};
