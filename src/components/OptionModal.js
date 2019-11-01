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
    >
      <h3>Selected Restaurant:</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.handleModalClose}>Okay!</button>
    </Modal>
  )
}

export default OptionModal