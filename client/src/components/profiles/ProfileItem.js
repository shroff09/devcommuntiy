import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <div className="profile bg-light">
      <div className="profile-text">
        <h2>{name}</h2>
        <p>{status}</p>
        <p> {company && <span> at {company}</span>}</p>
        <p>{location && <span>{location}</span>}</p>
        <br />
        <Link to={`/profile/${_id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
      <img className="round-img" src={avatar} />
      <ul className="profile-text">
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className="profile-text">
            <i className="fas fa-ribbon"></i> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
