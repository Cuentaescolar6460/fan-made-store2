import shoppingCart from "../assets/shopping-cart.svg";
import heart from "../assets/heart.svg";

function Navbar() {
  return (
    <header className="navbar">
      <a href="#inicio" className="logo">
        <span>✦</span>
        Fan Made Store
      </a>

      <nav>
        <a href="#inicio">Inicio</a>
        <a href="#catalogo">Catálogo</a>
        <a href="#categorias">Categorías</a>
      </nav>

      <div className="nav-icons">
        <button>
          <img src={heart} alt="Favoritos" />
        </button>

        <button>
          <img src={shoppingCart} alt="Carrito" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;