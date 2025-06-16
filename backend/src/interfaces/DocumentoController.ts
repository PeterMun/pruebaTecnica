import { Request, Response, Router } from "express";
import { DocumentService } from "../application/documentoService";
import { DocumentoRepository } from "../infrastructure/documentoRepository";

const repository = new DocumentoRepository();
const service = new DocumentService(repository);

const DocumentoController = Router();

// 👉 Puedes tipar el body para máxima seguridad:
interface CreateDocumentBody {
  title: string;
  content: string;
}

// 👇 Aquí SÍ tipas el body:
DocumentoController.post("/", (req, res: any) => {
  const { title, content } = req.body as CreateDocumentBody;
  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }
  const document = service.createDocument(title, content);
  return res.status(201).json(document);
});

DocumentoController.get("/", (_req, res: any) => {
  const documents = service.getAllDocuments();
  return res.json(documents);
});

DocumentoController.get("/:id", (req, res: any) => {
  const { id } = req.params;
  const document = service.getDocumentById(id);
  if (!document) {
    return res.status(404).json({ message: "Document not found" });
  }
  return res.json(document);
});

export default DocumentoController;
