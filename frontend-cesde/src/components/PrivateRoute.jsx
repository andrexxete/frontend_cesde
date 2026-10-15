
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const usuarioAutenticado = localStorage.getItem("usuarioAutenticado");

  if (!usuarioAutenticado) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default PrivateRoute;
