import axios from 'axios';

export const fetchCreateTeacher = async (userData) => {
  await axios({
    method: 'post',
    url: 'http://localhost:3000/option/create-teacher-group',
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
