import { env } from "@hermes-js/env";
import connection from "@hermes-js/models";
import connectRedis from "connect-redis";
import cors from "cors";
import express, { Router } from "express";
import session from "express-session";
import helmet from "helmet";
import Redis from "ioredis";
import { controllers } from "../../controllers";
import { envapi } from "../../_env";

const { PROD } = env;
const {
  GRAPH_CORS_ORIGIN,
  GRAPH_REDIS_PORT,
  GRAPH_COOKIE_NAME,
  GRAPH_COOKIE_IV,
} = envapi;

/**
 * * Hermes Documentation
 *
 * @created 01 02 2023
 * @collection api synchronous function
 * @notes [ ]
 *
 */
export const HermesApiHttpApp = (
  conn: typeof connection
): [express.Express, Redis] => {
  const app = express();
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  if (PROD) {
    app.set("trust proxy", true);
  }

  const corsOptions: cors.CorsOptions = {
    origin: GRAPH_CORS_ORIGIN,
    credentials: true,
  };
  app.use(cors(corsOptions));

  const RedisStore = connectRedis(session);

  const redis = new Redis(GRAPH_REDIS_PORT);

  app.use(
    session({
      name: GRAPH_COOKIE_NAME,
      secret: GRAPH_COOKIE_IV,
      saveUninitialized: false,
      resave: false,
      proxy: PROD,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
        httpOnly: !PROD,
        sameSite: !PROD,
        secure: PROD,
        domain: PROD ? `https://hermes.earth` : undefined,
      },

      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
    })
  );

  const router = Router();
  router.get("/", (_req, res) => {
    res.set("Content-Type", "text/html");
    res.send(Buffer.from(`<p>hermes!</p>`));
  });

  router.get("/health", (_req, res) => {
    res.status(200).send();
  });

  router.post(`/mail-recv`, (req, res) =>
    controllers.mail_recv(req, res, conn)
  );
  app.use(router);

  return [app, redis];
};
