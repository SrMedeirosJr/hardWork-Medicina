import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCleanOldRecordsProcedure1673900000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE PROCEDURE CleanOldRecords(IN cutoff_date DATE)
      BEGIN
        DELETE FROM users WHERE data_criacao < cutoff_date;
      END;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP PROCEDURE IF EXISTS CleanOldRecords;`);
  }
}
