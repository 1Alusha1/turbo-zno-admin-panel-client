import axios from 'axios';
import config from '../config/config.js';
import { setAlert } from '../store/reducers/userAlertReducer.js';
import {
  fetchChekAuthSuccess,
  fetchLoginActionCreator,
  fetchChekAuthError,
} from '../store/reducers/userReducer';

export const fetchLogin = (code, cb) => {
  return async (dispatch) => {
    try {
      await axios(`${config.API_URI}/auth/login`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        data: JSON.stringify({ code }),
      })
        .then(({ data }) => {
          dispatch(fetchLoginActionCreator(data));
          cb(data.token);
        })
        .catch((err) => {
          if (err.response) {
            return dispatch(setAlert(err.response.data));
          }
          console.log(err);
        });
    } catch (err) {
      if (err) console.log(err);
    }
  };
};

export const fetchChekAuth = (token) => {
  return async (dispatch) => {
    try {
      await axios({
        method: 'GET',
        url: `${config.API_URI}/auth/check-auth`,
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(({ data }) => {
          dispatch(fetchChekAuthSuccess(data));
        })
        .catch((err) => {
          if (err.response) {
            dispatch(fetchChekAuthError());
            return dispatch(setAlert(err.response.data));
          }
          console.log(err);
        });
    } catch (err) {
      if (err) console.log(err);
    }
  };
};
export const logout = () => {};
