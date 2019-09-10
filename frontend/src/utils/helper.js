export const isBrowser = typeof window !== "undefined";

let user = {};

export const logout = () => {
  user = {};
  localStorage.clear();
};

export const getUser = () => {
  user.Username = localStorage.getItem("Username");
  user.id = localStorage.getItem("ID");
  return user;
};

export const getID = () => {
  const id = localStorage.getItem("ID");
  return id;
};
