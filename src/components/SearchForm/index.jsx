import React from "react";

class SearchForm extends React.Component {
  render() {
    const { handleSubmit, value, handleChange } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchForm;
