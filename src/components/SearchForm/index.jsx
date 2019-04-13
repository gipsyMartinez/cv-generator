import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import style from "./styles.module.css";
import DataList from "../DataList";

const BASE_API = "https://api.github.com";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", userData: {} };

    this.state = {
      userData: {},
      value: ""
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
        this.setState({ userData: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { userData } = this.state;
    console.log("USERDATA", { ...userData });
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <DataList {...userData} />
      </React.Fragment>
    );
  }
}

export default SearchForm;
