import { useContext } from "react";
import useStyles from "../../styles/Footer-style";
import { ThemeContext } from "../../contexts/ThemeContext";
import getUrls from "get-urls";

function Footer({ jobSelected }) {
  const { isDark } = useContext(ThemeContext);
  const classes = useStyles(isDark);
  const { company, position, apply } = jobSelected;
  const { footer, container, jobTitle, button } = classes;
  const urlSet = getUrls(apply);

  const getUrl = () => {
    for (let u of urlSet) {
      return u;
    }
  };

  return (
    <div className={footer}>
      <div className={container}>
        <div>
          <h3 className={jobTitle}>{position}</h3>
          <p>{company}</p>
        </div>
        <a className={button} href={getUrl()}>
          Apply Now
        </a>
      </div>
    </div>
  );
}

export default Footer;
