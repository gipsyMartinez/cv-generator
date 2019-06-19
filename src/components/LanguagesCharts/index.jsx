import React from "react";
import { Doughnut } from "react-chartjs-2";
import PropTypes from "prop-types";
import style from "./styles.module.css";
import { CHART_COLORS } from "../../constants/colors";
import { formatLanguages } from "../../utils/userRepository";

const LanguagesCharts = props => {
  const { userLanguages } = props;

  const languages = formatLanguages(userLanguages);

  let languagesRepos = {};

  userLanguages.forEach(x => {
    languagesRepos[x] = (languagesRepos[x] || 0) + 1;
    return languagesRepos;
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
          backgroundColor: CHART_COLORS
        }
      ]
    };
  };

  return (
    <React.Fragment>
      <div className={style.textContainer}>
        <div className={style.descriptionsContainer}>
          <span className={style.descriptionLabels}>Main skills: </span>
        </div>
        <ul>
          {languages.map((lang, i) => (
            <li key={`lang-${i}`}>{lang}</li>
          ))}
        </ul>
        <div className={style.hrDivider} />
      </div>

      <Doughnut data={data} />
    </React.Fragment>
  );
};

LanguagesCharts.propTypes = {
  userLanguages: PropTypes.array.isRequired
};

export default LanguagesCharts;
