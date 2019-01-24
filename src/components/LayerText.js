import React from 'react';

const LayerText = ({text, editable, onChange}) => (
  editable
    ? <input type='text' value={text} onChange={onChange}/>
    : <span>{text}</span>
);

export default LayerText;