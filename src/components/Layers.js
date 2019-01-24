import React from 'react';
import {connect} from "react-redux";
import CreateNewLayer from "./CreateNewLayerContainer";
import LayerContainer from "./LayerContainer";

const renderLayer = ({id, ...props}) => (
  <LayerContainer
    key={id}
    {...props}
    id={id}
  />
);

const Layers = ({layers}) => (
  <div>
    {layers.map(renderLayer)}
    <CreateNewLayer/>
  </div>
);

export default connect(({layer: {layers}}) => ({layers}))(Layers);