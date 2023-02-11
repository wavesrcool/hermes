import { ApolloServer } from "apollo-server-express";
import Redis from "ioredis";
import { buildSchema } from "type-graphql";
import { HermesGraph0000 } from "../../resolvers/0000/hermes-graph-0000-resolver";
import { TypesGraphHttpApollo } from "./types";

/**
 * * Hermes Documentation
 *
 * @created 01 02 2023
 * @collection api synchronous function
 * @notes [ ]
 *
 */
export const HermesApiHttpApollo = async (
  redis: Redis
): Promise<ApolloServer> => {
  const apollo = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HermesGraph0000],
      scalarsMap: [],
      validate: false,
    }),
    cache: "bounded",
    context: async (ctx): Promise<TypesGraphHttpApollo> => {
      const context: TypesGraphHttpApollo = {
        ...ctx,
        redis,
      };
      return context;
    },
  });

  return apollo;
};
