function ArtistCard({ name, description, image }) {
  return (
    <div className="artist-card">
      <img src={image} alt={name} />

      <div className="artist-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <button>Ver tienda</button>
      </div>
    </div>
  );
}

export default ArtistCard;