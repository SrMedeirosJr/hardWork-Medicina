import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './users/users.entity'; // Certifique-se de apontar para as entidades corretas.

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'jacksparrow',
    database: 'my_nest_api',
    synchronize: false,
    logging: true,
    entities: [User], // Use a classe diretamente, não como string.
    migrations: ['dist/migrations/*.js'],

  });