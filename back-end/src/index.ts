import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initializeDatabase } from './config/db';
import productRoutes from './routes/productRoutes';

dotenv.config();

async function bootstrap() {
  await initializeDatabase();
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use('/api/v1/products', productRoutes);

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Sunucu ${PORT} portunda çalışıyor`);
  });
}

bootstrap();
