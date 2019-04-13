import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const exportPdf = pdfName => {
  html2canvas(document.querySelector("#singlePage")).then(canvas => {
    document.body.appendChild(canvas); // if you want see your screenshot in body.
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 0, 0);

    pdf.save(`${pdfName}.pdf`);
  });
};

const PrintButton = ({ label, pdfName }) => (
  <button onClick={() => exportPdf(pdfName)}> {label}</button>
);

export default PrintButton;
