import "./Philosophy.css";
const Philosophy = ({ title, desc }) => {
  return (
    <div className="Philosphy position-relative">
      <div className="first_philosphy">
        <div className="elips"></div>
        <h2>{title}</h2>
      </div>
      <div className="sec_philosphy">
        <p>{desc}</p>
      </div>
    </div>
  );
};
export default Philosophy;
