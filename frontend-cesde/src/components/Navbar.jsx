
import { NavLink, useNavigate } from "react-router-dom";

const modulos = [
  {
    nombre: "Dashboard",
    ruta: "/dashboard",
    icono: "bi-grid-1x2-fill",
  },
  {
    nombre: "Usuarios",
    ruta: "/usuarios",
    icono: "bi-people-fill",
  },
  {
    nombre: "Empresas",
    ruta: "/empresas",
    icono: "bi-building",
  },
  {
    nombre: "Retos",
    ruta: "/retos",
    icono: "bi-bullseye",
  },
  {
    nombre: "Prioridades",
    ruta: "/prioridades",
    icono: "bi-flag-fill",
  },
  {
    nombre: "Categorías",
    ruta: "/categorias",
    icono: "bi-tags-fill",
  },
  {
    nombre: "Registros",
    ruta: "/registros",
    icono: "bi-clipboard-data-fill",
  },
];

function Navbar() {
  const navigate = useNavigate();

  function cerrarSesion() {
    localStorage.removeItem("usuarioAutenticado");
    localStorage.removeItem("correoUsuario");

    navigate("/login", { replace: true });
  }

  return (
    <aside className="cesde-sidebar d-flex flex-column">
      {/* Logo e identidad de CESDE */}
      <div className="cesde-logo p-4">
        <span>CES</span>DE
        <p className="small mb-0 mt-2">
          Gestión empresarial
        </p>
      </div>

      {/* Navegación principal */}
      <nav className="px-3 mt-3">
        <p className="sidebar-label">
          MENÚ PRINCIPAL
        </p>

        {modulos.map((modulo) => (
          <NavLink
            key={modulo.ruta}
            to={modulo.ruta}
            end
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <i
              className={`bi ${modulo.icono} me-3`}
              aria-hidden="true"
            ></i>

            <span>{modulo.nombre}</span>
          </NavLink>
        ))}
      </nav>

      {/* Cierre de sesión */}
      <div className="mt-auto p-3">
        <button
          type="button"
          className="sidebar-link logout-button w-100 text-start"
          onClick={cerrarSesion}
        >
          <i
            className="bi bi-box-arrow-left me-3"
            aria-hidden="true"
          ></i>

          <span>Cerrar sesión</span>
        </button>
      </div>
    </aside>
  );
}

export default Navbar;
