import "./CardUni.css";
const CardUni = ({ imageUrl, title, spantxt, paragraph, backgroundColor }) => {
  const cardStyle = {
    backgroundColor: backgroundColor || "white"
  };

  return (
    <div className="card_uni" style={cardStyle}>
      <img src={imageUrl} alt="Card" />
      <div>
        <h2>
          {title}
          <span>{spantxt}</span>
        </h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default CardUni;
