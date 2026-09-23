function Help({ onBack }) {
  return (
    <section className="help-page">

      <button className="back-button" onClick={onBack}>
        ← Volver
      </button>

      <div className="help-header">

        <span className="help-label">
          Centro de ayuda
        </span>

        <h1>¿Cómo podemos ayudarte?</h1>

        <p>
          Encuentra información sobre tus compras,
          productos, artistas y envíos.
        </p>

      </div>

      <div className="help-content">

        <div className="help-card">

          <div className="help-icon">
            🛍️
          </div>

          <h2>Compras</h2>

          <p>
            Explora el catálogo, selecciona un producto
            y agrégalo a tu carrito para realizar una
            compra demostrativa.
          </p>

        </div>

        <div className="help-card">

          <div className="help-icon">
            🎨
          </div>

          <h2>Artistas</h2>

          <p>
            Visita las tiendas individuales de los artistas
            para conocer sus productos y descubrir su trabajo.
          </p>

        </div>

        <div className="help-card">

          <div className="help-icon">
            📦
          </div>

          <h2>Envíos</h2>

          <p>
            La información de envío puede consultarse en
            los detalles correspondientes de cada producto.
          </p>

        </div>

        <div className="help-card">

          <div className="help-icon">
            💬
          </div>

          <h2>Contacto</h2>

          <p>
            Si necesitas ayuda, puedes consultar los medios
            de contacto disponibles en la plataforma.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Help;