import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserAndLocation1721617999648 implements MigrationInterface {
    name = 'AddUserAndLocation1721617999648'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Tạo bảng `provinces`
        await queryRunner.query(`
            CREATE TABLE \`provinces\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`name\` varchar(255) NOT NULL,
                \`code\` varchar(50) NOT NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE=InnoDB
        `);

        // Tạo bảng `districts`
        await queryRunner.query(`
            CREATE TABLE \`districts\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`name\` varchar(255) NOT NULL,
                \`code\` varchar(50) NOT NULL,
                \`province_id\` int NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE=InnoDB
        `);

        // Tạo bảng `wards`
        await queryRunner.query(`
            CREATE TABLE \`wards\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`name\` varchar(255) NOT NULL,
                \`code\` varchar(50) NOT NULL,
                \`district_id\` int NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE=InnoDB
        `);

        // Tạo bảng `registers`
        await queryRunner.query(`
            CREATE TABLE \`registers\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`email\` varchar(255) NOT NULL,
                \`role\` enum('Admin', 'User') NOT NULL,
                \`password\` varchar(255) NOT NULL,
                \`cmnd\` varchar(255) NOT NULL,
                \`name\` varchar(255) NOT NULL,
                \`dob\` date NOT NULL,
                \`gender\` enum('Male', 'Female', 'Other', 'Unspecified') NOT NULL,
                \`province_id\` int NULL,
                \`district_id\` int NULL,
                \`ward_id\` int NULL,
                UNIQUE INDEX \`IDX_email\` (\`email\`),
                PRIMARY KEY (\`id\`)
            ) ENGINE=InnoDB
        `);

        // Tạo bảng `addresses`
        await queryRunner.query(`
            CREATE TABLE \`addresses\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`province_id\` int NULL,
                \`district_id\` int NULL,
                \`ward_id\` int NULL,
                \`register_id\` int NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE=InnoDB
        `);

        // Thêm khóa ngoại cho bảng `districts`
        await queryRunner.query(`
            ALTER TABLE \`districts\`
            ADD CONSTRAINT \`FK_province_id\`
            FOREIGN KEY (\`province_id\`)
            REFERENCES \`provinces\`(\`id\`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
        `);

        // Thêm khóa ngoại cho bảng `wards`
        await queryRunner.query(`
            ALTER TABLE \`wards\`
            ADD CONSTRAINT \`FK_district_id\`
            FOREIGN KEY (\`district_id\`)
            REFERENCES \`districts\`(\`id\`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
        `);

        // Thêm khóa ngoại cho bảng `registers`
        await queryRunner.query(`
            ALTER TABLE \`registers\`
            ADD CONSTRAINT \`FK_province_register\`
            FOREIGN KEY (\`province_id\`)
            REFERENCES \`provinces\`(\`id\`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`registers\`
            ADD CONSTRAINT \`FK_district_register\`
            FOREIGN KEY (\`district_id\`)
            REFERENCES \`districts\`(\`id\`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`registers\`
            ADD CONSTRAINT \`FK_ward_register\`
            FOREIGN KEY (\`ward_id\`)
            REFERENCES \`wards\`(\`id\`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
        `);

        // Thêm khóa ngoại cho bảng `addresses`
        await queryRunner.query(`
            ALTER TABLE \`addresses\`
            ADD CONSTRAINT \`FK_province_address\`
            FOREIGN KEY (\`province_id\`)
            REFERENCES \`provinces\`(\`id\`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`addresses\`
            ADD CONSTRAINT \`FK_district_address\`
            FOREIGN KEY (\`district_id\`)
            REFERENCES \`districts\`(\`id\`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`addresses\`
            ADD CONSTRAINT \`FK_ward_address\`
            FOREIGN KEY (\`ward_id\`)
            REFERENCES \`wards\`(\`id\`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`addresses\`
            ADD CONSTRAINT \`FK_register_address\`
            FOREIGN KEY (\`register_id\`)
            REFERENCES \`registers\`(\`id\`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`addresses\` DROP FOREIGN KEY \`FK_register_address\``);
        await queryRunner.query(`ALTER TABLE \`addresses\` DROP FOREIGN KEY \`FK_ward_address\``);
        await queryRunner.query(`ALTER TABLE \`addresses\` DROP FOREIGN KEY \`FK_district_address\``);
        await queryRunner.query(`ALTER TABLE \`addresses\` DROP FOREIGN KEY \`FK_province_address\``);
        await queryRunner.query(`ALTER TABLE \`registers\` DROP FOREIGN KEY \`FK_ward_register\``);
        await queryRunner.query(`ALTER TABLE \`registers\` DROP FOREIGN KEY \`FK_district_register\``);
        await queryRunner.query(`ALTER TABLE \`registers\` DROP FOREIGN KEY \`FK_province_register\``);
        await queryRunner.query(`ALTER TABLE \`wards\` DROP FOREIGN KEY \`FK_district_id\``);
        await queryRunner.query(`ALTER TABLE \`districts\` DROP FOREIGN KEY \`FK_province_id\``);
        await queryRunner.query(`DROP INDEX \`IDX_email\` ON \`registers\``);
        await queryRunner.query(`DROP TABLE \`addresses\``);
        await queryRunner.query(`DROP TABLE \`registers\``);
        await queryRunner.query(`DROP TABLE \`wards\``);
        await queryRunner.query(`DROP TABLE \`districts\``);
        await queryRunner.query(`DROP TABLE \`provinces\``);
    }
}
