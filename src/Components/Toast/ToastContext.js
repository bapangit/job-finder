import { createContext, useContext, useEffect, useState } from "react";
import Toast from "./Toast";

export const ToastContext = createContext();

export const ToastProvider = (prop) => {
  const [toast, setToast] = useState("");
  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        setToast("");
      }, 4000);
    }
  }, [toast]);

  return (
    <>
      <ToastContext.Provider value={{ setToast }}>
        {toast && <Toast text={toast} />}
        {prop.children}
      </ToastContext.Provider>
    </>
  );
};
