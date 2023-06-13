import "./AboutBanner.css";
const AboutBanner = () => {
  return (
    <div className="about_banner">
      <div className="container">
        <div className="row align-items-center pt-50">
          <div className="col-lg-6">
            <h3 className="inb">
              "The most<span>profound technologies</span> are those that{" "}
              <span>disappear</span>. They weave themselves into the fabric of
              everyday life until they are
              <span>indistinguishable</span> from it."
            </h3>
            <p>
              <b>-Mark wesier</b>
            </p>
          </div>
          <div className="col-lg-6 position-relative">
            <img src="images/about/banner.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutBanner;
