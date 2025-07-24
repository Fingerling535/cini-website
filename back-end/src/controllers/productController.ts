// HTTP isteklerini karşılayan fonksiyonlar
import { Request, Response } from 'express';
import * as productService from '../services/productService';

export const getAll = async (_req: Request, res: Response) => {
  const products = await productService.listAll();
  res.json(products);
};

export const create = async (req: Request, res: Response) => {
  const newProd = await productService.createProduct(req.body);
  res.status(201).json(newProd);
};