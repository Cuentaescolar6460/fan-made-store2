import { useMemo, useState } from "react";
import "./App.css";
import images from "./assets/images.svg";
import usuario from "./assets/usuario.svg";

const categories = ["Todos", "Stickers", "Pines", "Prints", "Peluches", "Photocards", "Papelería", "Accesorios"];

const artists = [
  { id: 1, name: "Luna Studio", bio: "Ilustraciones, stickers y productos coleccionables con un estilo colorido y tierno." },
  { id: 2, name: "Blueberry Art", bio: "Diseños originales, pines y papelería para quienes disfrutan coleccionar." },
  { id: 3, name: "Nox Atelier", bio: "Prints e ilustraciones con una estética alternativa y artística." },
  { id: 4, name: "Mochi Moon", bio: "Accesorios y productos inspirados en la cultura fan y el arte independiente." },
];

const products = [
  { id: 1, name: "Set de stickers Moon", price: 85, category: "Stickers", artistId: 1, desc: "Set de stickers resistentes con ilustraciones originales." },
  { id: 2, name: "Pin Blueberry", price: 120, category: "Pines", artistId: 2, desc: "Pin esmaltado de edición especial." },
  { id: 3, name: "Print Nocturno", price: 150, category: "Prints", artistId: 3, desc: "Print artístico en papel de alta calidad." },
  { id: 4, name: "Llavero Moon", price: 95, category: "Accesorios", artistId: 4, desc: "Llavero acrílico inspirado en ilustraciones originales." },
  { id: 5, name: "Peluche Luna", price: 280, category: "Peluches", artistId: 1, desc: "Peluche suave de edición limitada." },
  { id: 6, name: "Photocard Set", price: 70, category: "Photocards", artistId: 2, desc: "Set coleccionable de photocards ilustradas." },
  { id: 7, name: "Cuaderno ilustrado", price: 135, category: "Papelería", artistId: 3, desc: "Cuaderno con portada ilustrada y hojas de buena calidad." },
  { id: 8, name: "Charm pastel", price: 90, category: "Accesorios", artistId: 4, desc: "Charm decorativo para mochila, bolso o llaves." },
];

const artistById = (id) => artists.find((artist) => artist.id === id);

function App() {
  const [page, setPage] = useState("inicio");
  const [category, setCategory] = useState("Todos");
  const [query, setQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const go = (next) => { setPage(next); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const filteredProducts = useMemo(() => products.filter((p) => {
    const q = query.trim().toLowerCase();
    const artist = artistById(p.artistId);
    return (category === "Todos" || p.category === category) &&
      (!q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || artist.name.toLowerCase().includes(q));
  }), [category, query]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const addToCart = (product) => setCart((items) => {
    const found = items.find((item) => item.id === product.id);
    return found ? items.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...items, { ...product, quantity: 1 }];
  });

  const changeQuantity = (id, amount) => setCart((items) => items.map((item) => item.id === id ? { ...item, quantity: item.quantity + amount } : item).filter((item) => item.quantity > 0));
  const removeItem = (id) => setCart((items) => items.filter((item) => item.id !== id));
  const toggleFavorite = (product) => setFavorites((items) => items.some((x) => x.id === product.id) ? items.filter((x) => x.id !== product.id) : [...items, product]);

  const openProduct = (product) => { setSelectedProduct(product); go("producto"); };
  const openArtist = (id) => { setSelectedArtist(artistById(id)); go("tienda"); };
  const selectCategory = (cat) => { setCategory(cat); go("catalogo"); };

  const Header = () => (
    <header className="navbar">
      <button className="brand" onClick={() => go("inicio")}><span>✦</span> Fan Made Store</button>
      <nav>
        <button onClick={() => go("inicio")}>Inicio</button>
        <button onClick={() => go("catalogo")}>Catálogo</button>
        <button onClick={() => go("artistas")}>Artistas</button>
        <button onClick={() => go("sobre")}>Sobre nosotros</button>
      </nav>
      
<div className="nav-actions">
  <button
    className="icon-button"
    onClick={() => go("favoritos")}
    aria-label="Favoritos"
  >
    <img src="/src/assets/heart.svg" alt="" />
    <small>{favorites.length}</small>
  </button>

  <button
    className="icon-button"
    onClick={() => go("carrito")}
    aria-label="Carrito"
  >
    <img src="/src/assets/shopping-cart.svg" alt="" />
    <small>{cartCount}</small>
  </button>
</div>

    </header>
  );

  const ProductCard = ({ product }) => {
    const artist = artistById(product.artistId);
    const fav = favorites.some((x) => x.id === product.id);
    return <article className="product-card">
      
<button
  className="product-art"
  onClick={() => openProduct(product)}
  aria-label={`Ver ${product.name}`}
>
  <img src={images} alt="" />
</button>

      <div className="product-info"><span className="pill">{product.category}</span><h3>{product.name}</h3><button className="artist-link" onClick={() => openArtist(artist.id)}>{artist.name}</button><p>{product.desc}</p><strong>${product.price} MXN</strong></div>
      <div className="card-actions"><button className="secondary" onClick={() => openProduct(product)}>Ver producto</button><button className="favorite" onClick={() => toggleFavorite(product)}>{fav ? "♥" : "♡"}</button><button className="primary small" onClick={() => addToCart(product)}>Agregar</button></div>
    </article>;
  };

  const renderHome = () => <>
    <section className="hero"><div><span className="eyebrow">MARKETPLACE CREATIVO</span><h1>Arte, fandom y productos hechos por artistas independientes.</h1><p>Fan Made Store reúne ilustraciones, coleccionables, papelería y accesorios de diferentes creadores en un solo lugar.</p><button className="primary" onClick={() => go("catalogo")}>Explorar catálogo →</button></div><div className="hero-art"><div className="hero-card"><span>✦</span><b>Fan Made</b><small>creaciones independientes</small></div></div></section>
    <section className="section"><div className="section-heading"><div><span className="eyebrow">DESCUBRE</span><h2>Productos destacados</h2></div><button className="text-button" onClick={() => go("catalogo")}>Ver catálogo →</button></div><div className="grid">{products.slice(0, 4).map((p) => <ProductCard key={p.id} product={p}/>)}</div></section>
    <section className="section muted"><div className="section-heading"><div><span className="eyebrow">CREADORES</span><h2>Conoce a los artistas</h2></div><button className="text-button" onClick={() => go("artistas")}>Ver artistas →</button></div><div className="artist-grid">{artists.map((a) => <button className="artist-card" key={a.id} onClick={() => openArtist(a.id)}><span className="artist-avatar">
  <img src={usuario} alt="" />
</span><h3>{a.name}</h3><p>{a.bio}</p><span>Visitar tienda →</span></button>)}</div></section>
  </>;

  const renderCatalog = () => <section className="section page"><div className="page-title"><span className="eyebrow">COLECCIÓN</span><h1>Catálogo</h1><p>Explora productos de diferentes artistas y encuentra algo que te guste.</p></div><div className="search-row"><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar productos, categorías o artistas..."/><button className="secondary" onClick={() => { setQuery(""); setCategory("Todos"); }}>Limpiar</button></div><div className="category-list">{categories.map((cat) => <button key={cat} className={category === cat ? "category active" : "category"} onClick={() => selectCategory(cat)}>{cat}</button>)}</div><p className="result-count">{filteredProducts.length} productos encontrados</p><div className="grid">{filteredProducts.map((p) => <ProductCard key={p.id} product={p}/>)}</div>{filteredProducts.length === 0 && <div className="empty"><h2>No encontramos productos</h2><p>Prueba con otra búsqueda o categoría.</p></div>}</section>;

  const renderArtists = () => <section className="section page"><div className="page-title"><span className="eyebrow">ARTISTAS</span><h1>Tiendas de artistas</h1><p>Conoce a los creadores y explora sus catálogos individuales.</p></div><div className="artist-grid large">{artists.map((a) => <button className="artist-card" key={a.id} onClick={() => openArtist(a.id)}><span className="artist-avatar">
  <img src={usuario} alt="" />
</span><h2>{a.name}</h2><p>{a.bio}</p><span>Explorar tienda →</span></button>)}</div></section>;

  const renderStore = () => { const artistProducts = products.filter((p) => p.artistId === selectedArtist?.id); return <section className="section page"><button className="back" onClick={() => go("artistas")}>← Volver a artistas</button><div className="artist-banner"><span className="artist-avatar big">{selectedArtist?.name?.charAt(0)}</span><div><span className="eyebrow">TIENDA DE ARTISTA</span><h1>{selectedArtist?.name}</h1><p>{selectedArtist?.bio}</p></div></div><h2 className="subheading">Productos de {selectedArtist?.name}</h2><div className="grid">{artistProducts.map((p) => <ProductCard key={p.id} product={p}/>)}</div></section>; };

  const renderProduct = () => { if (!selectedProduct) return null; const artist = artistById(selectedProduct.artistId); const fav = favorites.some((x) => x.id === selectedProduct.id); return <section className="section page"><button className="back" onClick={() => go("catalogo")}>← Volver al catálogo</button><div className="detail"><div className="detail-art"><span>✦</span></div><div><span className="pill">{selectedProduct.category}</span><h1>{selectedProduct.name}</h1><button className="artist-link" onClick={() => openArtist(artist.id)}>Creado por {artist.name}</button><p className="detail-price">${selectedProduct.price} MXN</p><p>{selectedProduct.desc}</p><div className="detail-actions"><button className="primary" onClick={() => addToCart(selectedProduct)}>Agregar al carrito</button><button className="secondary" onClick={() => toggleFavorite(selectedProduct)}>{fav ? "♥ En favoritos" : "♡ Agregar a favoritos"}</button></div><div className="info-box"><b>Producto de artista independiente</b><span>Las características y disponibilidad son demostrativas para este proyecto académico.</span></div></div></div></section>; };

  const renderCart = () => <section className="section page"><div className="page-title"><span className="eyebrow">COMPRA</span><h1>Carrito</h1><p>Administra los productos que quieres comprar.</p></div>{cart.length === 0 ? <div className="empty"><h2>Tu carrito está vacío</h2><p>Agrega productos desde el catálogo.</p><button className="primary" onClick={() => go("catalogo")}>Ir al catálogo</button></div> : <div className="cart-layout"><div>{cart.map((item) => <div className="cart-item" key={item.id}><div className="mini-art">✦</div><div className="cart-main"><h3>{item.name}</h3><span>{artistById(item.artistId).name}</span><strong>${item.price} MXN</strong></div><div className="quantity"><button onClick={() => changeQuantity(item.id, -1)}>−</button><b>{item.quantity}</b><button onClick={() => changeQuantity(item.id, 1)}>+</button></div><button className="remove" onClick={() => removeItem(item.id)}>Eliminar</button></div>)}</div><aside className="summary"><h2>Resumen</h2><div><span>Productos</span><b>{cartCount}</b></div><div className="total"><span>Total</span><b>${cartTotal} MXN</b></div><button className="primary full" onClick={() => alert("Esta es una demostración académica; el pago no está conectado.")}>Continuar compra</button></aside></div>}</section>;

  const renderFavorites = () => <section className="section page"><div className="page-title"><span className="eyebrow">GUARDADOS</span><h1>Favoritos</h1><p>Tus productos guardados para encontrarlos después.</p></div>{favorites.length ? <div className="grid">{favorites.map((p) => <ProductCard key={p.id} product={p}/>)}</div> : <div className="empty"><h2>Aún no tienes favoritos</h2><p>Presiona el corazón de un producto para guardarlo.</p><button className="primary" onClick={() => go("catalogo")}>Explorar productos</button></div>}</section>;

  const renderAbout = () => <section className="section page"><div className="page-title"><span className="eyebrow">FAN MADE STORE</span><h1>Sobre nosotros</h1><p>Un marketplace pensado para reunir el trabajo de artistas independientes y facilitar que los fans descubran nuevas creaciones.</p></div><div className="about-grid"><div><h2>¿Qué es Fan Made Store?</h2><p>Es una propuesta de marketplace de productos creativos y fan merch. Cada artista conserva su identidad y cuenta con un catálogo propio.</p></div><div><h2>¿Qué puedes encontrar?</h2><p>Stickers, pines, prints, peluches, photocards, papelería y accesorios, además de tiendas individuales para los artistas.</p></div><div><h2>Proyecto académico</h2><p>Esta plataforma fue desarrollada con React como parte del proyecto de la Licenciatura en Desarrollo en Sistemas Web.</p></div><div><h2>Próximos pasos</h2><p>La versión integra las funcionalidades planteadas para los cuatro Sprints: navegación, artistas, detalles, carrito, favoritos, búsqueda, información y adaptación responsive.</p></div></div></section>;

  const renderPage = () => ({ inicio: renderHome, catalogo: renderCatalog, artistas: renderArtists, tienda: renderStore, producto: renderProduct, carrito: renderCart, favoritos: renderFavorites, sobre: renderAbout }[page] || renderHome)();

  return <div className="app"><Header/><main>{renderPage()}</main><footer><div><b>✦ Fan Made Store</b><p>Marketplace creativo para artistas independientes.</p></div><div><b>Explorar</b><button onClick={() => go("catalogo")}>Catálogo</button><button onClick={() => go("artistas")}>Artistas</button></div><div><b>Información</b><button onClick={() => go("sobre")}>Sobre nosotros</button><button onClick={() => go("favoritos")}>Favoritos</button></div><div><b>Proyecto</b><p>Desarrollado con React · 2026</p></div><div className="copyright">© 2026 Fan Made Store. Proyecto académico.</div></footer></div>;
}

export default App;
