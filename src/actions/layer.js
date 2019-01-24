import {
  ADD_LAYER_FAILED,
  ADD_LAYER_REQUESTED, ADDED_LAYER_SUCCESSFULLY, EDIT_LAYER_FAILED, EDIT_LAYER_REQUESTED,
  EDITED_LAYER_SUCCESSFULLY,
  REMOVE_LAYER_FAILED,
  REMOVE_LAYER_REQUESTED,
  REMOVED_LAYER_SUCCESSFULLY, SWITCH_ACTIVITY_FAILED, SWITCH_ACTIVITY_REQUESTED,
  SWITCHED_ACTIVITY_SUCCESSFULLY
} from "./types";


// won't be needed in a real project
// just a timeout inside of a promise returning some response as any backend does
const timeout = (response = {ok: true}) => (
  new Promise(resolve => setTimeout(() => resolve(response), 3000))
);

// fail branch won't be called without real backend but anyway
export const editRequested = (layer) => ({type: EDIT_LAYER_REQUESTED, layer});
export const editedSuccessfully = (id) => ({type: EDITED_LAYER_SUCCESSFULLY, id});
export const editFailed = (id) => ({type: EDIT_LAYER_FAILED, id});

export const edit = (layer, onSuccess) =>
  async dispatch => {
    dispatch(editRequested(layer));
    const response = await timeout({ok: true, layer});
    if (response.ok) {
      dispatch(editedSuccessfully(layer));
      onSuccess();
    } else {
      dispatch(editFailed(layer))
    }
  };


export const removeRequested = (id) => ({type: REMOVE_LAYER_REQUESTED, id});
export const removedSuccessfully = (id) => ({type: REMOVED_LAYER_SUCCESSFULLY, id});
export const removeFailed = (id) => ({type: REMOVE_LAYER_FAILED, id});

export const remove = (id) =>
  async dispatch => {
    dispatch(removeRequested(id));
    const response = await timeout();
    if (response.ok) {
      dispatch(removedSuccessfully(id))
    } else {
      dispatch(removeFailed(id))
    }
  };

export const switchActivityRequested = (id) => ({type: SWITCH_ACTIVITY_REQUESTED, id});
export const switchedActivitySuccessfully = (id) => ({type: SWITCHED_ACTIVITY_SUCCESSFULLY, id});
export const switchActivityFailed = (id) => ({type: SWITCH_ACTIVITY_FAILED, id});

export const switchActivity = (id) =>
  async dispatch => {
    dispatch(switchActivityRequested(id));
    const response = await timeout();
    if (response.ok) {
      dispatch(switchedActivitySuccessfully(id))
    } else {
      dispatch(switchActivityFailed(id))
    }
  };

export const addRequested = (layer) => ({type: ADD_LAYER_REQUESTED, layer});
export const addedSuccessfully = (layer) => ({type: ADDED_LAYER_SUCCESSFULLY, layer});
export const addFailed = () => ({type: ADD_LAYER_FAILED});

export const add = (layer, onSuccess) =>
  async dispatch => {
    dispatch(addRequested(layer));
    // generating id here cos we need some id for React to use as a key in .map()
    const response = await timeout({ok: true, layer: {...layer, id: Math.random() * 1000 + 1}});
    if (response.ok) {
      dispatch(addedSuccessfully(response.layer));
      onSuccess();
    } else {
      dispatch(addFailed(layer))
    }
  };