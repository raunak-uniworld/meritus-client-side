import "./LatestBanner.css";
const LatestBanner = (h2Title, h2Span, imgUrl, btnText, btnLink) => {
  return (
    <div className="latest_banner">
      <div className="row align-items-center pt-50">
        <div className="col-lg-6">
          <h3 className="inh2">
            Stay <span> Informed</span>, Stay <span>Ahead </span>: Discover the{" "}
            <span>Latest News</span> and <span>Events</span>
            <span> </span>
          </h3>
          {/* <a href="/" className="btndefault"></a> */}
        </div>
        <div className="col-lg-6 latest_banner_img">
          <img src="images/latestNews/banner.png" />
        </div>
      </div>
    </div>
  );
};
export default LatestBanner;
