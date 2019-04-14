import React from "react";
import { Doughnut } from "react-chartjs-2";
import style from "./styles.module.css";

const COLORS = [
  "#ff6384",
  "#36a2eb",
  "#cc65fe",
  "#ffce56",
  "#FFE600",
  "#005FFF",
  "#00CED6",
  "#1D8E3E",
  "#FFA601",
  "#186E8F",
  "#5E0776",
  "#C4995E"
];

const LanguaguesCharts = props => {
  const { userLanguages } = props;

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
          backgroundColor: COLORS
        }
      ]
    };
  };

  return (
    <div>
      <div className={style.descriptionsContainer}>
        <span className={style.descriptionLabels}>Main skills: </span>
      </div>
      <ul>
        {languages.map(lang => (
          <li>{lang}</li>
        ))}
      </ul>

      <Doughnut data={data} />
    </div>
  );
};

export default LanguaguesCharts;
