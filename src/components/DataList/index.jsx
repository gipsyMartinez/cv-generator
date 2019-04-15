import React from "react";
import PropTypes from "prop-types";
import PrintButton from "../PrintButton";
import LanguagesCharts from "../LanguagesCharts";
import style from "./styles.module.css";

class DataList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
    } = this.props;

    return (
      <React.Fragment>
        <div id="printableArea">
          <section className={style.headerSection}>
            <img src={avatar_url} />
            <div className={style.name}>{name}</div>
            <div className={style.bio}>{bio}</div>
            <hr />
          </section>
          <section>
            {email && (
              <div className={style.descriptionsContainer}>
                <span className={style.descriptionLabels}>Email: </span>
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
                <span className={style.descriptionLabels}>Company: </span>
                <span>{company}</span>
              </div>
            )}

            {blog && (
              <div className={style.descriptionsContainer}>
                <span className={style.descriptionLabels}>Blog: </span>
                <a href={blog}>{blog}</a>
              </div>
            )}

            {location && (
              <div className={style.descriptionsContainer}>
                <span className={style.descriptionLabels}>Location: </span>
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

        <PrintButton label={"IMPRIMIR"} />
      </React.Fragment>
    );
  }
}

export default DataList;
