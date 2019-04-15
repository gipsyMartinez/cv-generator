import React from "react";
import style from "./styles.module.css";
import PropTypes from "prop-types";

const SearchForm = props => {
  const { handleSubmit, value, handleChange } = props;
  return (
    <div className={`${style.nonPrintable} ${style.formContainer}`}>
      <form onSubmit={handleSubmit}>
        <label>Github user:</label>
        <input
          type="text"
          className={style.inputText}
          value={value}
          onChange={handleChange}
          placeholder="Example: gipsyMartinez"
        />

        <div className={style.buttonContainer}>
          <input type="submit" className={style.inputButton} value="SEARCH" />
        </div>
      </form>
    </div>
  );
};

SearchForm.defaultProps = {
  value: ""
};

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default SearchForm;
