import React, { memo, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { parseURL } from "../../utils/helpers";
import useStyles from "../../styles/ComapanyInfo-style";

function CompanyInfo({ jobSelected }) {
  const { logo, company, website, logoBackground} = jobSelected;
  const { isDark } = useContext(ThemeContext);
  const classes = useStyles(isDark);
  const { header, logoStyle, infos, companyName, url, button } = classes;
  return (
    <div className={header}>
      <div className={logoStyle} style={{background: logoBackground}}>
        <img
          src={logo}
          alt={`${company} logo`}
        />
      </div>
      <div className={infos}>
        <div>
          <h3 className={companyName}>{jobSelected.company}</h3>
          <p className={url}>{parseURL(website)}</p>
        </div>
        <div className={button}>
          <a href={`${website}`}>Company Site</a>
        </div>
      </div>
    </div>
  );
}

export default memo(CompanyInfo);
