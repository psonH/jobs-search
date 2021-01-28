import React from "react";
// import axios from "axios";
import { Row, Col, Button } from "react-bootstrap";

const JobDetails = ({ jobID, jobs }) => {
  const jobArray = jobs.filter((job) => job.id === jobID);
  const job = jobArray[0];

  return (
    <Row className="job-details-container-main">
      <Col xs={12} className="job-details-container"></Col>
      <Col xs={12} className="job-details-container-inner">
        <div>
          <p className="job-details-inner">
            {job.publication_date} . {job.job_type}
          </p>
          <h5 className="job-title-inner">{job.title}</h5>
          <p className="job-location">{job.candidate_required_location}</p>
          <Button className="apply-now-btn">Apply Now</Button>
        </div>
        <div className="job-desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            aliquet fermentum tellus, ac lobortis eros ornare viverra. Quisque
            mattis vitae risus vitae tempor. Nam gravida leo hendrerit rhoncus
            convallis. Nunc eget dui eu tellus sodales tincidunt. Sed euismod ac
            lacus nec ultricies. Phasellus luctus erat vel lacus tincidunt,
            vitae lacinia risus accumsan. Integer quis erat maximus, suscipit
            eros ac, luctus ante.
          </p>
          <p>
            Fusce venenatis turpis libero, ut venenatis velit tempor quis.
            Mauris et justo nulla. Sed ut turpis mollis, consectetur massa id,
            ultrices nisl. Nam vestibulum, purus eget eleifend placerat, tortor
            sem suscipit nibh, quis tempor est risus a enim. Nunc vitae ornare
            lectus, sed eleifend dolor. Morbi lacinia tincidunt scelerisque.
            Fusce tincidunt odio felis, sed auctor magna blandit in. Vivamus
            quis venenatis sapien, consectetur tempor sapien. Sed quam urna,
            dignissim vitae tincidunt ac, posuere et eros.
          </p>
          <h5>What You Will Do</h5>
          <ul>
            <li>
              Fusce venenatis turpis libero, ut venenatis velit tempor quis.
              Mauris et justo nulla.
            </li>
            <li>
              Morbi lacinia tincidunt scelerisque. Fusce tincidunt odio felis,
              sed auctor magna blandit in.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              aliquet fermentum tellus, ac lobortis eros ornare viverra.
            </li>
            <li>
              Fusce venenatis turpis libero, ut venenatis velit tempor quis.
              Mauris et justo nulla.
            </li>
            <li>
              Morbi lacinia tincidunt scelerisque. Fusce tincidunt odio felis,
              sed auctor magna blandit in.
            </li>
          </ul>
          <h5>Requirements</h5>
          <ul>
            <li>
              Fusce venenatis turpis libero, ut venenatis velit tempor quis.
              Mauris et justo nulla.
            </li>
            <li>
              Morbi lacinia tincidunt scelerisque. Fusce tincidunt odio felis,
              sed auctor magna blandit in.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              aliquet fermentum tellus, ac lobortis eros ornare viverra.
            </li>
            <li>
              Fusce venenatis turpis libero, ut venenatis velit tempor quis.
              Mauris et justo nulla.
            </li>
            <li>
              Morbi lacinia tincidunt scelerisque. Fusce tincidunt odio felis,
              sed auctor magna blandit in.
            </li>
          </ul>
        </div>
      </Col>
      <Col xs={12} className="job-details-container"></Col>
    </Row>
  );
};

export default JobDetails;
