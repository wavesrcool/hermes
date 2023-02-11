import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { TypesGraphHttpApollo } from "../../http/apollo/types";
import { HermesGraphEvaluate0000 } from "./hermes-graph-0000-evaluate";
import { HermesGraphFigures0000 } from "./hermes-graph-0000-figure";
import { HermesGraphResolve0000 } from "./hermes-graph-0000-resolve";

/**
 * * Hermes Documentation
 *
 * @created 01 02 2023
 * @collection api resolver
 * @notes [ ]
 *
 */
@Resolver()
export class HermesGraph0000 {
  @Query(() => HermesGraphResolve0000)
  async HermesGraph0000(
    @Arg(`figure`, () => HermesGraphFigures0000)
    figure: HermesGraphFigures0000,
    @Ctx() ctx: TypesGraphHttpApollo
  ): Promise<HermesGraphResolve0000> {
    try {
      const response = await HermesGraphEvaluate0000(ctx, figure);
      return response;
    } catch (HermesGraph0000Error) {
      const message = "error";
      const timestamp = Date.now();
      return {
        pass: false,
        message,
        timestamp,
        hash: `${message}`, // @todo hash
      };
    }
  }
}
