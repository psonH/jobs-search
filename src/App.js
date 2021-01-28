import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import { Route, Switch } from "react-router-dom";
import Pagination from "./components/Pagination";
import SearchForm from "./components/SearchForm";

const App = () => {
  const [jobs, setJobs] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(15);

  //filtering
  const [jobType, setJobType] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const filterCategory = (slug) => {
    setJobType(slug);
  };

  const filterTitles = (title) => {
    setJobTitle(title);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobType, jobTitle]);

  const viewJobDetails = (routerProps) => {
    let jobID = parseInt(routerProps.match.params.id);
    return <JobDetails jobID={jobID} jobs={jobs} />;
  };

  const fetchData = () => {
    axios
      .get(
        `https://remotive.io/api/remote-jobs?category=${jobType}&search=${jobTitle}&limit=100`
      )
      .then((res) => {
        setJobs(res.data.jobs);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //get chucked posts
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  // console.log(currentJobs);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Switch>
      <Route exact path="/jobs-search">
        <SearchForm
          filterCategory={filterCategory}
          filterTitles={filterTitles}
        />
        <Home jobs={currentJobs} />
        <Pagination
          jobsPerPage={jobsPerPage}
          totalJobs={jobs.length}
          paginate={paginate}
        />
      </Route>
      <Route
        exact
        path="/job/:id"
        render={(routerProps) => viewJobDetails(routerProps)}
      />
    </Switch>
  );
};

export default App;
