import React from 'react';

const CreateNewLayer = ({onSubmit, text, onChange}) => (
  <form>
    <input type="text" value={text} onChange={onChange}/>

    <input type="button" value="Create" onClick={onSubmit}/>
  </form>
);

export default CreateNewLayer;