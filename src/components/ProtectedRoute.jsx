import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { loginUser } from "../redux/factures/userDataSlice";
import Loader from "./Loader";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const dispatch = useDispatch();

  if (loading) return <Loader />;

  if (!user) return <Navigate to="/login" />;
  const userData = {
    email: user.email,
    uid: user.uid,
    displayName: user.displayName,
    photoURL: user.photoURL,
  };
  dispatch(loginUser(userData));

  return <>{children}</>;
}
