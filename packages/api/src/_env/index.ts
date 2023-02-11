import * as dotenv from "dotenv-safe";
import path from "path";
import { EnvApiType } from "./types";

dotenv.config({
  allowEmptyValues: false,
  example: path.join(__dirname, `..`, `..`, `.env.api`),
});

let msg: string | undefined;

const { GRAPH_PORT } = process.env;
if (!GRAPH_PORT) {
  msg = `process.env.GRAPH_PORT`;
  throw new Error(msg);
}

const { GRAPH_CORS_ORIGIN } = process.env;
if (!GRAPH_CORS_ORIGIN) {
  msg = `process.env.GRAPH_CORS_ORIGIN`;
  throw new Error(msg);
}

const { GRAPH_TOK_IV } = process.env;
if (!GRAPH_TOK_IV) {
  msg = `process.env.GRAPH_TOK_IV`;
  throw new Error(msg);
}

const { GRAPH_HASH_IV } = process.env;
if (!GRAPH_HASH_IV) {
  msg = `process.env.GRAPH_HASH_IV`;
  throw new Error(msg);
}

const { GRAPH_ENC_IV } = process.env;
if (!GRAPH_ENC_IV) {
  msg = `process.env.GRAPH_ENC_IV`;
  throw new Error(msg);
}

const { GRAPH_COOKIE_IV } = process.env;
if (!GRAPH_COOKIE_IV) {
  msg = `process.env.GRAPH_COOKIE_IV`;
  throw new Error(msg);
}

const { GRAPH_COOKIE_NAME } = process.env;
if (!GRAPH_COOKIE_NAME) {
  msg = `process.env.GRAPH_COOKIE_NAME`;
  throw new Error(msg);
}

const { GRAPH_REDIS_PORT } = process.env;
if (!GRAPH_REDIS_PORT) {
  msg = `process.env.GRAPH_REDIS_PORT`;
  throw new Error(msg);
}

const { GRAPH_MAIL_BASE } = process.env;
if (!GRAPH_MAIL_BASE) {
  msg = `process.env.GRAPH_MAIL_BASE`;
  throw new Error(msg);
}

const { GRAPH_MAIL_KEY } = process.env;
if (!GRAPH_MAIL_KEY) {
  msg = `process.env.GRAPH_MAIL_KEY`;
  throw new Error(msg);
}

const { GRAPH_MAIL_SIGN } = process.env;
if (!GRAPH_MAIL_SIGN) {
  msg = `process.env.GRAPH_MAIL_SIGN`;
  throw new Error(msg);
}

/**
 * * Hermes Documentation
 *
 * @created 01 02 2023
 * @collection api ref
 * @notes [ ]
 *
 */
export const envapi: EnvApiType = {
  GRAPH_PORT,
  GRAPH_CORS_ORIGIN,
  GRAPH_REDIS_PORT,
  GRAPH_TOK_IV,
  GRAPH_HASH_IV,
  GRAPH_ENC_IV,
  GRAPH_COOKIE_NAME,
  GRAPH_COOKIE_IV,
  GRAPH_MAIL_BASE,
  GRAPH_MAIL_KEY,
  GRAPH_MAIL_SIGN,
};
