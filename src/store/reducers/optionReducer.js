const GET_GROUPS = 'GET_GROUPS';
const initialState = {
  groups: [],
};
export const optionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GROUPS:
      return {...state, groups: action.payload };
    default:
      return state;
  }
};

export const getGroupsActionCreator = (payload) => ({
  type: GET_GROUPS,
  payload,
});
