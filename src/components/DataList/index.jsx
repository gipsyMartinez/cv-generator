import React from "react";
import PropTypes from "prop-types";
import PageToPrint from "../PageToPrint";
import PrintButton from "../PrintButton";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
// import style from "../styles.module.css";

const DataList = props => {
  console.log("PROPS", props);

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
  } = props;

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

      {/* <button onClick={exportPdf}>Imprimir</button> */}
      <PrintButton pdfName={`CV-${name}`} label={"IMPRIMIR"} />
    </React.Fragment>
  );
};

export default DataList;
