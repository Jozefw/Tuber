import React, { Component } from 'react';


export default class VideoDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        if(!this.props.videoView){
            return<div>Waiting for selection...</div>
        }
           const videoSrc = `https://www.youtube.com/embed/${this.props.videoView.id.videoId}`;
        return (
            <div>
                <div className="ui embed">
                    <iframe title="display player" src={videoSrc}></iframe>
                </div>
                <div className="ui segment zen-colors">
                    <h4 className="ui header"> {this.props.videoView.snippet.title}</h4>
                    <p className="description-style">{this.props.videoView.snippet.description}</p>
                </div>
            </div>
        )
    }
}
