import "./card2.css";
function Card2({ Card2title, Card2imageUrl, Card2Para }) {
  return (
    <div>
      <div className="card2_container">
        <img src={Card2imageUrl} alt={Card2title} />
        <h2 className="ff fw-600">{Card2title}</h2>
        <p>{Card2Para}</p>
        <div className="card2_container_option">
          <div>
            <span className="fw-600">Age: 5+</span>
            <span>
              4.7 <span className="rating">★★★★★</span>
            </span>
          </div>
          <div>
            <span className="ff fw-600 f-15">₹6,999</span>
            <span>20 Sessions</span>
          </div>
          <div className="card2_container_btns">
            <a href="/">Try For Free</a>
            <a href="/">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card2;
