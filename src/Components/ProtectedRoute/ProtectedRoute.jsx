import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ userId, requiredComponent }) {
  return userId ? requiredComponent : <Navigate to="/login" />;
}
