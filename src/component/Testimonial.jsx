import "./Testimonial.css";

export default function Testimonial({
  TestimonialHeadingTop,
  TestimonialHeading,
  TestimonialImgUrl,
  TestimonialSub,
  TestimonialPara
}) {
  return (
    <div>
      <div className="testimonials_item">
        <h2 className="hSize fw-600 ff dBlue">
          {TestimonialHeadingTop} <span>Say</span>
        </h2>
        <img
          src={TestimonialImgUrl}
          alt={TestimonialHeading}
          className="mt-lg-5 mb-lg-4"
        />
        <h3 className="ff dPink fw-600 f-20">{TestimonialHeading} </h3>
        <h4 className="ff fw-600 f-20 dBlue">{TestimonialSub}</h4>
        <img src="images/q.svg" className="quotation" />
        <p className="text-start ff">{TestimonialPara}</p>
      </div>
    </div>
  );
}
