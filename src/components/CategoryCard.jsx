function CategoryCard({ name, emoji, onClick }) {
  return (
    <button className="category-card" onClick={onClick}>
      <span className="category-emoji">{emoji}</span>

      <span className="category-name">{name}</span>

      <span className="category-arrow">→</span>
    </button>
  );
}

export default CategoryCard;