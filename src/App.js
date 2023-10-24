import AppLayout from "Components/Layouts/AppLayout/AppLayout";
import React, { Suspense, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import paths from "utils/paths";
import { UserContext } from "Components/Contexts/UserContext";
import ProtectedRoute from "Components/ProtectedRoute/ProtectedRoute";
import Lost from "Components/Pages/Lost/Lost";

function App() {
  const { userId } = useContext(UserContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {paths.map(({ path, component, isUserPath }) => (
            <Route
              path={path}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  {isUserPath ? (
                    <ProtectedRoute
                      userId={userId}
                      requiredComponent={component}
                    />
                  ) : (
                    component
                  )}
                </Suspense>
              }
            />
          ))}
        </Route>
        <Route path="*" element={<Lost />} />
      </Routes>
    </>
  );
}

export default App;
