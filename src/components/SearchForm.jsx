import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Row, Col } from "react-bootstrap";

const SearchForm = ({ filterCategory, filterTitles }) => {
  const [jobTypes, setJobTypes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://remotive.io/api/remote-jobs/categories")
      .then((res) => {
        setJobTypes(res.data.jobs);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Row className="d-flex justify-content-center search-form w-75 m-auto">
      <Form.Row>
        <Form.Group xs={12} md={6} as={Col}>
          <Form.Label>Job Title</Form.Label>
          <Form.Control
            placeholder="Enter Job Title"
            onChange={(e) => filterTitles(e.target.value)}
          />
        </Form.Group>

        <Form.Group xs={12} md={6} as={Col}>
          <Form.Label>Job Type</Form.Label>
          <Form.Control as="select" defaultValue="All">
            <option onClick={() => filterCategory("")}>All</option>
            {jobTypes.map((jobType) => {
              return (
                <option
                  key={jobType.id}
                  onClick={() => filterCategory(jobType.slug)}
                >
                  {jobType.name}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
      </Form.Row>
    </Row>
  );
};

export default SearchForm;
