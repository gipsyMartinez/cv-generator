import React from "react";

const PageToPrint = ({ children, singleMode }) => (
  <div
    className="bg-white shadow-1 center pa4"
    style={{ width: "210mm", height: singleMode ? "297mm" : "" }}
  >
    {children}
  </div>
);

export default PageToPrint;
