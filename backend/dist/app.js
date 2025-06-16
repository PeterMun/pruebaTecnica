"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DocumentoController_1 = __importDefault(require("../src/interfaces/DocumentoController"));
const app = (0, express_1.default)();
const port = 3000;
// Middlewares
app.use(express_1.default.json());
// Routes
app.use("/documents", DocumentoController_1.default);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
