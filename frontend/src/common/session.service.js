const USER_KEY = "user";

export const getUser = () => {
  return window.localStorage.getItem(USER_KEY);
};

export const saveUser = (User) => {
  window.localStorage.setItem(USER_KEY, JSON.stringify(User));
};

export const destroyUser = () => {
  window.localStorage.removeItem(USER_KEY);
};

export default { getUser, saveUser, destroyUser };
