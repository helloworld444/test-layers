import React from 'react';
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from '../reducers';
import Layers from "./Layers";
import "./App.sass";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  undefined,
  composeEnhancers(applyMiddleware(thunk))
);

const App = () => (
  <Provider store={store}>
    <div className='bordered'>
    <Layers/>
    </div>
  </Provider>
);

export default App;
