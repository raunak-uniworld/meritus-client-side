import "./trainers.css";
export default function Trainers({
  Trainerstitle,
  TrainersimageUrl,
  TrainersPara,
  TrainersCourse,
  Trainersrating
}) {
  return (
    <div>
      <div className="Trainers_container">
        <img src={TrainersimageUrl} alt={Trainerstitle} />
        <h2 className="ff fw-600 f-20 dBlue ">{Trainerstitle}</h2>
        <p className="ff fw-400">{TrainersPara}</p>
        <div className="Trainers_container_option">
          <span className="ff fw-600 dPink">{TrainersCourse} </span>
          <span className="ratingC">{Trainersrating}</span>
        </div>
      </div>
    </div>
  );
}
