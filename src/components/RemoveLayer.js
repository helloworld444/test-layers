import React, {Component} from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

Modal.setAppElement('#root');

class RemoveLayer extends Component {
  state = {
    modalOpen: false,
  };

  openModal = () => {
    this.setState({modalOpen: true})
  };

  closeModal = () => {
    this.setState({modalOpen: false})
  };

  render() {
    const {modalOpen} = this.state;
    const {remove} = this.props;
    return (
      <>
        <Modal
          isOpen={modalOpen}
          onRequestClose={this.closeModal}
        >
          Are you sure about this?
          <button  onClick={remove}>Yes</button>
          <button onClick={this.closeModal}>No</button>
        </Modal>
        <button className='bn ml0 ml mr' onClick={this.openModal}>
          <FontAwesomeIcon icon="trash-alt" />
        </button>
      </>
    )
  }
}

export default RemoveLayer;
