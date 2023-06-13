import "./ExploreMore.css";
import "./ExploreMore";
function ExploreMore({ imgUrl, title }) {
  return (
    <div className="ExploreMore">
      <img src={imgUrl} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}
export default ExploreMore;
