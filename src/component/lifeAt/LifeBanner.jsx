import "./LifeBanner.css";
const LifeBanner = () => {
  return (
    <div className="life_banner">
      <div className="container">
        <div className="row align-items-center pt-50">
          <div className="col-lg-6">
            <h3 className="inb">
              <span> Innovate, Inspire, and Impact:</span> Embark on an Exciting
              Journey at Meritus AI
            </h3>
            <a href="/" className="btndefault">
              Explore
            </a>
          </div>
          <div className="col-lg-6 position-relative">
            <img src="images/lifeAt/life-at.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LifeBanner;
