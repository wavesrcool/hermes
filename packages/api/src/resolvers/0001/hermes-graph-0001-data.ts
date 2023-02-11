import { Thread } from "@hermes-js/models/lib/thread/Thread";
import { Field, ObjectType } from "type-graphql";

/**
 * * Hermes Documentation
 *
 * @created 01 02 2023
 * @collection api resolve data
 * @notes [ ]
 *
 */
@ObjectType()
export class HermesGraphData0001 {
  @Field(() => [String], { nullable: true })
  notes?: string[] | null;

  @Field(() => [Thread], { nullable: true })
  list?: Thread[] | null;
}
