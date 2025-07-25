// src/data-source.ts
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Product }  from './models/Product';
import { Category } from './models/Category';

export const AppDataSource = new DataSource({
  type:       'postgres',
  host:       process.env.DB_HOST,
  port:       Number(process.env.DB_PORT) || 5432,   // ← eski: +process.env.DB_PORT!
  username:   process.env.DB_USERNAME,
  password:   process.env.DB_PASSWORD,
  database:   process.env.DB_NAME,
  synchronize:false,
  logging:    false,
  entities:   [Product, Category],
  migrations: [__dirname + '/migration/*.{js,ts}'],
});

export default AppDataSource;
