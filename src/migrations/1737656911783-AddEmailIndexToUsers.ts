import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddEmailIndexToUsers1673900000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE UNIQUE INDEX IDX_USERS_EMAIL ON users (email)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX IDX_USERS_EMAIL ON users`);
  }
}
