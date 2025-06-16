import React, { useState, useEffect } from 'react';

import styles from './styles/App.module.css';
import ListarDocumentos from './componentes/ListarDocumentos';
import VerDocumento from './componentes/VerDocumento';
import CrearDocumento from './componentes/CrearDocumento';

export interface Document {
  id: number;
  title: string;
  content: string;
}

const App: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [showCreate, setShowCreate] = useState(false);

  // Cargar documentos desde API localhost
  useEffect(() => {
    fetch('http://localhost:5000/documents')
      .then((res) => res.json())
      .then((data) => setDocuments(data))
      .catch((err) => {
        console.error('Error al cargar documentos:', err);
      });
  }, []);

  const addDocument = (doc: Document) => {
    setDocuments((prev) => [...prev, doc]);
  };

  const selectDocument = (id: number) => {
    const doc = documents.find((d) => d.id === id) || null;
    setSelectedDoc(doc);
  };

  return (
    <div className={styles.container}>
      <h1>Gestor de Documentos</h1>

      <button className={styles.createBtn} onClick={() => setShowCreate(true)}>
        Crear Documento
      </button>

      <ListarDocumentos documents={documents} onSelect={selectDocument} />

      {selectedDoc && (
  <VerDocumento
    document={selectedDoc}
    onClose={() => setSelectedDoc(null)}
  />
)}


      {showCreate && (
        <CrearDocumento
          onClose={() => setShowCreate(false)}
          onCreate={addDocument}
        />
      )}
    </div>
  );
};

export default App;
