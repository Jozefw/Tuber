import React, { Component } from 'react'
import './App.css';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDisplay from './VideoDisplay';
import API from './api';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {videos:[],selectedVideo:null}
    this.SearchTermSubmit = this.SearchTermSubmit.bind(this);
    this.selectedVideo = this.selectedVideo.bind(this);
  }
  async SearchTermSubmit(term){
   const response =  await API.get("/search",{
      params: {
        q:term 
      }
    });
    this.setState({videos:response.data.items});
  }

  selectedVideo(videoId){
    this.setState({selectedVideo:videoId})
    console.log(this.state.selectedVideo);
  }

  render() {
    return (
    <div className="App">
      <SearchBar formSubmit={this.SearchTermSubmit}></SearchBar>
      <VideoDisplay videoView={this.state.selectedVideo}></VideoDisplay>
      <VideoList chosenVideo={this.selectedVideo} videos={this.state.videos}></VideoList>
    </div>
      
    )
  }
}




