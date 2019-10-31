import React from 'react';
import Modal from 'react-modal';
import ReactModal from 'react-modal';


const OptionModal = (props) => {
  ReactModal.setAppElement("#app")
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Restaurant"
    >
      <h3>Selected Restaurant:</h3>
    </Modal>
  )
}

export default OptionModal