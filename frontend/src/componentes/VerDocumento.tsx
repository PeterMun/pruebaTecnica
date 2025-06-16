import React from 'react';
import styles from '../styles/VerDocumento.module.css';
import type { Document } from '../App';

interface Props {
  document: Document;
  onClose: () => void;
}

const VerDocumento: React.FC<Props> = ({ document, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>
        <h2>{document.title}</h2>
        <p>{document.content}</p>
      </div>
    </div>
  );
};

export default VerDocumento;
