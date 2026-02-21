import * as dotenv from 'dotenv';
import {TypeOrmModuleOptions} from "@nestjs/typeorm";
dotenv.config();

export const typeormConfig: TypeOrmModuleOptions = {
    // type: 'postgres',
    // host: "localhost",
    // port: 5432,
    // username: "postgres",
    // password: "1507",
    // database: "erp",
    // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    // migrations: ['dist/migrations/*.js'],
    // synchronize: true,
    // logging: true,

    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migrations/*.js'],
    synchronize: true,
    logging: true,
};
