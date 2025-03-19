// src/components/session/SessionHandler.jsx

export const setUserSession = (username, email) => {
  const userSession = { username, email };
  sessionStorage.setItem("user", JSON.stringify(userSession));
};

export const getUserSession = () => {
  const session = sessionStorage.getItem("user");
  return session ? JSON.parse(session) : null;
};

export const clearUserSession = () => {
  sessionStorage.removeItem("user");
};
