
import Navbar from "../components/Navbar";

function ModuloProvisional({ titulo }) {
  return (
    <div className="dashboard-layout">
      <Navbar />

      <main className="dashboard-main">
        <header className="dashboard-topbar">
          <div>
            <p className="text-secondary small mb-1">
              CESDE / Gestión empresarial
            </p>

            <h1 className="h4 fw-bold mb-0">{titulo}</h1>
          </div>
        </header>

        <section className="dashboard-content">
          <div className="module-panel">
            <div>
              <div className="module-icon">
                <i className="bi bi-grid"></i>
              </div>

              <h2 className="h5 fw-bold mt-3">
                Módulo de {titulo.toLowerCase()}
              </h2>

              <p className="text-secondary mb-0">
                Estamos preparando las herramientas para gestionar
                la información de este módulo.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ModuloProvisional;
