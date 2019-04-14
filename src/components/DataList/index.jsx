import React from "react";
import PropTypes from "prop-types";
import PageToPrint from "../PageToPrint";
import PrintButton from "../PrintButton";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import LanguagesCharts from "../LanguagesCharts";
// import style from "../styles.module.css";


class DataList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log("PROPSS", this.props);
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
      organizations_url,
      html_url
    } = this.props;

    return (
      <React.Fragment>
        <PageToPrint>
          <div id="singlePage">
            <div>Data</div>
            <img src={avatar_url} />
            <div>{name}</div>
            <div>{bio}</div>
            <div>{html_url}</div>
            <div>{company}</div>
            <div>{login}</div>
            <div>{blog}</div>
            <div>{email}</div>
            <div>{bio}</div>
            <div>{organizations_url}</div>
            <div>{location}</div>
            <div>{hireable}</div>
          </div>
        </PageToPrint>

        {/* Add LAzy loading here */}

        {/* <button onClick={exportPdf}>Imprimir</button> */}
        <LanguagesCharts user={login} />
        <PrintButton pdfName={`CV-${name}`} label={"IMPRIMIR"} />
      </React.Fragment>
    );
  }
}

export default DataList;
