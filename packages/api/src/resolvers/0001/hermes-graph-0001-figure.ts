import { Field, InputType } from "type-graphql";

/**
 * * Hermes Documentation
 *
 * @created 01 02 2023
 * @collection api types
 * @notes [ ]
 *
 */
@InputType()
export class HermesGraphFigures0001 {
  @Field(() => String)
  locale!: string;
}
