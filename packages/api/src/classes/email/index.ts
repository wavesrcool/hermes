import formData from "form-data";
import Mailgun from "mailgun.js";
import Client from "mailgun.js/client";
import { MailgunMessageData } from "mailgun.js/interfaces/Messages";
import { envapi } from "../../_env";

const { GRAPH_MAIL_BASE, GRAPH_MAIL_KEY } = envapi;

export type TypesClassesApiEmailSendMessage = "email-re";

export class ClassesApiEmail {
  private mailc: Client;

  constructor(eu?: boolean) {
    const mg = new Mailgun(formData);
    const client = mg.client({
      username: "api",
      key: GRAPH_MAIL_KEY,
      url: `https://api${eu ? `.eu` : ``}.mailgun.net`,
    });

    this.mailc = client;
  }

  public async send(
    to: string
  ): Promise<TypesClassesApiEmailSendMessage | undefined> {
    console.log(!!to, `!!to`);

    const frompref = `t`;
    const replypref = frompref;

    const message: MailgunMessageData = {
      to: `tyson@lupul.dev`,
      from: `${frompref}@${GRAPH_MAIL_BASE}`,
      text: `Test message`,
      html: ``,
      subject: `This is a test message`,
      "h:Reply-To": `${replypref}@${GRAPH_MAIL_BASE}`,
    };

    const sendmail = await this.mailc.messages.create(GRAPH_MAIL_BASE, message);
    console.log(JSON.stringify(sendmail, null, 4), `sendmail`);
    return undefined;
  }
}
