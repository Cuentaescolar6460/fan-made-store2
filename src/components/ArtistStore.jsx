function ArtistStore({
  artist,
  products,
  onBack,
  onProductClick
}) {
  if (!artist) {
    return (
      <section className="page-section">
        <h2>Artista no encontrado</h2>

        <button onClick={onBack}>
          Volver
        </button>
      </section>
    );
  }

  // Productos pertenecientes a este artista
  const artistProducts = products.filter(
    (product) => product.artistId === artist.id
  );

  return (
    <section className="artist-store">

      {/* Botón para regresar */}
      <button className="back-button" onClick={onBack}>
        ← Volver
      </button>

      {/* Información del artista */}
      <div className="artist-store-header">

        <div className="artist-store-image">
          🎨
        </div>

        <div className="artist-store-info">

          <span className="artist-label">
            Tienda de artista
          </span>

          <h1>{artist.name}</h1>

          <p>
            {artist.description}
          </p>

        </div>

      </div>

      {/* Productos del artista */}
      <div className="artist-products">

        <h2>
          Productos de {artist.name}
        </h2>

        {artistProducts.length > 0 ? (

          <div className="product-grid">

            {artistProducts.map((product) => (

              <div
                className="store-product-card"
                key={product.id}
                onClick={() => onProductClick(product)}
              >

                <div className="store-product-image">
                  🛍️
                </div>

                <div className="store-product-info">

                  <h3>{product.name}</h3>

                  <p className="store-product-category">
                    {product.category}
                  </p>

                  <p className="store-product-price">
                    ${product.price} MXN
                  </p>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <p className="no-products">
            Este artista todavía no tiene productos publicados.
          </p>

        )}

      </div>

    </section>
  );
}

export default ArtistStore;