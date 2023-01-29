import axios from 'axios';
import config from '../config/config';
import { getGroupsActionCreator } from '../store/reducers/optionReducer';
import { setAlert } from '../store/reducers/userAlertReducer';

export const fetchCreateTeacher = (userData) => {
  return async (dispatch) => {
    await axios({
      method: 'post',
      url: `${config.API_URI}/option/create-teacher-group`,
      headers: { 'content-type': 'application/json' },
      data: JSON.stringify(userData),
    })
      .then(({ data }) => {
        dispatch(setAlert(data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setAlert(err.response.data));
      });
  };
};

export const fetchCreateTeacherSubGroup = (userData) => {
  return async (dispatch) => {
    await axios({
      method: 'post',
      url: `${config.API_URI}/option/create-teacher-sub-group`,
      headers: { 'content-type': 'application/json' },
      data: JSON.stringify(userData),
    })
      .then(({ data }) => {
        dispatch(setAlert(data));
      })
      .catch((err) => {
        dispatch(setAlert(err.response.data));
      });
  };
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
        .then(({ data }) => {
          dispatch(getGroupsActionCreator(data.list));
          dispatch(setAlert({ type: data.type, message: data.message }));
        })
        .catch((err) => {
          if (err) console.log(err.response.data);
        });
    } catch (err) {}
  };
};
