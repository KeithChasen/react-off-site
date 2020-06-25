const initialState = {
  user: null
};

const reducer = ( state = initialState, action ) => {
  switch (action.type) {
    case "USER_LOGGED":
      return { ...state, user: action.payload };
    case "USER_LOGGED_OUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

export default reducer;
