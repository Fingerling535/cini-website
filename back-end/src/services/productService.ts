// iş mantığı, veri erişim katmanı
import { AppDataSource } from '../config/db';
import { Product } from '../models/Product';

const repo = () => AppDataSource.getRepository(Product);

export const listAll = async () => {
  return await repo().find();
};

export const createProduct = async (data: Partial<Product>): Promise<Product> => {
  const prod = repo().create(data);
  return repo().save(prod);
};