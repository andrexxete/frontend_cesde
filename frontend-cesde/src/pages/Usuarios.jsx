
import { useState } from "react";
import Navbar from "../components/Navbar";

function Usuarios() {
  const [vista, setVista] = useState("consultar");
  const [busqueda, setBusqueda] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    contrasena: "",
    rol: "",
  });

  // Datos provisionales para probar la interfaz.
  const [usuarios, setUsuarios] = useState([]);

  function manejarCambio(e) {
    const { name, value } = e.target;

    setFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }));
  }

  function registrarUsuario(e) {
    e.preventDefault();
    setMensaje("");

    const nuevoUsuario = {
      id: crypto.randomUUID(),
      nombre: formulario.nombre.trim(),
      correo: formulario.correo.trim(),
      rol: formulario.rol.trim(),
      activo: true,
      fechaRegistro: new Date().toLocaleString("es-CO"),
    };

    // Simulación local: todavía no se conecta con Spring Boot.
    setUsuarios((anteriores) => [
      ...anteriores,
      nuevoUsuario,
    ]);

    setFormulario({
      nombre: "",
      correo: "",
      contrasena: "",
      rol: "",
    });

    setMensaje("Usuario agregado a la lista de prueba.");
    setVista("consultar");
  }

  const usuariosFiltrados = usuarios.filter((usuario) =>
    `${usuario.nombre} ${usuario.correo} ${usuario.rol}`
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  );

  return (
    <div className="dashboard-layout">
      <Navbar />

      <main className="dashboard-main">
        <header className="dashboard-topbar">
          <div>
            <p className="text-secondary small mb-1">
              CESDE / Gestión empresarial
            </p>

            <h1 className="h4 fw-bold mb-0">
              Gestión de usuarios
            </h1>
          </div>
        </header>

        <section className="dashboard-content">
          <div className="mb-4">
            <h2 className="h5 fw-bold">
              Usuarios del sistema
            </h2>

            <p className="text-secondary mb-0">
              Registra usuarios y consulta la información disponible.
            </p>
          </div>

          <div className="d-flex flex-wrap gap-2 mb-4">
            <button
              type="button"
              className={`btn ${
                vista === "consultar"
                  ? "btn-cesde"
                  : "btn-outline-secondary"
              }`}
              onClick={() => {
                setVista("consultar");
                setMensaje("");
              }}
            >
              <i className="bi bi-people me-2"></i>
              Consultar usuarios
            </button>

            <button
              type="button"
              className={`btn ${
                vista === "registrar"
                  ? "btn-cesde"
                  : "btn-outline-secondary"
              }`}
              onClick={() => {
                setVista("registrar");
                setMensaje("");
              }}
            >
              <i className="bi bi-person-plus me-2"></i>
              Registrar usuario
            </button>
          </div>

          {mensaje && (
            <div className="alert alert-success" role="status">
              {mensaje}
            </div>
          )}

          {vista === "registrar" && (
            <div className="module-panel d-block">
              <h2 className="h5 fw-bold mb-4">
                Formulario de registro
              </h2>

              <form onSubmit={registrarUsuario}>
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label htmlFor="nombre" className="form-label">
                      Nombre completo
                    </label>

                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      className="form-control"
                      value={formulario.nombre}
                      onChange={manejarCambio}
                      maxLength={150}
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="correo" className="form-label">
                      Correo electrónico
                    </label>

                    <input
                      id="correo"
                      name="correo"
                      type="email"
                      className="form-control"
                      value={formulario.correo}
                      onChange={manejarCambio}
                      maxLength={254}
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label
                      htmlFor="contrasena"
                      className="form-label"
                    >
                      Contraseña
                    </label>

                    <input
                      id="contrasena"
                      name="contrasena"
                      type="password"
                      className="form-control"
                      value={formulario.contrasena}
                      onChange={manejarCambio}
                      autoComplete="new-password"
                      minLength={8}
                      required
                    />

                    <div className="form-text">
                      Usa al menos 8 caracteres para esta prueba.
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="rol" className="form-label">
                      Rol
                    </label>

                    <input
                      id="rol"
                      name="rol"
                      type="text"
                      className="form-control"
                      value={formulario.rol}
                      onChange={manejarCambio}
                      placeholder="Ingresa el rol asignado"
                      maxLength={50}
                      required
                    />

                    <div className="form-text">
                      Después usaremos los roles definidos por el backend.
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-wrap gap-2 mt-4">
                  <button type="submit" className="btn btn-cesde">
                    <i className="bi bi-check-lg me-2"></i>
                    Registrar usuario
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() =>
                      setFormulario({
                        nombre: "",
                        correo: "",
                        contrasena: "",
                        rol: "",
                      })
                    }
                  >
                    Limpiar formulario
                  </button>
                </div>
              </form>
            </div>
          )}

          {vista === "consultar" && (
            <div className="module-panel d-block">
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
                <div>
                  <h2 className="h5 fw-bold mb-1">
                    Usuarios registrados
                  </h2>

                  <p className="text-secondary small mb-0">
                    Total en esta sesión de prueba: {usuarios.length}
                  </p>
                </div>

                <div className="d-flex gap-2">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Buscar usuario..."
                    aria-label="Buscar usuario"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                  />

                  <button
                    type="button"
                    className="btn btn-cesde text-nowrap"
                    onClick={() => {
                      setVista("registrar");
                      setMensaje("");
                    }}
                  >
                    <i className="bi bi-plus-lg me-1"></i>
                    Nuevo
                  </button>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Correo</th>
                      <th>Rol</th>
                      <th>Estado</th>
                      <th>Fecha de registro</th>
                    </tr>
                  </thead>

                  <tbody>
                    {usuariosFiltrados.map((usuario) => (
                      <tr key={usuario.id}>
                        <td className="fw-semibold">
                          {usuario.nombre}
                        </td>

                        <td>{usuario.correo}</td>

                        <td>{usuario.rol}</td>

                        <td>
                          <span className="badge text-bg-success">
                            Activo
                          </span>
                        </td>

                        <td>{usuario.fechaRegistro}</td>
                      </tr>
                    ))}

                    {usuariosFiltrados.length === 0 && (
                      <tr>
                        <td
                          colSpan="5"
                          className="text-center py-5 text-secondary"
                        >
                          {busqueda
                            ? "No se encontraron usuarios."
                            : "Todavía no hay usuarios para mostrar. Registra uno para probar el formulario."}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Usuarios;
