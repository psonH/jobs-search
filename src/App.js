import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://jobs.github.com/positions.json")
      .then((res) => {
        // const { info } = res.data;
        setJobs(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {jobs.map((job) => {
        return <p key={job.id}>{job.title}</p>;
      })}
    </div>
  );
};

export default App;
