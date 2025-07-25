"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/seeds/seed.ts
const db_1 = require("../config/db");
const Product_1 = require("../models/Product");
async function seed() {
    await (0, db_1.initializeDatabase)();
    const repo = db_1.AppDataSource.getRepository(Product_1.Product);
    const items = [
        {
            title: 'El Yapımı Çini Kupa',
            description: '10x8 cm, el işi İznik çinisi.',
            price: 150,
            inStock: true
        },
        {
            title: 'Desenli Tabak',
            description: 'Çap: 25 cm, klasik desen.',
            price: 200,
            inStock: true
        },
        {
            title: 'Desenli Sürahi',
            description: 'Çap: 35 cm, klasik desen.',
            price: 400,
            inStock: true
        }
    ];
    for (const data of items) {
        const p = repo.create(data);
        await repo.save(p);
    }
    console.log('✅ Seed işlemi tamamlandı');
    process.exit(0);
}
seed();
