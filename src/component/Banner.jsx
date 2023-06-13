import "./banner.css";
function Banner() {
  return (
    <div>
      <section className="home_banner px-lg-5 pb-4">
        <div className="">
          <div className="row d-flex align-items-center">
            <div className="col-lg-7 order-1 order-lg-0">
              <h1 className="banner_txt">
                Students become <span>Future-ready</span> with Advanced{" "}
                <span>AI & Coding</span> skills
              </h1>
              <a href="/" className="home_banner_btn">
                Explore AI Courses
              </a>
            </div>
            <div className="col-lg-5">
              <div className="banner_img">
                <img src="images/banner.png" alt="Hello" />
                <img src="images/home/mob-banner.jpg" alt="Hello" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Banner;
