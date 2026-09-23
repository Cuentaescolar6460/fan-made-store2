function ProductDetail({
  product,
  onBack,
  onAddToCart,
  isFavorite,
  onToggleFavorite,
  onArtistClick
}) {
  if (!product) {
    return (
      <section className="page-section">
        <h2>Producto no encontrado</h2>

        <button onClick={onBack}>
          Volver
        </button>
      </section>
    );
  }

  return (
    <section className="product-detail">

      <button className="back-button" onClick={onBack}>
        ← Volver
      </button>

      <div className="product-detail-content">

        {/* Imagen del producto */}
        <div className="product-detail-image">
          <div className="image-placeholder">
            🛍️
          </div>
        </div>

        {/* Información del producto */}
        <div className="product-detail-info">

          <span className="product-category">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <p className="product-price">
            ${product.price} MXN
          </p>

          <p className="product-description">
            {product.description}
          </p>

          <div className="product-artist">

            <span>Creado por:</span>

            <button
              className="artist-link"
              onClick={() => onArtistClick(product.artistId)}
            >
              {product.artist}
            </button>

          </div>

          <div className="product-actions">

            <button
              className="add-cart-button"
              onClick={() => onAddToCart(product)}
            >
              🛒 Agregar al carrito
            </button>

            <button
              className="favorite-button"
              onClick={() => onToggleFavorite(product)}
            >
              {isFavorite ? "♥" : "♡"} Favorito
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductDetail;