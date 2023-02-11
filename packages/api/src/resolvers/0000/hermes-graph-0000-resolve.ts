import { LibraryMessagesGraph0000 } from "@hermes-js/library/lib/messages/api/0000";
import { Field, ObjectType } from "type-graphql";
import { GraphObjectsResolve } from "../../objects/resolve/GraphObjectsResolve";
import { HermesGraphData0000 } from "./hermes-graph-0000-data";

/**
 * * Hermes Documentation
 *
 * @created 01 02 2023
 * @collection api resolve type
 * @notes [ ]
 *
 */
@ObjectType()
export class HermesGraphResolve0000 extends GraphObjectsResolve<LibraryMessagesGraph0000> {
  @Field(() => HermesGraphData0000, { nullable: true })
  data?: HermesGraphData0000 | null;
}
