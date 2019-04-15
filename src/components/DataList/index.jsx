import React from "react";
import PropTypes from "prop-types";
import LanguagesCharts from "../LanguagesCharts";
import style from "./styles.module.css";

const DataList = props => {
  const {
    login,
    avatar_url,
    name,
    company,
    blog,
    location,
    email,
    hireable,
    bio,
    html_url,
    userLanguages
  } = props;

  return (
    <React.Fragment>
      <div id="printableArea">
        <section className={style.headerSection}>
          <img alt="avatar-img" src={avatar_url} />
          <div className={style.name}>{name}</div>
          <div className={style.bio}>{bio}</div>
          <div className={style.hrDivider} />
        </section>
        <section>
          <div className={style.textContainer}>
            {email && (
              <div className={style.descriptionsContainer}>
                <span className={`${style.descriptionLabels} email`}>
                  Email:{" "}
                </span>
                <span>{email}</span>
              </div>
            )}

            <div className={style.descriptionsContainer}>
              <span className={style.descriptionLabels}>Portfolio: </span>
              <a href={html_url}>{html_url}</a>
            </div>
            <div className={style.descriptionsContainer}>
              <span className={style.descriptionLabels}>Github User: </span>
              <span>{login}</span>
            </div>
            {company && (
              <div className={style.descriptionsContainer}>
                <span className={`${style.descriptionLabels} company`}>
                  Company:{" "}
                </span>
                <span>{company}</span>
              </div>
            )}

            {blog && (
              <div className={style.descriptionsContainer}>
                <span className={`${style.descriptionLabels} blog`}>
                  Blog:{" "}
                </span>
                <a href={blog}>{blog}</a>
              </div>
            )}

            {location && (
              <div className={style.descriptionsContainer}>
                <span className={`${style.descriptionLabels} location`}>
                  Location:{" "}
                </span>
                <span>{location}</span>
              </div>
            )}

            <div className={style.descriptionsContainer}>
              <span className={style.descriptionLabels}>Hireable: </span>
              <span>{hireable ? "Yes" : "No"}</span>
            </div>
          </div>
          {userLanguages.length > 0 && (
            <LanguagesCharts userLanguages={userLanguages} />
          )}
        </section>
      </div>

      <div className={`${style.nonPrintable} ${style.buttonContainer}`}>
        <button className={style.inputButton} onClick={() => window.print()}>
          PRINT
        </button>
      </div>
    </React.Fragment>
  );
};

DataList.defaultProps = {
  userLanguages: [],
  name: "",
  blog: "",
  email: "",
  company: "",
  location: "",
  hireable: false,
  bio: ""
};

DataList.propTypes = {
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
  name: PropTypes.string,
  company: PropTypes.string,
  blog: PropTypes.string,
  location: PropTypes.string,
  email: PropTypes.string,
  hireable: PropTypes.bool,
  bio: PropTypes.string,
  html_url: PropTypes.string.isRequired,
  userLanguages: PropTypes.array
};

export default DataList;
