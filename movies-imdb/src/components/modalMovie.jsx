import React from "react";
import "../styles/styles.css";

const ModalMovie = ({ children, onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ModalMovie;