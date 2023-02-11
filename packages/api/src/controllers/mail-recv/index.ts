import { env } from "@hermes-js/env";
import { LibraryAttestStrings } from "@hermes-js/library/lib/attest/strings/LibraryAttestStrings";
import connection from "@hermes-js/models";
import { Msg } from "@hermes-js/models/lib/msg/Msg";
import { MsgRecords } from "@hermes-js/models/lib/msg/MsgRecords";
import { Thread } from "@hermes-js/models/lib/thread/Thread";
import * as express from "express";
import { classesapi } from "../../classes";

const { PROD } = env;
const { hash } = classesapi;

type ProcessedReceiveBody = {
  wave: string;
  records: MsgRecords;
  reply?: {
    pk: number;
  };
};

const processBody = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any,
  conn: typeof connection
): Promise<ProcessedReceiveBody> => {
  let isReply = false;
  let isReplyPk = 0;
  let isReplySubjectKey = ``;

  const wave = LibraryAttestStrings(body["Message-Id"]);
  const recipient = LibraryAttestStrings(body.recipient);
  const sender = LibraryAttestStrings(body.sender);
  const subject = LibraryAttestStrings(body.subject);
  const date = LibraryAttestStrings(body.Date);
  const from = LibraryAttestStrings(body.From);
  const text = LibraryAttestStrings(body["stripped-text"]);

  if (subject.toLowerCase().includes("re:")) {
    isReply = true;
    isReplySubjectKey = subject.toLowerCase().replace(/re:/g, ``).trim();
  }

  let pb: ProcessedReceiveBody = {
    wave,
    records: {
      recipient,
      sender,
      subject,
      date,
      from,
      text,
    },
  };

  if (isReply) {
    const result = await conn.createQueryRunner().manager
      .query(`SELECT id, subject
              FROM thread
              WHERE POSITION('${isReplySubjectKey}' IN LOWER(subject))>0;`);
    console.log(JSON.stringify(result, null, 4), `isReply result`);

    if (result && result[0].id && !Number.isNaN(result[0].id)) {
      isReplyPk = Number(result[0].id);
    }
  }

  if (isReplyPk > 0) {
    pb = {
      ...pb,
      reply: {
        pk: isReplyPk,
      },
    };
  }

  return pb;
};

/**
 * * Hermes Documentation
 *
 * @created 09 16 2022
 * @collection api asynchronous function
 * @notes [ ]
 *
 */
export const ControllersMailRecv = async (
  req: express.Request,
  res: express.Response,
  conn: typeof connection
): Promise<express.Response> => {
  try {
    const { body } = req;

    //
    //
    // validate webhook signature
    //
    const { timestamp, token, signature } = body;
    const reqhash = hash.email(`${timestamp}${token}`);
    if (reqhash !== signature) {
      throw new Error("[hermes] Error.");
    }

    let MSG_PK = 0;
    let THREAD_PK = 0;

    const { wave, records, reply } = await processBody(body, conn);

    const writemsg = await conn
      .createQueryBuilder()
      .insert()
      .into(Msg)
      .values({
        wave,
        records,
      })
      .returning([`id`])
      .execute();

    if (writemsg && writemsg.raw[0].id && !Number.isNaN(writemsg.raw[0].id)) {
      MSG_PK = Number(writemsg.raw[0].id);
    }

    if (reply) {
      //
      // prior thread found for message
      //
      THREAD_PK = reply.pk;
    } else {
      //
      // no prior thread found
      //
      const writethread = await conn
        .createQueryBuilder()
        .insert()
        .into(Thread)
        .values({
          subject: records.subject,
        })
        .returning([`id`])
        .execute();

      if (
        writethread &&
        writethread.raw[0].id &&
        !Number.isNaN(writethread.raw[0].id)
      ) {
        THREAD_PK = Number(writethread.raw[0].id);
      }
    }

    if (MSG_PK > 0 && THREAD_PK > 0) {
      await conn
        .createQueryBuilder()
        .relation(Msg, "thread")
        .of(MSG_PK)
        .set(THREAD_PK);
    }

    return res.status(200).send();
  } catch (e) {
    if (!PROD) {
      console.log(e, `[hermes] Development Error Log`);
    }
    return res.status(500).send();
  }
};
