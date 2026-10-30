function ProductCard({
  product,
  onClick,
  onAddToCart,
  isFavorite,
  onToggleFavorite
}) {
  return (
    <article className="product-card">

      {/* Imagen del producto */}
      <div
        className="product-image"
        onClick={onClick}
      >
        <span>🛍️</span>
      </div>

      {/* Información */}
      <div className="product-info">

        <span className="product-category">
          {product.category}
        </span>

        <h3 onClick={onClick}>
          {product.name}
        </h3>

        <p className="product-artist">
          {product.artist}
        </p>

        <p className="product-price">
          ${product.price} MXN
        </p>

      </div>

      {/* Acciones */}
      <div className="product-actions">

        <button
          className="product-view-button"
          onClick={onClick}
        >
          Ver producto
        </button>

        <button
          className="product-cart-button"
          onClick={() => onAddToCart(product)}
        >
          
        </button>

        <button
          className="product-favorite-button"
          onClick={() => onToggleFavorite(product)}
          title="Agregar a favoritos"
        >
          {isFavorite ? "" : ""}
        </button>

      </div>

    </article>
  );
}

export default ProductCard;