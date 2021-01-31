import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1611783275363 implements MigrationInterface {
    name = 'migration1611783275363'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `random_question` (`id` int NOT NULL AUTO_INCREMENT, `questionContent` longtext NOT NULL, `answer` longtext NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `posting` CHANGE `randomCode` `randomCode` int(6) NOT NULL");
        await queryRunner.query("ALTER TABLE `posting` DROP COLUMN `status`");
        await queryRunner.query("ALTER TABLE `posting` ADD `status` varchar(255) NOT NULL DEFAULT 'reported'");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `posting` DROP COLUMN `status`");
        await queryRunner.query("ALTER TABLE `posting` ADD `status` enum ('reported', 'applied', 'denied') NOT NULL DEFAULT 'reported'");
        await queryRunner.query("ALTER TABLE `posting` CHANGE `randomCode` `randomCode` int NOT NULL");
        await queryRunner.query("DROP TABLE `random_question`");
    }

}
