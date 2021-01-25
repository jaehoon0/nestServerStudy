import { MigrationInterface, QueryRunner } from 'typeorm';

export class migration1611535596196 implements MigrationInterface {
  name = 'migration1611535596196';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `potato` (`id` int NOT NULL AUTO_INCREMENT, `grade` varchar(255) NOT NULL, `price` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `isSold` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `potato`');
  }
}
