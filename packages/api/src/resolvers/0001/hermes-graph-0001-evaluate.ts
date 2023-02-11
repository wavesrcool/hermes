import { LibraryMessagesGraph0001 } from "@hermes-js/library/lib/messages/api/0001";
import { Thread } from "@hermes-js/models/lib/thread/Thread";
import { TypesGraphHttpApollo } from "../../http/apollo/types";
import { HermesGraphData0001 } from "./hermes-graph-0001-data";
import { HermesGraphFigures0001 } from "./hermes-graph-0001-figure";
import { HermesGraphResolve0001 } from "./hermes-graph-0001-resolve";

/**
 * * Hermes Documentation
 *
 * @created 01 02 2023
 * @collection api evaluate
 * @notes [ ]
 *
 */
export const HermesGraphEvaluate0001 = async (
  ctx: TypesGraphHttpApollo,
  figure: HermesGraphFigures0001
): Promise<HermesGraphResolve0001> => {
  const {
    classes: { handler },
  } = ctx;

  let message: LibraryMessagesGraph0001 = `error`;

  try {
    //
    //
    // evaluate 0001
    //

    const threads = await ctx.conn
      .getRepository(Thread)
      .createQueryBuilder(`thread`)
      .getMany();

    if (!threads || !threads.length) {
      message = `threads-list`;
      return handler.error<LibraryMessagesGraph0001>(message);
    }
    //
    //
    // data 0001
    //
    const data: HermesGraphData0001 = {
      notes: [`0001`, figure.locale],
      list: threads,
    };

    const timestamp = Date.now();
    message = `complete`;
    return {
      pass: true,
      message,
      timestamp,
      hash: `${message}`, // @todo add hash
      data,
    };
  } catch (HermesGraphEvaluate0001Error) {
    return handler.error<LibraryMessagesGraph0001>(message);
  }
};
