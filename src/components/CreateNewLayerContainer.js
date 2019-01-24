import React, {Component} from 'react';
import Modal from 'react-modal';
import CreateNewLayer from "./CreateNewLayer";
import {connect} from "react-redux";
import {add} from '../actions/layer';

Modal.setAppElement('#root');

class CreateNewLayerContainer extends Component {
  state = {
    modalOpen: false,
    text: ''
  };

  openModal = () => {
    this.setState({modalOpen: true})
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
      text: ''
    })
  };

  handleInputChange = ({target: {value}}) => {
    this.setState({text: value})
  };

  handleSubmit = () => {
    const {text} = this.state;
    this.props.add({text}, this.closeModal)
  };

  render() {
    const {modalOpen, text} = this.state;
    return (
      <>
        <Modal
          isOpen={modalOpen}
          onRequestClose={this.closeModal}
        >
          <CreateNewLayer
            onSubmit={this.handleSubmit}
            text={text}
            onChange={this.handleInputChange}
          />
        </Modal>
        <button onClick={this.openModal}>
          New Item
        </button>
      </>
    )
  }
}

export default connect(null, {add})(CreateNewLayerContainer);
