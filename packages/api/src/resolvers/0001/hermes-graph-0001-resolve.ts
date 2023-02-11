import { LibraryMessagesGraph0001 } from "@hermes-js/library/lib/messages/api/0001";
import { Field, ObjectType } from "type-graphql";
import { GraphObjectsResolve } from "../../objects/resolve/GraphObjectsResolve";
import { HermesGraphData0001 } from "./hermes-graph-0001-data";

/**
 * * Hermes Documentation
 *
 * @created 01 02 2023
 * @collection api resolve type
 * @notes [ ]
 *
 */
@ObjectType()
export class HermesGraphResolve0001 extends GraphObjectsResolve<LibraryMessagesGraph0001> {
  @Field(() => HermesGraphData0001, { nullable: true })
  data?: HermesGraphData0001 | null;
}
