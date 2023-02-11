/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * * Hermes Documentation
 *
 * @created 01 04 2023
 * @collection library synchronous function
 * @notes [ ]
 *
 */
export const LibraryAttestStrings = (a: any): string => {
  if (!!a && typeof a === "string") {
    return String(a);
  }
  const msg = `[hermes] Library. Attest string failed: ${String(a)}`;
  throw new Error(msg);
};
