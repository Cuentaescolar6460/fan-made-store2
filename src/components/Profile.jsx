function Profile({ onBack }) {
  return (
    <section className="profile-page">

      <button className="back-button" onClick={onBack}>
        ← Volver
      </button>

      <div className="profile-header">

        <div className="profile-image">
          
        </div>

        <div className="profile-info">

          <span className="profile-label">
            Mi perfil
          </span>

          <h1>Usuario Fan</h1>

          <p>
            Explora productos, guarda tus favoritos y
            descubre nuevos artistas.
          </p>

        </div>

      </div>

      <div className="profile-content">

        <div className="profile-card">

          <h2>Mis datos</h2>

          <div className="profile-data">
            <span>Nombre</span>
            <strong>Usuario Fan</strong>
          </div>

          <div className="profile-data">
            <span>Correo electrónico</span>
            <strong>usuario@ejemplo.com</strong>
          </div>

        </div>

        <div className="profile-card">

          <h2>Mi actividad</h2>

          <div className="profile-stat">
            <span></span>
            <div>
              <strong>Favoritos</strong>
              <p>Productos que has guardado.</p>
            </div>
          </div>

          <div className="profile-stat">
            <span></span>
            <div>
              <strong>Carrito</strong>
              <p>Productos que quieres comprar.</p>
            </div>
          </div>

          <div className="profile-stat">
            <span></span>
            <div>
              <strong>Artistas</strong>
              <p>Descubre y apoya a artistas independientes.</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Profile;