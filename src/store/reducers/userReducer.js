const FETCH_LOGIN = 'FETCH_LOGIN';
const FETCH_LOGIN_ERROR = 'FETCH_LOGIN_ERROR';

export const initialState = {
  token: '',
  userInfo: {
    _id: '',
    username: '',
  },
  error: {
    message: '',
    type: '',
  },
  isAuth: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGIN:
      return {
        ...state,
        token: action.payload.token,
        userInfo: action.payload.userInfo,
        isAuth: true,
      };
    case FETCH_LOGIN_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const fetchLoginActionCreator = (payload) => ({
  type: FETCH_LOGIN,
  payload,
});

export const fetchLoginErrorActionCreator = (payload) => ({
  type: FETCH_LOGIN_ERROR,
  payload,
});
