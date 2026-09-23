function About({ onBack }) {
  return (
    <section className="about-page">

      <button className="back-button" onClick={onBack}>
        ← Volver
      </button>

      <div className="about-header">
        <span className="about-label">
          Sobre nosotros
        </span>

        <h1>Fan Made Store</h1>

        <p>
          Un espacio creado para conectar a los fans con
          artistas independientes y sus productos.
        </p>
      </div>

      <div className="about-content">

        <div className="about-card">
          <div className="about-icon">
            🎨
          </div>

          <h2>Nuestra misión</h2>

          <p>
            Facilitar un espacio donde artistas independientes
            puedan mostrar y vender sus productos, manteniendo
            su propia identidad y catálogo.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">
            💙
          </div>

          <h2>Nuestros valores</h2>

          <p>
            Creatividad, apoyo a los artistas independientes,
            diversidad y una experiencia sencilla para los
            usuarios.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">
            🛍️
          </div>

          <h2>¿Cómo funciona?</h2>

          <p>
            Los usuarios pueden explorar diferentes productos,
            conocer a sus creadores y visitar las tiendas
            individuales de cada artista.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;