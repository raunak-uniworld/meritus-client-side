import { useState } from "react";
import "./Computational.css";
import "./Custom.js";
function Computational() {
  // Function to hide all tab content
  const [activeContent1, setActiveContent1] = useState(true);
  const [activeContent2, setActiveContent2] = useState(false);
  const [activeContent3, setActiveContent3] = useState(false);
  const [activeContent4, setActiveContent4] = useState(false);
  const [activeContent5, setActiveContent5] = useState(false);

  const handleContent1 = () => {
    setActiveContent1(true);
    setActiveContent2(false);
    setActiveContent3(false);
    setActiveContent4(false);
    setActiveContent5(false);
  };
  const handleContent2 = () => {
    setActiveContent1(false);
    setActiveContent2(true);
    setActiveContent3(false);
    setActiveContent4(false);
    setActiveContent5(false);
  };
  const handleContent3 = () => {
    setActiveContent1(false);
    setActiveContent2(false);
    setActiveContent3(true);
    setActiveContent4(false);
    setActiveContent5(false);
  };
  const handleContent4 = () => {
    setActiveContent1(false);
    setActiveContent2(false);
    setActiveContent3(false);
    setActiveContent4(true);
    setActiveContent5(false);
  };
  const handleContent5 = () => {
    setActiveContent1(false);
    setActiveContent2(false);
    setActiveContent3(false);
    setActiveContent4(false);
    setActiveContent5(true);
  };
  return (
    <div className="Computational_container">
      <section className="Computational_home">
        <div className="wrapper">
          <div className={ `${activeContent1 ? "active" : ""} sector` } id="sec1" onClick={handleContent1}>
            <img src="images/home/think.png" />
          </div>
          <div className={ `${activeContent2 ? "active" : ""} sector` } id="sec2" onClick={handleContent2}>
            <img src="images/home/stem.png" />
          </div>
          <div className={ `${activeContent3 ? "active" : ""} sector` } id="sec3" onClick={handleContent3}>
            <img src="images/home/python.png" />
          </div>
          <div className={ `${activeContent4 ? "active" : ""} sector` } id="sec4" onClick={handleContent4}>
            <img src="images/home/robot.png" />
          </div>
          <div className={ `${activeContent5 ? "active" : ""} sector` } id="sec5" onClick={handleContent5}>
            <img src="images/home/chip.png" />
          </div>
          <div className="middle">
            <img src="images/home/center-cm.png" />
            <div className="middle_con">
              {/* <img src="images/home/com_icon.svg"/> */}
              <p>COMPUTATIONAL</p>
            </div>
          </div>
        </div>

        <div className="content">
          {activeContent1 && (
            <div className="tab-content" id="content1">
              <p className="pSize dBlue">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          )}
          {activeContent2 && (
            <div className="tab-content" id="content2">
              Content for Sector 2
            </div>
          )}

          {activeContent3 && (
            <div className="tab-content" id="content3">
              Content for Sector 3
            </div>
          )}

          {activeContent4 && (
            <div className="tab-content" id="content4">
              Content for Sector 4
            </div>
          )}

          {activeContent5 && (
            <div className="tab-content" id="content5">
              Content for Sector 5
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
export default Computational;
