export const userLoaded = (user) => {
  return {
    type: "USER_LOGGED",
    payload: user
  };
};

export const userLogOut = () => {
  return {
    type: "USER_LOGGED_OUT",
    payload: null
  };
};

