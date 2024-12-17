"use client";

import React from "react";
import styles from "../../../styles/modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  header: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, header, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={styles.modal}
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-content"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className={styles.modalHeader}>
          <h2 id="modal-title">{header}</h2>
          <button
            className={styles.crossButton}
            onClick={onClose}
            aria-label="Close Modal"
          >
            &times;
          </button>
        </div>

        {/* Modal Content */}
        <div id="modal-content" className={styles.modalContent}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
