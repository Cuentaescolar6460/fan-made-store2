function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        {/* Información de Fan Made Store */}
        <div className="footer-section">

          <h3>Fan Made Store</h3>

          <p>
            Un espacio para descubrir y apoyar el trabajo
            de artistas independientes.
          </p>

        </div>

        {/* Enlaces */}
        <div className="footer-section">

          <h3>Información</h3>

          <a href="#inicio">
            Inicio
          </a>

          <a href="#catalogo">
            Catálogo
          </a>

          <a href="#artistas">
            Artistas
          </a>

        </div>

        {/* Ayuda */}
        <div className="footer-section">

          <h3>Ayuda</h3>

          <a href="#ayuda">
            Centro de ayuda
          </a>

          <a href="#envios">
            Envíos
          </a>

          <a href="#contacto">
            Contacto
          </a>

        </div>

      </div>

      {/* Derechos */}
      <div className="footer-bottom">

        <p>
          © 2026 Fan Made Store. Proyecto académico.
        </p>

        <p>
          Sitio desarrollado con React.
        </p>

      </div>

    </footer>
  );
}

export default Footer;