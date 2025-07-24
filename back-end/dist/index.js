"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
dotenv_1.default.config();
async function bootstrap() {
    await (0, db_1.initializeDatabase)();
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use('/api/v1/products', productRoutes_1.default);
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`🚀 Sunucu ${PORT} portunda çalışıyor`);
    });
}
bootstrap();
