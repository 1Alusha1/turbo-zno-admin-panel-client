import axios from 'axios';
import config from '../config/config';
import { getGroupsActionCreator } from '../store/reducers/optionReducer';
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

export const fetchCreateTeacherSubGroup = async (userData) => {
  await axios({
    method: 'post',
    url: `${config.API_URI}/option/create-teacher-sub-group`,
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

export const fetchGetGroups = (teacherName) => {
  return async (dispatch) => {
    try {
      await axios(`${config.API_URI}/option/get-groups`, {
        method: 'post',
        data: JSON.stringify({ teacherName: teacherName }),
        headers: {
          'content-type': 'application/json',
        },
      })
        .then(({data}) => {
          console.log(data);
          dispatch(getGroupsActionCreator(data.list));
        })
        .catch((err) => {
          if (err) console.log(err.response.data);
        });
    } catch (err) {}
  };
};