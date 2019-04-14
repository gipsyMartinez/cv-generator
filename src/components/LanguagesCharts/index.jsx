import React from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const getUserRepos = repos => {
  return repos.filter(repo => !repo.fork);
};

const getUserLanguages = userRepos => {
  return getUserRepos(userRepos).map(lan => lan.language);
};

class LanguaguesCharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { repos: [], userRepos: [], userLanguages: [] };
  }
  componentDidMount() {
    const { user } = this.props;
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then(response => {
        this.setState({
          repos: response.data,
          userRepos: getUserRepos(response.data),
          userLanguages: getUserLanguages(response.data)
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    console.log(
      "REPO",
      this.state.repos,
      this.state.repos.length,
      this.state.userRepos.length,
      this.state.userLanguages
    );
    const { user } = this.props;
    const { userLanguages } = this.state;
    const languages = userLanguages.filter(
      (e, i) => userLanguages.indexOf(e) >= i
    );

    return (
      <div>
        THE USEWR:{user}
        <div>Skills</div>
        {languages.map(l => (
          <p>{l}</p>
        ))}
      </div>
    );
  }
}

export default LanguaguesCharts;
