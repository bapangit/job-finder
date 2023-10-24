import { createContext, useState } from "react";
import { getUserId, setUserIdInApp } from "utils/LocalStorageMethods";
export const UserContext = createContext();

export const UserContextProvider = (prop) => {
  const [userId, setUserId] = useState(getUserId());

  const resetUserId = (id) => {
    setUserIdInApp(id);
    setUserId(id);
  };

  return (
    <UserContext.Provider value={{ userId, resetUserId }}>
      {prop.children}
    </UserContext.Provider>
  );
};
