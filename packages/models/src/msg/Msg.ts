import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Thread } from "../thread/Thread";
import { MsgRecords } from "./MsgRecords";

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
export class Msg extends BaseEntity {
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

  @Field(() => String)
  @Column({ type: `varchar`, unique: true })
  wave!: string;

  //
  //
  // model records
  //

  @Field(() => MsgRecords, { nullable: true })
  @Column({ type: "json", nullable: true, default: null })
  records!: MsgRecords | null;

  //
  //
  // model relations
  //

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true })
  threadId?: number;

  @Field(() => Thread, { nullable: true })
  @ManyToOne(() => Thread, (thread) => thread.msgs)
  thread!: Thread | null;
}
