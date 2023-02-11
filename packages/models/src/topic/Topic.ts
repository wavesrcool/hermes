import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ModelsRecords } from "../_records/ModelsRecords";

/**
 * * Hermes Documentation
 *
 * @created 01 03 2023
 * @collection models ref
 * @notes [ ]
 *
 */
@ObjectType()
@Entity()
export class Topic extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @CreateDateColumn()
  created!: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updated!: Date;

  @Field(() => String)
  @Column()
  @Generated("uuid")
  key!: string;

  //
  //
  // model fields
  //

  @Field(() => String, { nullable: true })
  @Column({ type: `varchar`, nullable: true, default: null })
  title!: string | null;

  //
  //
  // model records
  //

  @Field(() => ModelsRecords, { nullable: true })
  @Column({ type: "json", nullable: true, default: null })
  records!: ModelsRecords | null;

  //
  //
  // model relations
  //
}
