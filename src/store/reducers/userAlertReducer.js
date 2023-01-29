const SET_ALERT = 'SET_ALERT';
const CLEAR_ALERT = 'CLEAR_ALERT';

const initialState = {
  type: '',
  message: '',
};

export const userAlertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      return { ...action.payload };
    case CLEAR_ALERT: {
      return {
        ...state,
        type: '',
        message: '',
      };
    }
    default:
      return state;
  }
};

export const setAlert = (payload) => ({
  type: SET_ALERT,
  payload,
});

export const clearAlert = () => ({
  type: CLEAR_ALERT,
});
