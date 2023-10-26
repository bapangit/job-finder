const USER_ID_KEY = "100";

export const setUserIdInApp = (id) => {
  localStorage.setItem(USER_ID_KEY, id);
};

export const getUserId = () => {
  var id =
    localStorage.getItem(USER_ID_KEY) || parseInt(Math.random() * 100000);
  setUserIdInApp(id);
  return id;
};
