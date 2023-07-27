export const logIn = (token, username, id) => {
  return {
    type: "LOGIN",
    payload: {
      token: token,
      userName: username,
      userId: id,
    },
  };
};

export const signIn = (token, username, id) => {
  return {
    type: "SIGNIN",
    payload: {
      token: token,
      userName: username,
      userId: id,
    },
  };
};

export const logOut = () => {
  return {
    type: "LOGOUT",
  };
};
