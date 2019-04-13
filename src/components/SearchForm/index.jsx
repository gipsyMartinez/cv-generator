import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import style from "./styles.module.css";

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
      .get(`https://api.github.com/users/${value}`)
      .then(response => {
        this.setState({ userData: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
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
    );
  }
}

export default SearchForm;
