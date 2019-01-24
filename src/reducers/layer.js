import * as actions from "../actions/types";

const initialState = {
  layers: [{text: '123', id: 1}]
};

const switchLayerActivity = (state, action) => {
  const nextActiveState = !state.layers.find(l => l.id === action.id).active;
  return {
    ...state,
    layers: state.layers.map(
      l => l.id === action.id
        ? {...l, active: nextActiveState}
        : l
    )
  };
};

const remove = (state, action) => {
  const index = state.layers.findIndex(l => l.id === action.id);
  return {
    ...state,
    layers: [
      ...state.layers.slice(0, index),
      ...state.layers.slice(index + 1)
    ],
  };
};

// this is needed cos if delete request won't be successful we might want to restore the deleted layer
const changeHidden = (state, action, nextValue) => ({
  ...state,
  layers: state.layers.map(
    l => l.id === action.id
      ? {...l, _hidden: nextValue}
      : l
  )
});

export default function layer(state = initialState, action) {
  switch (action.type) {
    case actions.REMOVE_LAYER_REQUESTED:
      return changeHidden(state, action, true);
    case actions.REMOVED_LAYER_SUCCESSFULLY:
      return remove(state, action);
    case actions.REMOVE_LAYER_FAILED:
      return changeHidden(state, action, false);
    case actions.SWITCH_ACTIVITY_REQUESTED:
      return switchLayerActivity(state, action);
    case actions.SWITCH_ACTIVITY_FAILED:
      return switchLayerActivity(state, action);
    case actions.ADD_LAYER_REQUESTED:
      return {
        ...state,
        layers: [
          ...state.layers,
          action.layer
        ]
      };
    // layer non-existing at backend gonna have undefined as id value
    case actions.ADD_LAYER_FAILED:
      return remove(state, {});
    case actions.ADDED_LAYER_SUCCESSFULLY:
      return {
        ...state,
        layers: state.layers.map(
          l => !l.id
            ? action.layer
            : l
        )
      };
    // keeping previous text value so we'll be able to restore it in case if edit request fails
    case actions.EDIT_LAYER_REQUESTED: {
      const previousText = state.layers.find(l => l.id === action.layer.id).text;
      return {
        ...state,
        layers: state.layers.map(
          l => l.id === action.id
            ? {...action.layer, previousText}
            : l
        )
      };
    }
    case actions.EDIT_LAYER_FAILED: {
      const previousText = state.layers.find(l => l.id === action.layer.id).previousText;
      return {
        ...state,
        layers: state.layers.map(
          l => l.id === action.id
            ? {...action.layer, text: previousText, previousText: null}
            : l
        )
      };
    }
    case actions.EDITED_LAYER_SUCCESSFULLY: {
      return {
        ...state,
        layers: state.layers.map(
          l => l.id === action.id
            ? action.layer
            : l
        )
      };
    }
    default:
      return state;
  }
}
