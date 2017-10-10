import React, { PureComponent }         from 'react';
import { Modal }                        from 'react-bootstrap';
import YouTube                  from 'react-youtube' ;

export default class PopupModal extends PureComponent{
    render(){
        const opts = {
            height: '100%',
            width: '100%',
            playerVars: { 
                autoplay: 0
            }
        };
        return(
            <Modal show={this.props.display} onHide={this.props.hide} bsSize="large">
                <Modal.Body>
                    <div className="popup-video">
                    <YouTube
                        videoId="XKzOqrbvsKQ"
                        opts={opts}
                        onReady={this._onReady}
                    />
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}