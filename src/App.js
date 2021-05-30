import React, { Component } from 'react'
import './App.css';
import SearchBar from './SearchBar';
import API from './api';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       
    }
    this.SearchTermSubmit = this.SearchTermSubmit.bind(this);
  }
  SearchTermSubmit(term){
    console.log(term);
    API.get("/search",{
      params: {
        q:term
      }
    });
  }

  render() {
    return (
    <div className="App">
      <SearchBar formSubmit={this.SearchTermSubmit}></SearchBar>
    </div>
      
    )
  }
}




