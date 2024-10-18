// src/app/components/Modal.tsx

import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render anything if the modal isn't open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-lg font-bold mb-4 text-black">Du må logge inn for å fortsette</h2>
        <button
          className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded"
          onClick={onClose}
        >
          Lukk
        </button>
      </div>
    </div>
  );
};

export default Modal;
