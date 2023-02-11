import { MigrationInterface, QueryRunner } from "typeorm";

export class Models1676133243226 implements MigrationInterface {
  name = "Models1676133243226";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "thread" ("id" SERIAL NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "key" uuid NOT NULL DEFAULT uuid_generate_v4(), "subject" character varying NOT NULL, CONSTRAINT "PK_cabc0f3f27d7b1c70cf64623e02" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "msg" ("id" SERIAL NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "key" uuid NOT NULL DEFAULT uuid_generate_v4(), "wave" character varying NOT NULL, "records" json, "threadId" integer, CONSTRAINT "UQ_d69309ec6ca66fa52bffaec5958" UNIQUE ("wave"), CONSTRAINT "PK_e55101445a9bb52752d52e98e60" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "msg" ADD CONSTRAINT "FK_dadaa51afeba27849ddb457a965" FOREIGN KEY ("threadId") REFERENCES "thread"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "msg" DROP CONSTRAINT "FK_dadaa51afeba27849ddb457a965"`
    );
    await queryRunner.query(`DROP TABLE "msg"`);
    await queryRunner.query(`DROP TABLE "thread"`);
  }
}
