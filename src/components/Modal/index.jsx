import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ show, renderHeader, renderContent, renderFooter }) => {
  if (!show) {
    return null
  }
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title text-center">{renderHeader()}</p>
          <div className="cancel-btn" aria-label="cancel">&#9587;</div>
        </header>
        <div className="modal-card-body">
          {renderContent()}
        </div>
        <footer className="modal-card-foot">
          {renderFooter && renderFooter()}
        </footer>
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal;
