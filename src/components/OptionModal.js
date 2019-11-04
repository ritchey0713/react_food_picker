import React from 'react';
import Modal from 'react-modal';
import ReactModal from 'react-modal';


const OptionModal = (props) => {
  ReactModal.setAppElement("#app")
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Restaurant"
      onRequestClose={props.handleModalClose}
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__title">Selected Restaurant:</h3>
      {props.selectedOption && <p className="modal__subtitle">{props.selectedOption}</p>}
      <button className="button" onClick={props.handleModalClose}>Okay!</button>
    </Modal>
  )
}

export default OptionModal