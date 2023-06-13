import LifeBanner from "../component/lifeAt/LifeBanner";
import LifeCta from "../component/lifeAt/LifeCta";
import Carousel from "react-grid-carousel";
import CardUni from "./CardUni.jsx";
import AboutUs from "./AboutUs";
import "./LifeAt.css";
import "./CardUni.css";
const LifeAt = () => {
  const dynamicComponentPropsArray = [
    {
      imageUrl: "images/lifeAt/working.png",
      title: "Working at ",
      span: "Meritus",
      paragraph:
        "We are a team of educators and technologists who are passionate about helping students explore and understand the fundamentals of AI and coding and the role that it plays in our daily life.Our founders and Governing Board have been involved with education and computer science for decades.",
      paragraph2:
        " Based on years of scientific research, these patented and proven courses for grades K-12 reach students at their individual level to accelerate learning, improve performance, and drive both college and career success.",
      reverse: true
    }
  ];
  const MeritusData = [
    {
      imageUrl: "images/lifeAt/meritus.png",
      title: "What to expect at ",
      span: "Meritus?",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ",
      paragraph2:
        "  been.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      reverse: true
    }
  ];
  const cardData = [
    {
      imageUrl: "images/lifeAt/icon_1.png",
      title: "Progressive ",
      spantxt: "innovation",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      backgroundColor: ""
    },
    {
      imageUrl: "images/lifeAt/icon_2.png",
      title: "Social ",
      spantxt: "Progress",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      backgroundColor: "white"
    },
    {
      imageUrl: "images/lifeAt/icon_3.png",
      title: "Defiant ",
      spantxt: "optimism",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      backgroundColor: "white"
    },
    {
      imageUrl: "images/lifeAt/icon_1.png",
      title: "Progressive ",
      spantxt: "innovation",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      backgroundColor: ""
    },
    {
      imageUrl: "images/lifeAt/icon_2.png",
      title: "Social ",
      spantxt: "Progress",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      backgroundColor: "white"
    },
    {
      imageUrl: "images/lifeAt/icon_3.png",
      title: "Defiant ",
      spantxt: "optimism",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      backgroundColor: "white"
    }
    // Add more card data as needed
  ];
  const cardData1 = [
    {
      imageUrl: "images/lifeAt/icon_1.png",
      spantxt: " Cross-Functional ",
      title: " Collaboration",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      backgroundColor: "#FFEEF3"
    },
    {
      imageUrl: "images/lifeAt/icon_2.png",
      spantxt: " Continuous ",
      title: "Professional Development",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      backgroundColor: "#FFEEF3"
    }
    // Add more card data as needed
  ];
  return (
    <div>
      <LifeBanner />
      <section className="we_are_do pt-100 pb-100">
        <div className="container">
          {dynamicComponentPropsArray.map((card, index) => (
            <AboutUs key={index} {...card} />
          ))}
        </div>
      </section>
      <section className="stand_for">
        <div className="container">
          <h2 className="inh2 mb-5">
            What we <span>stand for</span>
          </h2>
          <Carousel
            cols={3}
            rows={1}
            gap={40}
            showDots={true}
            dotColorActive="#E20F6F"
            hideArrow={false}
            loop
          >
            {cardData.map((card, index) => (
              <Carousel.Item key={index}>
                <CardUni {...card} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>
      <section className="learning pt-100 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <h2 className="inh2 mb-5">
                What we <span>stand for</span>
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
                dummy.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been.
              </p>
            </div>
            <div className="col-md-8">
              <Carousel
                cols={2}
                rows={1}
                gap={40}
                showDots={true}
                dotColorActive="#E20F6F"
                hideArrow={false}
                loop
              >
                {cardData1.map((card, index) => (
                  <Carousel.Item key={index}>
                    <CardUni {...card} />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className="we_are_do pt-100 pb-100">
        <div className="container">
          {MeritusData.map((card, index) => (
            <AboutUs key={index} {...card} />
          ))}
        </div>
      </section>
      <section className="life_cta">
        <LifeCta />
      </section>
    </div>
  );
};

export default LifeAt;
