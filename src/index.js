import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorBoundary from "Components/ErrorBoundary/ErrorBoundary";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContextProvider } from "Components/Contexts/UserContext";
import { ToastProvider } from "Components/Toast/ToastContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
const client_id =
  "718284888420-mh70g3sj7buqjmr0p42gl30dklqklb18.apps.googleusercontent.com";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <UserContextProvider>
        <ToastProvider>
          <Router>
            <GoogleOAuthProvider clientId={client_id}>
              <App />
            </GoogleOAuthProvider>
          </Router>
        </ToastProvider>
      </UserContextProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
