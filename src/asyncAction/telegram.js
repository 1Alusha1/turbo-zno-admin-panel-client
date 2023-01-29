import axios from 'axios';
import config from '../config/config';
import { setAlert } from '../store/reducers/userAlertReducer';

export const fetchSendMessage = (userData) => {
  return async (dispatch) => {
    try {
      axios(`${config.API_URI}/telegram-api/send-message-to-group`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        data: JSON.stringify(userData),
      })
        .then(({ data }) => {
          dispatch(setAlert(data))
        })
        .catch((err) => {
          if (err) dispatch(setAlert(err.response.data))
        });
    } catch (err) {
      if (err) console.log(err);
    }
  };
};
