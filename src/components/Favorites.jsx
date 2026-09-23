function Favorites({
  favorites,
  onRemoveFavorite,
  onProductClick,
  onBack
}) {
  return (
    <section className="favorites-page">

      <button className="back-button" onClick={onBack}>
        ← Volver
      </button>

      <h1>Mis favoritos</h1>

      {favorites.length === 0 ? (

        <div className="empty-favorites">

          <div className="empty-favorites-icon">
            ♡
          </div>

          <h2>No tienes favoritos todavía</h2>

          <p>
            Guarda los productos que más te gusten
            para encontrarlos fácilmente después.
          </p>

          <button onClick={onBack}>
            Explorar productos
          </button>

        </div>

      ) : (

        <div className="favorites-grid">

          {favorites.map((product) => (

            <div
              className="favorite-card"
              key={product.id}
            >

              {/* Imagen */}
              <div
                className="favorite-image"
                onClick={() => onProductClick(product)}
              >
                🛍️
              </div>

              {/* Información */}
              <div className="favorite-info">

                <span className="favorite-category">
                  {product.category}
                </span>

                <h3
                  onClick={() => onProductClick(product)}
                >
                  {product.name}
                </h3>

                <p>
                  {product.artist}
                </p>

                <strong>
                  ${product.price} MXN
                </strong>

              </div>

              {/* Acciones */}
              <div className="favorite-actions">

                <button
                  onClick={() => onProductClick(product)}
                >
                  Ver producto
                </button>

                <button
                  className="remove-favorite"
                  onClick={() =>
                    onRemoveFavorite(product)
                  }
                >
                  ♥ Quitar
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </section>
  );
}

export default Favorites;