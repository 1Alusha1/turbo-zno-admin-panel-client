import axios from 'axios';
import config from '../config/config';
import {
  getGroupActionCreator,
  getGroupsActionCreator,
} from '../store/reducers/optionReducer';
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
        if (err) console.log(err.response.data);
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
        if (err) console.log(err.response.data);
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
          dispatch(setAlert(err.response.data));
        });
    } catch (err) {
      if (err) console.log(err);
    }
  };
};

export const fetchGetAllGroups = (token) => {
  return async (dispatch) => {
    try {
      await axios(`${config.API_URI}/option/get-all-groups`, {
        method: 'get',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then(({ data }) => {
          dispatch(getGroupsActionCreator(data.groups));
          dispatch(setAlert({ type: data.type, message: data.message }));
        })
        .catch((err) => {
          if (err) console.log(err.response.data);
          dispatch(setAlert(err.response.data));
        });
    } catch (err) {
      if (err) console.log(err);
    }
  };
};

export const fetchGetGroup = (id) => {
  return async (dispatch) => {
    try {
      await axios(`${config.API_URI}/option/get-group/${id}`, {
        method: 'get',
      })
        .then(({ data }) => {
          dispatch(getGroupActionCreator(data));
          dispatch(setAlert({ type: data.type, message: data.message }));
        })
        .catch((err) => {
          if (err) console.log(err.response.data);
          dispatch(setAlert(err.response.data));
        });
    } catch (err) {
      if (err) console.log(err);
    }
  };
};
export const fetchRenameGroup = (groupName, newName, token) => {
  return async (dispatch) => {
    try {
      await axios(`${config.API_URI}/option/rename-group`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: JSON.stringify({ groupName, newName }),
      })
        .then(({ data }) => {
          dispatch(setAlert({ type: data.type, message: data.message }));
        })
        .catch((err) => {
          if (err) console.log(err.response.data);
          dispatch(setAlert(err.response.data));
        });
    } catch (err) {
      if (err) console.log(err);
    }
  };
};

export const fetchDeleteStudent = (student, token) => {
  return async (dispatch) => {
    await axios(`${config.API_URI}/option/delete-student`, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: JSON.stringify(student),
    })
      .then(({ data }) => {
        dispatch(setAlert({ type: data.type, message: data.message }));
      })
      .catch((err) => {
        if (err) console.log(err.response.data);
        dispatch(setAlert(err.response.data));
      });
  };
};
