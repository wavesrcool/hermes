/* eslint-disable @typescript-eslint/no-explicit-any */
import { createHmac } from "crypto";
import { GraphObjectsResolve } from "../../objects/resolve/GraphObjectsResolve";
import { envapi } from "../../_env";

const { GRAPH_HASH_IV } = envapi;

export class ClassesApiHandler {
  public error<T1>(message: T1): GraphObjectsResolve<T1> {
    const timestamp = Date.now();
    const hash = createHmac("sha256", GRAPH_HASH_IV)
      .update(`${timestamp}#${message}`)
      .digest("hex");

    return {
      pass: false,
      message,
      timestamp,
      hash,
    };
  }

  public catch(e: any): string {
    let msg = `catch`;
    if (typeof e.code === "string") {
      msg = e.code;
    }

    return msg;
  }
}
