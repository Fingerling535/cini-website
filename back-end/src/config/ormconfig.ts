// src/config/ormconfig.ts
import { DataSourceOptions } from 'typeorm';
import dotenv from 'dotenv';
import { Product } from '../models/Product';   // eğer dosyanız products.ts ise
// veya import { Product } from '../models/Product'; // eğer dosyanızı Product.ts yaptınız

dotenv.config();

const ormconfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAMENAME,
  password: process.env.DB_PASSWORDWORD,
  database: process.env.DB_NAME,

  // ★ Burada iki seçenek:
  //  A) Direkt klass listesi:
  entities: [Product],

  //  B) Dosya deseni hem .ts hem .js için 
  // entities: [__dirname + '/../models/*.{js,ts}'],

  synchronize: true,
  logging: false,
};

export default ormconfig;
