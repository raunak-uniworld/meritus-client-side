import "./Cta.css";
export default function Cta() {
  return (
    <div className="ctaContainer">
      <div className="row">
        <div className="ctaContainer1"></div>
        <div className="col-lg-4">
          <div className="cta">
            <img src="images/home/cta.png" alt="/" />
          </div>
        </div>
        <div className="col-lg-8 mt-4 px-lg-5 ctaContainerTxt">
          <h2 className="ff fw-600 dBlue hSize text-start">
            Preferred by 50,000+{" "}
            <span className="dPink"> parents and students globally</span>
          </h2>
          <div className="ctaBtnn">
            <a href="/">Best Reviewed Courses</a>
            <img src="images/home/cta-star-1.png" alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
}
