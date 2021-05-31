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

  componentDidMount(){
    this.SearchTermSubmit('pinky and the brain');
    console.log('mounted!!!')
  }
  async SearchTermSubmit(term){
   const response =  await API.get("/search",{
      params: {
        q:term 
      }
    });
    this.setState({
      videos:response.data.items,
      selectedVideo:response.data.items[0]
    });
  }

  selectedVideo(videoId){
    this.setState({selectedVideo:videoId})
  }

  render() {
    return (
    <div className="App">
      <SearchBar formSubmit={this.SearchTermSubmit}></SearchBar>
    <div className="ui grid">
      <div className="ui row zen_centering">
        <div className="nine wide column">
          <VideoDisplay videoView={this.state.selectedVideo}></VideoDisplay>
        </div>
        <div className="six wide column">
        <VideoList chosenVideo={this.selectedVideo} videos={this.state.videos}></VideoList>
        </div>
      </div>
    </div>

    </div>
      
    )
  }
}




