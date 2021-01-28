import React from "react";
import { Row, Col } from "react-bootstrap";
import JobCard from "../components/JobCard";

const Home = ({ jobs }) => {
  return (
    <Row className="w-75 m-auto">
      {jobs.map((job) => {
        return (
          <Col key={job.id} xs={12} sm={6} lg={4} className="jobs-container">
            <JobCard
              jobID={job.id}
              datePosted={job.publication_date}
              jobType={job.job_type}
              jobTitle={job.title}
              company={job.company_name}
              location={job.candidate_required_location}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default Home;
