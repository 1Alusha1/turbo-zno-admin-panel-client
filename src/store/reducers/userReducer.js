const FETCH_LOGIN = 'FETCH_LOGIN';
const FETCH_LOGIN_ERROR = 'FETCH_LOGIN_ERROR';
const CHECK_AUTH_SUCCESS = 'CHECK_AUTH_SUCCESS';
const CHECK_AUTH_ERROR = 'CHECK_AUTH_ERROR';
export const initialState = {
  token: '',
  userInfo: {
    _id: '',
    username: '',
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
    case CHECK_AUTH_SUCCESS:
      return {
        ...state,
        userInfo: action.payload.userInfo,
        isAuth: action.payload.isAuth,
      };
    default:
      return state;
  }
};

// export const fetchChekAuthError = (payload) => ({
//   type: CHECK_AUTH_ERROR,
//   payload,
// });

export const fetchChekAuthSuccess = (payload) => ({
  type: CHECK_AUTH_SUCCESS,
  payload,
});

export const fetchLoginActionCreator = (payload) => ({
  type: FETCH_LOGIN,
  payload,
});

export const fetchLoginErrorActionCreator = (payload) => ({
  type: FETCH_LOGIN_ERROR,
  payload,
});
