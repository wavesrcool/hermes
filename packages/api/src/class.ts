import { env } from "@hermes-js/env";
import connection from "@hermes-js/models";
import { HermesApiHttp } from "./http";

const { PROD } = env;

const logsname = `[hermes graph]:`;

export class HermesApi {
  private conn: typeof connection;

  constructor() {
    this.conn = connection;
  }

  public get connection(): typeof this.conn {
    return this.conn;
  }

  public async start() {
    HermesApiHttp(this.connection)
      .then(() => {
        console.log(`${logsname} Started.`);
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((e: any) => {
        console.log(e, `e`);
        let e0: string | undefined;
        let e1: string | undefined;

        const { code, syscall } = e;

        if (code && syscall) {
          e0 = code;
          e1 = syscall;
        } else if (e instanceof Error) {
          e0 = e.name;
          e1 = e.message;
        } else {
          e0 = `hermes`;
          e1 = `graph-catch`;
        }

        if (!PROD) {
          console.log(`${logsname} Error.`);
          console.log(e0);
          console.log(e1);
        }
      });
  }
}
