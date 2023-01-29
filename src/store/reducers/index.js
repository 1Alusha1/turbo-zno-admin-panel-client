import { combineReducers } from 'redux';
import { optionReducer } from './optionReducer';
import { userAlertReducer } from './userAlertReducer';
import { userReducer } from './userReducer';
export const rootReducer = combineReducers({
  user: userReducer,
  option: optionReducer,
  alert: userAlertReducer,
});
