import axios from 'axios';
import config from '../config/config';
import { getGroupsActionCreator } from '../store/reducers/optionReducer';
import { setAlert } from '../store/reducers/userAlertReducer';

export const fetchCreateTeacher = (userData) => {
  return async (dispatch) => {
    await axios({
      method: 'post',
      url: `${config.API_URI}/option/create-teacher-group`,
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${userData.token}`,
      },
      data: JSON.stringify({
        groupName: userData.groupName,
        teacherName: userData.teacherName,
      }),
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
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${userData.token}`,
      },
      data: JSON.stringify({
        groupName: userData.groupName,
        teacherName: userData.teacherName,
        subGroupName: userData.subGroupName,
      }),
    })
      .then(({ data }) => {
        dispatch(setAlert(data));
      })
      .catch((err) => {
        dispatch(setAlert(err.response.data));
      });
  };
};

export const fetchGetGroups = (userData) => {
  return async (dispatch) => {
    try {
      await axios(`${config.API_URI}/option/get-groups`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${userData.token}`,
        },
        data: JSON.stringify({ teacherName: userData.teacherName }),
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
