"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentoRepository = void 0;
const uuid_1 = require("uuid");
class DocumentoRepository {
    constructor() {
        this.documents = [];
    }
    create(title, content) {
        const document = {
            id: (0, uuid_1.v4)(),
            title,
            content
        };
        this.documents.push(document);
        return document;
    }
    getAll() {
        return this.documents;
    }
    getById(id) {
        return this.documents.find(doc => doc.id === id);
    }
}
exports.DocumentoRepository = DocumentoRepository;
