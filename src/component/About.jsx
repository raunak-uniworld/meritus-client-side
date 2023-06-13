import "./about.css";
function About() {
  return (
    <div>
      <section class="about_home pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <video width="100%" controls muted>
                <source src="video/about.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="col-lg-8">
              <h1 className="about_home_heading">
                About <span>Meritus</span>
              </h1>
              <p className="about_home_para ff fw-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p className="about_home_para">
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
              <p className="about_home_para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="about_home_counter_cont">
                <div className="about_home_counter_item">
                  <h2 className="ff fw-600 pink-c">100+</h2>
                  <p>Number One</p>
                </div>
                <div className="about_home_counter_item">
                  <h2 className="ff fw-600 pink-c">100+</h2>
                  <p>Number One</p>
                </div>
                <div className="about_home_counter_item">
                  <h2 className="ff fw-600 pink-c">100+</h2>
                  <p>Number One</p>
                </div>
              </div>
              <a href="/" className="ff fw-700">
                {" "}
                Know The Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
