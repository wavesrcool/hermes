import { env } from "@hermes-js/env";
import connection from "@hermes-js/models";
import { ApolloServer } from "apollo-server-express";
import { configgraph } from "../config";
import { envapi } from "../_env";
import { HermesApiHttpApollo } from "./apollo";
import { HermesApiHttpApp } from "./app";

const { PROD } = env;

const { GRAPH_PORT } = envapi;

const {
  SERVER: { GRAPH_PATH },
} = configgraph;

const logname = `[hermes graph]:`;

/**
 * * Hermes Documentation
 *
 * @created 09 16 2022
 * @collection api asynchronous function
 * @notes [ ]
 *
 */
export const HermesApiHttp = async (
  conn: typeof connection
): Promise<ApolloServer> => {
  await conn
    .initialize()
    .then(() => console.log(`${logname} Database connection established.`));

  const { 0: app, 1: redis } = HermesApiHttpApp(conn);

  if (PROD) {
    await redis.flushall();
  }

  const apollo = await HermesApiHttpApollo(redis);

  if (!apollo) {
    throw new Error(`${logname} Error. No graph instance.`);
  }

  await apollo.start().then(() => {
    console.log(`${logname} Apollo server running.`);
  });

  apollo.applyMiddleware({
    app,
    cors: false,
    path: GRAPH_PATH,
  });

  const PORT = process.env.PORT || GRAPH_PORT;

  app.listen(PORT, (): void => {
    console.log(`${logname} (env) ${process.env.NODE_ENV || "no env"}`);
    console.log(`${logname} (port) ${PORT}`);
  });

  return apollo;
};
