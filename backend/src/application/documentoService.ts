

import { Documento } from "../domain/documentoDomain";
import { DocumentoRepository } from "../infrastructure/documentoRepository";

export class DocumentService {
  constructor(private repository: DocumentoRepository) {}

  createDocument(title: string, content: string): Documento {
    return this.repository.create(title, content);
  }

  getAllDocuments(): Documento[] {
    return this.repository.getAll();
  }

  getDocumentById(id: string): Documento | undefined {
    return this.repository.getById(id);
  }
}




