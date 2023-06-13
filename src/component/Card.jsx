import "./card.css";
function Card({ title, imageUrl, backgroundColor }) {
  const cardStyle = {
    backgroundColor: backgroundColor
  };

  return (
    <div>
      <div style={cardStyle} className="card">
        <h2>{title}</h2>
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
}
export default Card;
