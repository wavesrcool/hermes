import { Field, ObjectType } from "type-graphql";

/**
 * * Hermes Documentation
 *
 * @created 01 02 2023
 * @collection api object
 * @notes [ ]
 *
 */
@ObjectType()
export class GraphObjectsResolve<T> {
  @Field(() => Boolean)
  pass!: boolean;

  @Field(() => String, { nullable: true })
  message?: T | null;

  @Field(() => Number)
  timestamp!: number;

  @Field(() => String)
  hash!: string;
}
