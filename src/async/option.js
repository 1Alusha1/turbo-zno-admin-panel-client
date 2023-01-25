import axios from 'axios';
import config from '../../config/config';
export const fetchCreateTeacher = async (userData) => {
  await axios({
    method: 'post',
    url: `${config.API_URI}/option/create-teacher-group`,
    headers: { 'content-type': 'application/json' },
    data: JSON.stringify(userData),
  })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
