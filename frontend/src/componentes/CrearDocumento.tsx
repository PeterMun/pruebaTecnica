import React, { useState } from 'react';
import styles from '../styles/CrearDocumento.module.css';
import type { Document } from '../App';

interface Props {
  onCreate: (doc: Document) => void;
  onClose: () => void;
}

const CrearDocumento: React.FC<Props> = ({ onCreate, onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !content) {
      alert('Completa todos los campos.');
      return;
    }

    const newDoc = {
      id: Date.now(),
      title,
      content,
    };

    try {
      // Guardar en backend
      await fetch('http://localhost:5000/documents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newDoc),
      });

      onCreate(newDoc);
      onClose();
    } catch (error) {
      console.error('Error al crear documento:', error);
    }
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <h2>Nuevo Documento</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Contenido"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <div className={styles.buttons}>
            <button type="submit">Guardar</button>
            <button type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrearDocumento;
