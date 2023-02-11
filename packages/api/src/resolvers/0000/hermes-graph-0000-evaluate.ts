import { LibraryMessagesGraph0000 } from "@hermes-js/library/lib/messages/api/0000";
import { TypesGraphHttpApollo } from "../../http/apollo/types";
import { HermesGraphData0000 } from "./hermes-graph-0000-data";
import { HermesGraphFigures0000 } from "./hermes-graph-0000-figure";
import { HermesGraphResolve0000 } from "./hermes-graph-0000-resolve";

/**
 * * Hermes Documentation
 *
 * @created 01 02 2023
 * @collection api evaluate
 * @notes [ ]
 *
 */
export const HermesGraphEvaluate0000 = async (
  ctx: TypesGraphHttpApollo,
  figure: HermesGraphFigures0000
): Promise<HermesGraphResolve0000> => {
  let message: LibraryMessagesGraph0000 = `complete`;

  try {
    //
    //
    // evaluate 0000
    //

    console.log(!!ctx, figure);

    //
    //
    // data 0000
    //
    const data: HermesGraphData0000 = {
      notes: [`0000`],
    };

    const timestamp = Date.now();

    return {
      pass: true,
      message,
      timestamp,
      hash: `${message}`, // @todo add hash
      data,
    };
  } catch (HermesGraphEvaluate0000Error) {
    message = "error";

    const timestamp = Date.now();

    return {
      pass: false,
      message,
      timestamp,
      hash: `${message}`, // @todo hash
    };
  }
};
