import Carousel from "react-grid-carousel";
import CardUni from "../../pages/CardUni.jsx";
import "./Core.css";
const Core = () => {
  const cardData = [
    {
      imageUrl: "images/about/icon-1.png",
      title: "Coding & AI Unplugged activities",
      spantxt: "",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      backgroundColor: "white"
    },
    {
      imageUrl: "images/about/icon-2.png",
      title: "Screen-Free STEM educational kits",
      spantxt: "",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      backgroundColor: "white"
    }
    // Add more card data as needed
  ];
  return (
    <div className="core_value">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <h2>Core values</h2>
            <p>
              We specialize in creating age-appropriate curriculum & educational
              resources that are future-proof and involve experiential learning
              via :
            </p>
          </div>
          <div className="col-md-8">
            <Carousel
              cols={2}
              rows={1}
              gap={40}
              showDots={true}
              dotColorActive="#E20F6F"
              hideArrow={true}
              loop
            >
              {cardData.map((card, index) => (
                <Carousel.Item key={index}>
                  <CardUni {...card} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Core;
