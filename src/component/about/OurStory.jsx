import "./OurStory.css";
const OurStory = () => {
  return (
    <div className="our_story">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 position-relative">
            <img src="images/about/story.png" />
            <h2 className="inh2">
              Our <span>story</span>
            </h2>
          </div>
          <div className="col-lg-5">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy{" "}
            </p>
            <p>
              Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurStory;
