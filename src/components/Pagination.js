/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import { Row, Col } from "react-bootstrap";

const Pagination = ({ jobsPerPage, totalJobs, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination pagination-lg w-75 m-auto d-flex flex-warp justify-content-center pagination-container">
      {pageNumbers.map((number) => (
        <li key={number} className="page-item">
          <a onClick={() => paginate(number)} className="page-link">
            {number}
          </a>
        </li>
      ))}
    </nav>
  );
};

export default Pagination;
