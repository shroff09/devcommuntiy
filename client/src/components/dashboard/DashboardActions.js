import React from "react";
import { Link } from "react-router-dom";
export default function DashboardActions() {
  return (
    <div className="dash-buttons">
      <Link className="btn" to="/edit-profile">
        <i className="fas fa-user-circle text-primary"> Edit Profile</i>
      </Link>
      <Link className="btn" to="/add-experience">
        <i className="fab fa-black-tie text-primary"> Add Experience</i>
      </Link>
      <Link className="btn" to="/add-education">
        <i className="fas fa-graduation-cap text-primary"> Add Education</i>
      </Link>
    </div>
  );
}
