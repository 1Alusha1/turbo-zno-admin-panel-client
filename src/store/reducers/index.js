import { combineReducers } from 'redux';
import { optionReducer } from './optionReducer';
import { userReducer } from './userReducer';
export const rootReducer = combineReducers({
  user: userReducer,
  option: optionReducer,
});
