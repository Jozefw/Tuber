import React, { Component } from 'react';
import "./VideoDetail.css";

export default class VideoDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    
    render() {
        return (
            <div onClick={()=>this.props.clickedVideo(this.props.vid)} className="VideoDetail item">
                <img className="ui image" src={this.props.vid.snippet.thumbnails.medium.url} alt={this.props.vid.snippet.title}></img>
                <div className="content zen-texting">
                <div className="header">
                {this.props.vid.snippet.title}
                </div>
                </div>
            </div>
        )
    }
}
