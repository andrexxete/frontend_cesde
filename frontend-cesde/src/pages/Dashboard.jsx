
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const indicadores = [
  {
    titulo: "Empresas",
    descripcion: "Empresas registradas",
    icono: "bi-building",
    color: "pink",
    valor: "—",
  },
  {
    titulo: "Retos",
    descripcion: "Retos identificados",
    icono: "bi-bullseye",
    color: "blue",
    valor: "—",
  },
  {
    titulo: "Prioridades",
    descripcion: "Niveles de prioridad",
    icono: "bi-flag-fill",
    color: "orange",
    valor: "—",
  },
  {
    titulo: "Registros",
    descripcion: "Actividad del sistema",
    icono: "bi-clipboard-data",
    color: "green",
    valor: "—",
  },
];

const accesosRapidos = [
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

function Dashboard() {
  const correo =
    localStorage.getItem("correoUsuario") || "Usuario";

  return (
    <div className="dashboard-layout">
      <Navbar />

      <main className="dashboard-main">
        {/* Barra superior */}
        <header className="dashboard-topbar">
          <div>
            <p className="text-secondary small mb-1">
              CESDE / Panel principal
            </p>

            <h1 className="h4 fw-bold mb-0">
              Dashboard
            </h1>
          </div>

          <div className="user-info">
            <div className="user-avatar">
              <i className="bi bi-person-fill"></i>
            </div>

            <div className="d-none d-sm-block">
              <p className="fw-semibold mb-0">
                Usuario
              </p>

              <small className="text-secondary">
                {correo}
              </small>
            </div>
          </div>
        </header>

        {/* Contenido principal */}
        <section className="dashboard-content">
          {/* Bienvenida */}
          <div className="welcome-panel mb-4">
            <div>
              <span className="welcome-tag">
                SISTEMA DE GESTIÓN
              </span>

              <h2 className="h3 fw-bold mt-3">
                Bienvenido a CESDE
              </h2>

              <p className="mb-0">
                Gestiona la información y las oportunidades
                de mejora de las empresas.
              </p>
            </div>

            <i
              className="bi bi-graph-up-arrow welcome-icon"
              aria-hidden="true"
            ></i>
          </div>

          {/* Resumen general */}
          <section className="mb-4">
            <div className="mb-3">
              <h2 className="h5 fw-bold mb-1">
                Resumen general
              </h2>

              <p className="text-secondary small mb-0">
                Indicadores generales del sistema
              </p>
            </div>

            <div className="row g-3">
              {indicadores.map((indicador) => (
                <div
                  className="col-12 col-sm-6 col-xl-3"
                  key={indicador.titulo}
                >
                  <article className="stat-card h-100">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <p className="text-secondary small mb-2">
                          {indicador.titulo}
                        </p>

                        <h3 className="h3 fw-bold mb-2">
                          {indicador.valor}
                        </h3>
                      </div>

                      <div
                        className={`stat-icon ${indicador.color}`}
                      >
                        <i
                          className={`bi ${indicador.icono}`}
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>

                    <p className="small text-secondary mb-0">
                      {indicador.descripcion}
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </section>

          {/* Accesos a todos los módulos */}
          <section>
            <div className="mb-3">
              <h2 className="h5 fw-bold mb-1">
                Accesos rápidos
              </h2>

              <p className="text-secondary small mb-0">
                Selecciona el módulo que deseas consultar.
              </p>
            </div>

            <div className="row g-3">
              {accesosRapidos.map((modulo) => (
                <div
                  className="col-12 col-sm-6 col-xl-4"
                  key={modulo.ruta}
                >
                  <Link
                    to={modulo.ruta}
                    className="quick-access-card d-flex align-items-center gap-3"
                  >
                    <div className="stat-icon pink">
                      <i
                        className={`bi ${modulo.icono}`}
                        aria-hidden="true"
                      ></i>
                    </div>

                    <div className="flex-grow-1">
                      <h3 className="h6 fw-bold mb-1">
                        {modulo.nombre}
                      </h3>

                      <span className="text-secondary small">
                        Abrir módulo
                      </span>
                    </div>

                    <i
                      className="bi bi-arrow-right text-cesde"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
