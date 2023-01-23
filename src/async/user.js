import axios from 'axios';
import {
  fetchLoginActionCreator,
  fetchLoginErrorActionCreator,
} from '../store/reducers/userReducer';

export const fetchLogin = (code) => {
  return async (dispatch) => {
    await axios
      .post('http://localhost:3000/auth/login', {
        code: code,
      })
      .then(({ data }) => {
        console.log(data);
        dispatch(fetchLoginActionCreator(data));
      })
      .catch((err) => {
        console.log(err.response.data)
        dispatch(fetchLoginErrorActionCreator(err.response.data));
      });
  };
};
