import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="results"><strong>Username:</strong></label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="results"
          list="results"
          type="text"
          className="form-control"
          placeholder="Type in a user name to begin"
          id="results"
        />
        <datalist id="results">
          {props.results.map(results => (
            <option value={results} key={results} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-dark">
          <strong>Search</strong>
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
