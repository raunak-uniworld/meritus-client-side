const MilestoneCard = ({ imageUrl, title, date, paragraph }) => {
  return (
    <div className="milestone-card">
      <img src={imageUrl} alt="Milestone" className="milestone-image" />
      <h2 className="milestone-title f-20 fw-700">{title}</h2>
      <p className="milestone-date">{date}</p>
      <p className="milestone-paragraph">{paragraph}</p>
    </div>
  );
};

export default MilestoneCard;
