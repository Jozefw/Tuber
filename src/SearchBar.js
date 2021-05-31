import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
             searchName:''
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSearch(evt){
       this.setState({
           [evt.target.name]:evt.target.value
       })
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.props.formSubmit(this.state.searchName);
    }
    render() {
        return (      

<div id="cover">
        <form onSubmit={this.handleSubmit}> 
        <div className="tb">
            <div className="td">
            <input 
            type="text" 
            placeholder="Search"
            autoFocus 
            name="searchName"
            value={this.state.searchName}
            onChange={this.handleSearch}>
            </input>
        </div>
            <div className="td" id="s-cover">
            <button>
                <div id="s-circle"></div>
                <span></span>
            </button>
            </div>
        </div>
        </form>
        </div>
        )
    }
}
