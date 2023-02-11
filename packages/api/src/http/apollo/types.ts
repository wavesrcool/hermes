import connection from "@hermes-js/models";
import { ExpressContext } from "apollo-server-express";
import Redis from "ioredis";
import { classesapi } from "../../classes";

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
  conn: typeof connection;
  classes: typeof classesapi;
};
