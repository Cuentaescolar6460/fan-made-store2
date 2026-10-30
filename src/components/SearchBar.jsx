function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">

      <span className="search-icon">
        
      </span>

      <input
        type="text"
        placeholder="Buscar productos o artistas..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />

      {value && (
        <button
          className="clear-search"
          onClick={() => onChange("")}
          aria-label="Limpiar búsqueda"
        >
          ×
        </button>
      )}

    </div>
  );
}

export default SearchBar;