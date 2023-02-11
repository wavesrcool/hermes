import { env } from "@hermes-js/env";
import { TypesConfiguration } from "./types";

const { PROD } = env;

const graphpath = "/";

/**
 * * Hermes Documentation
 *
 * @created 01 02 2023
 * @collection api types
 * @notes [ ]
 *
 */
export const configgraph: TypesConfiguration = {
  SERVER: {
    GRAPH_PATH: graphpath,
    UNSECURED_ROUTES: ["/", "/breathe", PROD ? "" : graphpath].filter(
      (r) => !!r
    ),
  },
};
