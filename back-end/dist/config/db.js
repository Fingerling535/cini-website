"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeDatabase = exports.AppDataSource = void 0;
// src/config/db.ts
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const ormconfig_1 = __importDefault(require("./ormconfig"));
exports.AppDataSource = new typeorm_1.DataSource(ormconfig_1.default);
function initializeDatabase() {
    return exports.AppDataSource.initialize()
        .then(() => console.log('📦 PostgreSQL’e bağlandı'))
        .catch(err => {
        console.error('🚨 Veritabanı bağlantı hatası:', err);
        process.exit(1);
    });
}
exports.initializeDatabase = initializeDatabase;
