import React from 'react';

const Modal = ({ children, onClose }) => {
    const handleOutsideClick = (e) => {
        if (e.target.className.includes('modal-overlay')) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center" onClick={handleOutsideClick}>
            <div className="modal-content bg-white p-5 rounded">
                {children}
            </div>
        </div>
    );
};

export default Modal;
