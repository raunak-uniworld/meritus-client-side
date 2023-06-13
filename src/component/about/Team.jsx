import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Team = ({ imageUrl, title, paragraph, linkedinUrl }) => {
  return (
    <div className="team-member">
      <img src={imageUrl} alt="Team Member" className="team-member-image" />
      <h2 className="team-member-title">{title}</h2>
      <p className="team-member-paragraph">{paragraph}</p>
      <a href={linkedinUrl} className="team-member-linkedin">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default Team;
