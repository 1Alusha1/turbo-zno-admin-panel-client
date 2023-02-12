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
          Authorization: `Bearer ${userData.token}`,
        },
        data: JSON.stringify({
          groupName: userData.groupName,
          message: userData.message,
        }),
      })
        .then(({ data }) => {
          dispatch(setAlert(data));
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
