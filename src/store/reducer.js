const initialState = {
  user: null
};

const reducer = ( state = initialState, action ) => {

  console.log(state, 'State')
  console.log(action.payload, 'Action')

  return action.type === "USER_LOGGED" ? ({ ...state, user: action.payload}) : state;
}

export default reducer;