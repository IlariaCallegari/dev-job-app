import React, { memo, useContext } from "react";
import getUrls from "get-urls";
import TimeAgo from "timeago-react";
import { ThemeContext } from "../../contexts/ThemeContext";
import useStyles from "../../styles/JobDescription-style";

function JobDescription({ jobSelected }) {
  const {
    position,
    location,
    contract,
    description,
    postedAt,
    apply,
    requirements,
    role,
  } = jobSelected;
  const { isDark } = useContext(ThemeContext);
  const classes = useStyles(isDark);
  const { container, positionStyle, jobDescription, button } = classes;
  const urlSet = getUrls(apply);

  const getUrl = () => {
    for (let u of urlSet) {
      return u;
    }
  };

  return (
    <div className={container}>
      <div className={positionStyle}>
        <div>
          <p>
            <span>
              <TimeAgo datetime={postedAt} />
            </span>{" "}
            • <span>{contract}</span>{" "}
          </p>
          <h2>{position}</h2>
          <p>{location}</p>
        </div>
        <a className={button} href={getUrl()}>
          Apply Now
        </a>
      </div>
      <div className={jobDescription}>
        <h2>Requirements</h2>
        <p>{description}</p>
        <p>{requirements.content}</p>
        <ul>
          {requirements.items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <h2>The Role</h2>
        <p>{role.content}</p>
        <ul>
          {role.items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default memo(JobDescription);
