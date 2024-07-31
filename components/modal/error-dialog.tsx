// components/ErrorDialog.tsx

import React from 'react';

interface ErrorDialogProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
}

const ErrorDialog: React.FC<ErrorDialogProps> = ({ title, description, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white">
      <div className="bg-gray-800 bg-opacity-50 absolute inset-0"></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-md w-full">
        <h2 className="text-xl font-semibold text-red-600">{title}</h2>
        <p className="mt-4 text-gray-700">{description}</p>
        <button
          className="mt-6 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorDialog;
