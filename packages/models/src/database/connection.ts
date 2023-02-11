import { env } from "@hermes-js/env";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import { Msg } from "../msg/Msg";
import { Thread } from "../thread/Thread";
import { envmodels } from "../_env";
import { Models1676144817400 } from "./migrations/1676144817400-Models";

const { PROD, ENV } = env;
const { MODELS_DB } = envmodels;

/**
 * * Hermes Documentation
 *
 * @created 01 03 2023
 * @collection models ref
 * @notes [ ]
 *
 */
const options: DataSourceOptions & SeederOptions = {
  ssl: PROD ? true : ENV.toLowerCase().slice(-`_local`.length) !== `_local`,
  name: "default",
  type: "postgres",
  url: MODELS_DB,
  synchronize: false,
  logging: !PROD,
  dropSchema: false,
  entities: [Msg, Thread],
  subscribers: [],
  migrationsTableName: "history",
  migrationsRun: true,
  migrations: [Models1676144817400],
  seeds: [],
};

export const ModelsConnection = new DataSource(options);
