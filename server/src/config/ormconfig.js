"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const Product_1 = require("../../back-end/dist/models/Product"); // eğer dosyanız products.ts ise
// veya import { Product } from '../models/Product'; // eğer dosyanızı Product.ts yaptınız
dotenv_1.default.config();
const ormconfig = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAMENAME,
    password: process.env.DB_PASSWORDWORD,
    database: process.env.DB_NAME,
    // ★ Burada iki seçenek:
    //  A) Direkt klass listesi:
    entities: [Product_1.Product],
    //  B) Dosya deseni hem .ts hem .js için 
    // entities: [__dirname + '/../models/*.{js,ts}'],
    synchronize: true,
    logging: false,
};
exports.default = ormconfig;
