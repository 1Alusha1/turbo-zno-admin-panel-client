import axios from 'axios';
import {
  fetchChekAuthError,
  fetchChekAuthSuccess,
  fetchLoginActionCreator,
  fetchLoginErrorActionCreator,
} from '../store/reducers/userReducer';

export const fetchLogin = (code, cb) => {
  return async (dispatch) => {
    await axios
      .post('http://localhost:3000/auth/login', {
        code: code,
      })
      .then(({ data }) => {
        dispatch(fetchLoginActionCreator(data));
        cb(data.token);
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch(fetchLoginErrorActionCreator(err.response.data));
      });
  };
};

export const fetchChekAuth = (token) => {
  return async (dispatch) => {
    try {
      await axios({
        method: 'GET',
        url: 'http://localhost:3000/auth/check-auth',
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(({ data }) => {
          dispatch(fetchChekAuthSuccess(data));
        })
        .catch((err) => {
          dispatch(fetchChekAuthError(err.response.data));
        });
    } catch (err) {
      if (err) console.log(err);
    }
  };
};
