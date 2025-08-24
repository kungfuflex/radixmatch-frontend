import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-8 rounded-lg relative">
        <button onClick={onClose} className="absolute top-4 right-4">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;