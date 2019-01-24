import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const EditButton = ({onClick}) => (
  <button className='bn ml' onClick={onClick}>
    <FontAwesomeIcon icon="pencil-alt"/>
  </button>
);

const SaveButton = ({onClick}) => (
  <button className='bn ml' onClick={onClick}>
    <FontAwesomeIcon icon="save"/>
  </button>
);

const EditOrSaveTextButton = ({switchEditable, save, editable}) => (
  editable
    ? <SaveButton onClick={save}/>
    : <EditButton onClick={switchEditable}/>
);

export default EditOrSaveTextButton;