
// src/config/db.ts
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import ormconfig from '../config/ormconfig';

export const AppDataSource = new DataSource(ormconfig);

export function initializeDatabase() {
  return AppDataSource.initialize()
    .then(() => console.log('📦 PostgreSQL’e bağlandı'))
    .catch(err => {
      console.error('🚨 Veritabanı bağlantı hatası:', err);
      process.exit(1);
    });
}
