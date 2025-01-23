import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCreationDateTrigger1673900000001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TRIGGER SetCreationDate BEFORE INSERT ON users
      FOR EACH ROW
      BEGIN
        IF NEW.data_criacao IS NULL THEN
          SET NEW.data_criacao = CURRENT_TIMESTAMP;
        END IF;
      END;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TRIGGER IF EXISTS SetCreationDate;`);
  }
}
