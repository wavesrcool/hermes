import { ExpressContext } from "apollo-server-express";
import Redis from "ioredis";

/**
 * * Hermes Documentation
 *
 * @created 01 02 2023
 * @collection api types
 * @notes [ ]
 *
 */
export type TypesGraphHttpApollo = ExpressContext & {
  redis: Redis;
};
