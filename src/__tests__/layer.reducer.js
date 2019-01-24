import {expect} from 'chai';
import reducer from '../../src/reducers/layer';
import * as types from '../../src/actions/types';

const initialState = {
  layers: [{text: '123', id: 1}]
};

const anotherLayer = {text: '345', id: 2};

it('should return the initial state', () => {
  expect(reducer(undefined, {})).to.eql(initialState);
});

it('should handle REMOVED_LAYER_SUCCESSFULLY', () => {
  expect(
    reducer(initialState, {
      type: types.REMOVED_LAYER_SUCCESSFULLY,
      id: 1
    })
  ).to.eql({layers: []});

  expect(
    reducer(
      {
        ...initialState,
        layers: [
          ...initialState.layers,
          anotherLayer
        ]
      }, {
        type: types.REMOVED_LAYER_SUCCESSFULLY,
        id: 2
      }
    )
  ).to.eql(initialState)
});