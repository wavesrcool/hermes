import { Field, ObjectType } from "type-graphql";
import { ModelsNotes } from "../structures/ModelsNotes";

/**
 * * Hermes Documentation
 *
 * @created 01 03 2023
 * @collection models ref
 * @notes [ ]
 *
 */
@ObjectType()
export class MsgRecords {
  @Field(() => [ModelsNotes], { nullable: true })
  notes?: ModelsNotes[] | null;

  @Field(() => String)
  recipient!: string;

  @Field(() => String)
  sender!: string;

  @Field(() => String)
  subject!: string;

  @Field(() => String)
  date!: string;

  @Field(() => String)
  from!: string;

  @Field(() => String)
  text!: string;
}
