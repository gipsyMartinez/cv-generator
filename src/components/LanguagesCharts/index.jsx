import React from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { Doughnut } from "react-chartjs-2";

const LanguaguesCharts = props => {
  const { userLanguages } = props;
  console.log(userLanguages);
  const languages = userLanguages.filter(
    (e, i) => userLanguages.indexOf(e) >= i
  );
  var languagesRepos = {};
  userLanguages.forEach(function(x) {
    return (languagesRepos[x] = (languagesRepos[x] || 0) + 1);
  });

  const data = canvas => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 100, 0);

    return {
      backgroundColor: gradient,
      labels: Object.keys(languagesRepos),
      datasets: [
        {
          data: Object.values(languagesRepos),
          backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56"]
        }
      ]
    };
  };

  return (
    <div>
      <div>Skills</div>
      {languages.map(l => (
        <p>{l}</p>
      ))}
      <div id={"myChart"} />
      <Doughnut data={data} />
    </div>
  );
};

export default LanguaguesCharts;
