import React from 'react';
import './App.css';
function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="sticky-header">
          <a className="logo" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
            </svg>
            <span className="title">Actas</span>
          </a>
        </div>
        <div className="menu">
          <nav>
            <a className="menu-item" href="#">Ver o no Actas</a>
            <a className="menu-item" href="#">Crear Acta</a>
            <a className="menu-item" href="#">Editar Acta</a>
            <a className="menu-item" href="#">Archivar Acta</a>
          </nav>
        </div>
      </div>
      <div className="content">
        <header className="header">
          <div className="header-left">
            <a className="logo" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              </svg>
              <span className="title">Actas</span>
            </a>
          </div>
          <button className="menu-toggle" onClick={() => {
            document.querySelector('.sidebar').classList.toggle('open');
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
            <span className="sr-only">Toggle navigation</span>
          </button>
        </header>
        <main className="main-content">
          <div className="form-container">
            <h1 className="form-title">Crear Acta</h1>
            <p className="form-subtitle">Llena los siguientes campos para crear una nueva acta.</p>
            <div className="form-box">
              <form>
                <div className="form-group">
                  <div className="form-field">
                    <label htmlFor="fecha">Fecha</label>
                    <input type="date" id="fecha" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="hora-inicio">Hora de Inicio</label>
                    <input type="time" id="hora-inicio" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-field">
                    <label htmlFor="hora-fin">Hora de Finalización</label>
                    <input type="time" id="hora-fin" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="estado">Estado</label>
                    <select id="estado">
                      <option value="pendiente">Pendiente</option>
                      <option value="aprobada">Aprobada</option>
                      <option value="archivada">Archivada</option>
                    </select>
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="descripcion">Descripción</label>
                  <textarea id="descripcion" rows="4"></textarea>
                </div>
                <div className="form-actions">
                  <button type="button" className="btn-outline">Cancelar</button>
                  <button type="submit" className="btn-primary">Guardar</button>
                </div>
              </form>
            </div>
          </div>
        </main>
        <footer className="footer">
          <p>&copy; 2023 Actas. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
