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
        return (
            <div>
                {this.props.videoView.title}
               
            </div>
        )
    }
}
