import React, { Component } from "react";
import API from "../utils/API";
// import Form from "../components/Form"
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
  state = {
    search: "",
    results: [],
    error: ""
  };


  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  componentDidMount() {
    API.getRandomUser()
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.getRandomUser(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.results);
        }
        this.setState({ results: res.data.results, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <br />
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            results={this.state.results}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;
