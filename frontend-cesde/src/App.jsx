
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  useNavigate,
} from "react-router-dom";


import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Usuarios from "./pages/Usuarios";
import ModuloProvisional from "./pages/ModuloProvisional";

function Login() {
  const navigate = useNavigate();

  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");

  function iniciarSesion(e) {
    e.preventDefault();

    if (!correo.trim() || !contrasena.trim()) {
      setError("Completa todos los campos.");
      return;
    }

    localStorage.setItem("usuarioAutenticado", "true");
    localStorage.setItem("correoUsuario", correo);

    navigate("/dashboard");
  }

  return (
    <main className="container-fluid min-vh-100 d-flex align-items-center justify-content-center py-5">
      <div className="row shadow rounded-4 overflow-hidden w-100"
        style={{ maxWidth: "950px" }}>

        <section className="col-md-6 bg-dark text-white d-flex flex-column justify-content-center p-5">
          <h1 className="fw-bold mb-3">
            <span className="text-cesde">CES</span>DE
          </h1>

          <h2 className="h3 fw-bold">
            Gestión y diagnóstico empresarial
          </h2>

          <p className="text-light mt-3">
            Identificamos oportunidades de mejora para impulsar
            el crecimiento y la transformación de las empresas.
          </p>
        </section>

        <section className="col-md-6 bg-white p-4 p-lg-5">
          <h2 className="fw-bold mb-2">Bienvenido</h2>
          <p className="text-secondary mb-4">
            Ingresa tus credenciales para continuar.
          </p>

          <form onSubmit={iniciarSesion}>
            <div className="mb-3">
              <label htmlFor="correo" className="form-label">
                Correo electrónico
              </label>
              <input
                id="correo"
                type="email"
                className="form-control form-control-lg"
                placeholder="nombre@empresa.com"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="contrasena" className="form-label">
                Contraseña
              </label>
              <input
                id="contrasena"
                type="password"
                className="form-control form-control-lg"
                placeholder="Ingresa tu contraseña"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                required
              />
            </div>

            {error && (
              <div className="alert alert-danger">{error}</div>
            )}

            <button type="submit" className="btn btn-cesde btn-lg w-100 mt-2">
              Iniciar sesión
            </button>
          </form>

          <p className="text-center mt-4 mb-0">
            ¿No tienes una cuenta?{" "}
            <Link to="/registro" className="text-cesde fw-semibold">
              Regístrate
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}

function Registro() {
  return <ModuloProvisional titulo="Registro de usuarios" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />


          <Route path="/usuarios" element={<Usuarios />} />

          <Route
            path="/empresas"
            element={<ModuloProvisional titulo="Empresas" />}
          />
          <Route
            path="/retos"
            element={<ModuloProvisional titulo="Retos" />}
          />
          <Route
            path="/prioridades"
            element={<ModuloProvisional titulo="Prioridades" />}
          />
          <Route
            path="/categorias"
            element={<ModuloProvisional titulo="Categorías" />}
          />
          <Route
            path="/registros"
            element={<ModuloProvisional titulo="Registros" />}
          />

          <Route
            path="*"
            element={<Navigate to="/dashboard" replace />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
