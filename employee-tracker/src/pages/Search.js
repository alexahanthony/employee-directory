import React, { Component } from "react";
import API from "../utils/API";
// import Form from "../components/Form"
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
  state = {
    search: "",
    results: [],
    error: "",
    myResults: []
  };


  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  componentDidMount() {
    API.getRandomUser()
      .then(res => this.setState({ myResults: res.data.results, results: res.data.results }))
      .catch(err => console.log(err));
  }

  handleFormSubmit = event => {
    event.preventDefault();
    let myResults = this.state.myResults.filter(obj => {
        return obj.name.first === this.state.search})
      this.setState({ results: myResults})
      if(this.state.search === '') {
        this.setState({results: this.state.myResults})
      }
      console.log(this.state.myResults)
      console.log(this.state.search)

    
  };
  render() {
    return (
      <div>
        
          <br />
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            results={this.state.results}
          />
          <SearchResults results={this.state.results} />
        
      </div>
    );
  }
}

export default Search;
