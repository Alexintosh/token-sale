import React, { PureComponent } from 'react';
import YouTube                  from 'react-youtube' ;

class LandingVideo extends PureComponent {
    render(){
        const opts = {
            height: '100%',
            width: '100%',
            playerVars: { 
                autoplay: 0
            }
        };
        return(
            <section id="video-js" className="pv-20">
                 <YouTube
                    videoId="0rdwokWlJss"
                    opts={opts}
                    onReady={this._onReady}
                />
            </section>
        )
    }
}
export default LandingVideo;