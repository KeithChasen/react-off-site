export const userLoaded = (user) => {
  return {
    type: "USER_LOGGED",
    payload: user
  };
};
