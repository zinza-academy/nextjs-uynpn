import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const DatabaseConfig = registerAs('database', (): TypeOrmModuleOptions => ({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [`${__dirname}/../model/*.model{.ts,.js}`],
  migrations: [`${__dirname}/../../../db/migrations/*{.ts,.js}`],
  migrationsTableName: 'migrations',
}));