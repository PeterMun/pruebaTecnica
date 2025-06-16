"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentService = void 0;
class DocumentService {
    constructor(repository) {
        this.repository = repository;
    }
    createDocument(title, content) {
        return this.repository.create(title, content);
    }
    getAllDocuments() {
        return this.repository.getAll();
    }
    getDocumentById(id) {
        return this.repository.getById(id);
    }
}
exports.DocumentService = DocumentService;
