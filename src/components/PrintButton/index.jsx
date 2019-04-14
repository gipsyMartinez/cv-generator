import React from "react";
import style from "./styles.module.css";

const PrintButton = ({ label }) => (
  <div className={style.buttonContainer}>
    <button
      className={`${style.nonPrintable} ${style.inputButton}`}
      onClick={() => window.print()}
    >
      {label}
    </button>
  </div>
);

export default PrintButton;
