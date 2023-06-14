import React from 'react';
import { IconX } from '@tabler/icons-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Lightbox: React.FC<LightboxProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="relative w-[100vh] overflow-auto">
        <div className="relative ">
            <button className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={onClose}>
                    <IconX size={25}/>
            </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;