import React from "react";
import style from "./styles.module.css";

class SearchForm extends React.Component {
  render() {
    const { handleSubmit, value, handleChange } = this.props;
    return (
      <div className={style.formContainer}>
        <form onSubmit={handleSubmit}>
          <label>Github user:</label>
          <input
            type="text"
            className={style.inputText}
            value={value}
            onChange={handleChange}
            placeholder="example: gipsyMartinez"
          />

          <div className={style.buttonContainer}>
            <input type="submit" className={style.inputButton} value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;
