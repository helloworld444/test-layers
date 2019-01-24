import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {debounce} from 'lodash';
import LayerText from "./LayerText";
import EditOrSaveTextButton from "./EditOrSaveTextButton";
import RemoveLayer from "./RemoveLayer";

const wrapWithId = (a, id) => () => a(id);

// added debounce so it won't send any useless request in case if user will spam it
const Layer = ({active, id, text, save, remove, _hidden, switchActivity, editable, switchEditable, onChange}) => (
  <div className='main' key={id}>
    {!_hidden && <>
      <button className='bn ml10 mr'
        onClick={debounce(wrapWithId(switchActivity, id), 200)}
      >
        <FontAwesomeIcon icon={active ? "circle" : ["far", "circle"]}/>
      </button>
      <LayerText
        editable={editable}
        onChange={onChange}
        text={text}
      />


      <RemoveLayer remove={wrapWithId(remove, id)}/>
      <EditOrSaveTextButton
        save={save}
        switchEditable={switchEditable}
        editable={editable}
      />
      <hr/>
    </>}
  </div>
);

export default Layer;