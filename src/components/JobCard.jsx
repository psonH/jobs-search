import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({
  jobID,
  datePosted,
  jobType,
  jobTitle,
  company,
  location,
}) => {
  return (
    <Link to={`/job/${jobID}`} className="job-link-container">
      <div className="job-card-container">
        <p className="job-details">
          {datePosted} . {jobType}
        </p>
        <div className="job-main-info">
          <h5 className="job-title">{jobTitle}</h5>
          <p className="job-details">{company}</p>
        </div>
        <p className="job-location">{location}</p>
      </div>
    </Link>
  );
};

export default JobCard;
