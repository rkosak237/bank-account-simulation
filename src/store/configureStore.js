//Store creation

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';

import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from '../firebase/fbConfig';

const initialState = {};
const middleware = [
  thunk.withExtraArgument({ getFirebase }),
];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    compose(
      applyMiddleware(...middleware),
      reactReduxFirebase(fbConfig)
    )
  )
);

export default store;