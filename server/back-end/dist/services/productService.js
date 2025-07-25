"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = exports.listAll = void 0;
// iş mantığı, veri erişim katmanı
const db_1 = require("../config/db");
const Product_1 = require("../models/Product");
const repo = () => db_1.AppDataSource.getRepository(Product_1.Product);
const listAll = async () => {
    return await repo().find();
};
exports.listAll = listAll;
const createProduct = async (data) => {
    const prod = repo().create(data);
    return repo().save(prod);
};
exports.createProduct = createProduct;
