import axios from 'axios';
import config from '../config/config';

export const fetchSendMessage = (userData) => {
  try {
    axios(`${config.API_URI}/telegram-api/send-message-to-group`, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      data: JSON.stringify(userData),
    })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        if (err) console.log(err.response.data);
      });
  } catch (err) {
    if (err) console.log(err);
  }
};
