import React, { Component } from 'react';
import VideoDetail from './VideoDetail';

export default class VideoList extends Component {
    constructor(props) {
        super(props)
        this.state = { 
        }
    }
    
    render() {
        const listedVideos = this.props.videos.map((singleVidItem)=>{
            return <VideoDetail clickedVideo={this.props.chosenVideo} vid={singleVidItem}></VideoDetail>
            
        })
        return (
            <div className="ui relaxed divided list">
                {listedVideos}
            </div>
        )
    }
}
