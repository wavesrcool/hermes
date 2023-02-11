#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { getArgv } from "../../util/getArgv";

const argenv = getArgv().toLowerCase();

/**
 * * Hermes Documentation
 *
 * @created 01 02 2023
 * @collection dev synchronous function
 * @notes [ ]
 *
 */
const main = () => {
  let msg = `[ci-env-example]`;

  if (!["api", "models", "tables"].includes(argenv)) {
    msg += ` - specified unknown environment`;
    throw new Error(msg);
  }

  let ws = ``;
  ws += `# hermes environment\n`;

  if (argenv === "api") {
    ws += `
GRAPH_PORT=
GRAPH_CORS_ORIGIN=
GRAPH_REDIS_PORT=
GRAPH_COOKIE_NAME=
GRAPH_COOKIE_IV=
GRAPH_TOK_IV=
GRAPH_HASH_IV=
GRAPH_ENC_IV=
GRAPH_MAIL_BASE=
GRAPH_MAIL_KEY=
GRAPH_MAIL_SIGN=
`;
  }

  if (argenv === "models") {
    ws += `
MODELS_DB=
`;
  }

  if (argenv === "tables") {
    ws += `
TABLES_PUBLIC_KEY=
TABLES_PRIVATE_KEY=
`;
  }

  const dirb = path.join(process.cwd());
  const dirw = path.join(dirb, `.env.${argenv}`);
  fs.writeFileSync(dirw, ws);
  //
};

main();
