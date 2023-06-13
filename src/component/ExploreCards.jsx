import "./ExploreCards.css";
function ExploreCards({ imgUrl, title, para, readMore, join }) {
  return (
    <div className="ExploreCard_Container">
      <img src={imgUrl} alt={title} />
      <div className="ExploreCard_txt">
        <p className="pSize fw-600">{title}</p>
        <p className="pSize fw-400">{para}</p>
        <div className="ExploreCardBtn">
          <a href={readMore}>Read more</a>
          <a href={join}>Join Now</a>
        </div>
      </div>
    </div>
  );
}
export default ExploreCards;
