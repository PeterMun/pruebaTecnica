"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const documentoService_1 = require("../application/documentoService");
const documentoRepository_1 = require("../infrastructure/documentoRepository");
const repository = new documentoRepository_1.DocumentoRepository();
const service = new documentoService_1.DocumentService(repository);
const DocumentoController = (0, express_1.Router)();
// 👇 Aquí SÍ tipas el body:
DocumentoController.post("/", (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: "Title and content are required" });
    }
    const document = service.createDocument(title, content);
    return res.status(201).json(document);
});
DocumentoController.get("/", (_req, res) => {
    const documents = service.getAllDocuments();
    return res.json(documents);
});
DocumentoController.get("/:id", (req, res) => {
    const { id } = req.params;
    const document = service.getDocumentById(id);
    if (!document) {
        return res.status(404).json({ message: "Document not found" });
    }
    return res.json(document);
});
exports.default = DocumentoController;
