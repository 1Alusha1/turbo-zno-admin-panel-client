const GET_GROUPS = 'GET_GROUPS';
const GET_GROUP = 'GET_GROUP';
const initialState = {
  groups: [],
  group: null,
};
export const optionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GROUPS:
      return { ...state, groups: action.payload };
    case GET_GROUP:
      return { ...state, group: action.payload };
    default:
      return state;
  }
};

export const getGroupsActionCreator = (payload) => ({
  type: GET_GROUPS,
  payload,
});

export const getGroupActionCreator = (payload) => ({
  type: GET_GROUP,
  payload,
});
