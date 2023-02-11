import { Field, ObjectType } from "type-graphql";

/**
 * * Hermes Documentation
 *
 * @created 01 03 2023
 * @collection models ref
 * @notes [ ]
 *
 */
@ObjectType()
export class ModelsNotes {
  @Field(() => String)
  date!: string;

  @Field(() => String)
  key!: string;

  @Field(() => [String])
  list!: string[];
}
