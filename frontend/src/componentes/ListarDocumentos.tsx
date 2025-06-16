import React from 'react';
import styles from '../styles/ListarDocumento.module.css';
import type { Document } from '../App';

interface Props {
  documents: Document[];
  onSelect: (id: number) => void;
}

const ListarDocumentos: React.FC<Props> = ({ documents, onSelect }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Lista de Documentos</h2>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id}>
                <td>{doc.id}</td>
                <td>{doc.title}</td>
                <td>
                  <button
                    className={styles.viewBtn}
                    onClick={() => onSelect(doc.id)}
                    title="Ver"
                  >
                    👁️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListarDocumentos;
