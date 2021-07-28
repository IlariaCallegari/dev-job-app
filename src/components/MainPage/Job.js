import { memo, useContext } from "react";
import TimeAgo from "timeago-react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import useStyles from "../../styles/Job-style";

function Job({
  postedAt,
  contract,
  logo,
  logoBackground,
  position,
  location,
  company,
  id,
}) {
  const { isDark } = useContext(ThemeContext);
  const classes = useStyles(isDark);
  const {
    jobBox,
    logoStyle,
    jobType,
    jobTitle,
    companyName,
    place,
  } = classes;
  return (
    <div className={jobBox}>
      <div className={logoStyle} style={{ background: logoBackground }}>
        <img src={logo} alt={`${company} logo`} />
      </div>
      <NavLink to={`/job-description/${id}`}>
        <div className={jobType}>
          <span>
            <TimeAgo datetime={postedAt} />
          </span>
          • <span>{contract}</span>
        </div>
        <div>
          <h1 className={jobTitle}>{position}</h1>
        </div>
        <div className={companyName}>{company}</div>
        <div className={place}>{location}</div>
      </NavLink>
    </div>
  );
}

export default memo(Job);
