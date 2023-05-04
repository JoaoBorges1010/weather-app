import React, { useEffect } from "react";

const Modal = ({ onClose, children, actionBar }) => {
  useEffect(() => {});

  return (
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl shadow-xl shadow-gray-500">
        <div className="flex flex-col justify-between h-full">{children}</div>
        <div className="flex justify-end">{actionBar}</div>
      </div>
    </div>
  );
};

export default Modal;
