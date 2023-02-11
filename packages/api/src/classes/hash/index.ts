import { createHmac } from "crypto";
import { envapi } from "../../_env";

const { GRAPH_MAIL_SIGN } = envapi;

export class ClassesApiHash {
  public email(value: string): string {
    const hash = createHmac("sha256", GRAPH_MAIL_SIGN)
      .update(value)
      .digest("hex");
    return hash;
  }
}
