import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import NotFound from "./page/NotFound";
import Register from "./page/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboarRouter from "./routes/DashboarRouter";
import "./config/firebase";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <DashboarRouter />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
