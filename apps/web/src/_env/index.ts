/* eslint-disable prefer-destructuring */

import { TypesEnvHermes } from "_env/types";

let msg: string | undefined;

const ENC_IV = process.env.ENC_IV;
if (!ENC_IV) {
  msg = `process.env.ENC_IV`;
  throw new Error(msg);
}

const GRAPH_URI = process.env.GRAPH_URI;
if (!GRAPH_URI) {
  msg = `process.env.GRAPH_URI`;
  throw new Error(msg);
}

/**
 * * Hermes Documentation
 *
 * @created 01 06 2023
 * @collection hermes ref
 * @notes [ ]
 *
 */
export const envwebs: TypesEnvHermes = {
  ENC_IV,
  GRAPH_URI,
};
