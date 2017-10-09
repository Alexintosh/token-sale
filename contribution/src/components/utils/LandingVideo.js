import React, { PureComponent } from 'react';
import YouTube                  from 'react-youtube' ;

class LandingVideo extends PureComponent {
    render(){
        const opts = {
            height: '500',
            width: '100%',
            playerVars: { 
                autoplay: 0
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
}
export default LandingVideo;