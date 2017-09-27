import React, { Component } from 'react';
import YouTube              from 'react-youtube' ;

class BusinessDetailVideo extends Component{
    render(){
        const opts = {
            height: '376',
            width: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters 
                autoplay: 1
            }
        };
        return(
            <section id="video-js" className="pv-20">
                 <YouTube
                    videoId="XKzOqrbvsKQ"
                    opts={opts}
                    onReady={this._onReady}
                />
            </section>
        )
    }
    _onReady(event) {    
        event.target.pauseVideo();
    }
}
export default BusinessDetailVideo;