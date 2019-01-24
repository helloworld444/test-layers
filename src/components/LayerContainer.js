import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {edit, remove, switchActivity} from "../actions/layer";
import Layer from "./Layer";

class LayerContainer extends Component {
  state = {
    editModeActivated: false,
    text: this.props.text
  };

  switchEditableMode = () => {
    this.setState({editModeActivated: !this.state.editModeActivated});
  };

  handleInputChange = ({target: {value}}) => {
    this.setState({text: value})
  };

  save = () => {
    const {text} = this.state;
    const {id} = this.props;
    this.props.edit({text, id}, this.switchEditableMode)
  };

  render() {
    const {editModeActivated, text} = this.state;
    return (
      <Layer
        {...this.props}
        text={text}
        editable={editModeActivated}
        switchEditable={this.switchEditableMode}
        onChange={this.handleInputChange}
        save={this.save}
      />
    )
  }
}

export default connect(null, {edit, remove, switchActivity})(LayerContainer);