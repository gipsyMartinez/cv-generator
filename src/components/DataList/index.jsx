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
          <hr />
        </section>
        <section>
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
            <span>{html_url}</span>
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
              <span className={`${style.descriptionLabels} blog`}>Blog: </span>
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

          {userLanguages.length > 0 && (
            <LanguagesCharts userLanguages={userLanguages} />
          )}
        </section>
      </div>

      <div className={style.buttonContainer}>
        <button
          className={`${style.nonPrintable} ${style.inputButton}`}
          onClick={() => window.print()}
        >
          IMPRIMIR
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
