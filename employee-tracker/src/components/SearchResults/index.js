import React from "../../../node_modules/react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          <img alt="User" src={result.picture.thumbnail} className="img-fluid" />
          <h5>{result.name.first} {result.name.last} {result.phone} {result.email} {result.dob.date}</h5>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;