import "./AboutUs.css";

const AboutUs = ({ imageUrl, title, span, paragraph, paragraph2, reverse }) => {
  const imageColClass = reverse ? "col-md-7 order-md-2" : "col-md-7";
  const textColClass = reverse ? "col-md-5 order-md-1" : "col-md-5";

  return (
    <div className="row pb-100">
      <div className={imageColClass}>
        <img src={imageUrl} alt={title} className="img-fluid" />
      </div>
      <div className={textColClass}>
        <h2 className="inh2">
          {title}
          <span>{span}</span>
        </h2>
        <p className="text-start">{paragraph}</p>
        <p className="text-start">{paragraph2}</p>
      </div>
    </div>
  );
};
export default AboutUs;
