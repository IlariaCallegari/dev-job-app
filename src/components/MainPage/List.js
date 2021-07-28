import { memo, useContext } from "react";
import { JobContext } from "../../contexts/JobContext";
import Job from "./Job";
import useStyles from "../../styles/List-style";

function List() {
  const { displayedJobs } = useContext(JobContext);
  const classes = useStyles();
  const { list } = classes;

  return (
    <div className={list}>
      {displayedJobs.map((job) => (
        <Job
          key={job.id}
          id={job.id}
          logo={job.logo}
          logoBackground={job.logoBackground}
          postedAt={job.postedAt}
          contract={job.contract}
          position={job.position}
          company={job.company}
          location={job.location}
        />
      ))}
    </div>
  );
}

export default memo(List);
