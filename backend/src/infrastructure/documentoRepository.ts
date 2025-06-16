

import { Documento } from "../domain/documentoDomain";
import { v4 as uuidv4 } from "uuid";

export class DocumentoRepository {
  private documents: Documento[] = [];

  create(title: string, content: string): Documento {
    const document: Documento = {
      id: uuidv4(),
      title,
      content
    };
    this.documents.push(document);
    return document;
  }

  getAll(): Documento[] {
    return this.documents;
  }

  getById(id: string): Documento | undefined {
    return this.documents.find(doc => doc.id === id);
  }
}


