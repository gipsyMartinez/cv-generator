import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import style from "./styles.module.css";
import DataList from "../DataList";
import SearchForm from "../SearchForm";

// TODO: MOVE TO OTHER FILE
const BASE_API = "https://api.github.com";

const isEmpty = obj => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

const getUserRepos = repos => {
  return repos.filter(repo => !repo.fork);
};

const getUserLanguages = userRepos => {
  return getUserRepos(userRepos).map(lan => lan.language);
};

class CVGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", userData: {} };

    this.state = {
      userData: {},
      value: "",
      repos: [],
      userRepos: [],
      userLanguages: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { value } = this.state;
    axios
      .get(`${BASE_API}/users/${value}`)
      .then(response => {
        this.setState(
          { userData: response.data },
          this.fetchUserRepositories(value)
        );
      })
      .catch(error => {
        console.log(error);
      });
  }

  fetchUserRepositories(user) {
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then(response => {
        this.setState({
          userLanguages: getUserLanguages(response.data)
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { userData, userLanguages } = this.state;
    const isUserEmpty = isEmpty(userData);
    console.log("USERDATA", { ...userData });
    return (
      <React.Fragment>
        <SearchForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={this.state.value}
        />
        {!isUserEmpty && (
          <DataList {...userData} userLanguages={userLanguages} />
        )}
      </React.Fragment>
    );
  }
}

export default CVGenerator;
