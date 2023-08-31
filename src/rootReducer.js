// rootReducer.js

import { combineReducers } from 'redux';
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  // Other reducers...
});

export default rootReducer;