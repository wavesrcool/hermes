/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * * Hermes Documentation
 *
 * @created 09 16 2022
 * @collection hermes asynchronous function
 * @notes [ ]
 *
 */
export const fetcher = async (uri: string): Promise<any> => {
  try {
    const res = await fetch(uri);
    return res.json();
  } catch (e) {
    return undefined;
  }
};
