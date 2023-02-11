import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { TypesGraphHttpApollo } from "../../http/apollo/types";
import { HermesGraphEvaluate0001 } from "./hermes-graph-0001-evaluate";
import { HermesGraphFigures0001 } from "./hermes-graph-0001-figure";
import { HermesGraphResolve0001 } from "./hermes-graph-0001-resolve";

/**
 * * Hermes Documentation
 *
 * @created 01 02 2023
 * @collection api resolver
 * @notes [ ]
 *
 */
@Resolver()
export class HermesGraph0001 {
  @Query(() => HermesGraphResolve0001)
  async HermesGraph0001(
    @Arg(`figure`, () => HermesGraphFigures0001)
    figure: HermesGraphFigures0001,
    @Ctx() ctx: TypesGraphHttpApollo
  ): Promise<HermesGraphResolve0001> {
    try {
      const response = await HermesGraphEvaluate0001(ctx, figure);
      return response;
    } catch (HermesGraph0001Error) {
      return ctx.classes.handler.error(`error`);
    }
  }
}
