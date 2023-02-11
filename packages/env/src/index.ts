import { TypeEnvRoot } from "./types";

/**
 * * Hermes Documentation
 *
 * @created 01 02 2023
 * @collection env
 * @notes [ ]
 *
 */
export const env: TypeEnvRoot = {
  PROD: process.env.NODE_ENV === `production`,
  ENV: process.env.NODE_ENV || `hermes`,
};
