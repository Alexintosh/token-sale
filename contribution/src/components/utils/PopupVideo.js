import React, { PureComponent }         from 'react';
import { connect }                      from 'react-redux';
import { Modal }                        from 'react-bootstrap';
import YouTube                          from 'react-youtube' ;
import { createStructuredSelector }     from 'reselect';
import { selectDisplayVideo }           from '../../selectors';
import { hideVideoModal }               from '../../actions/modalActions';

class PopupVideo extends PureComponent{
    render(){
        const opts = {
            height: '100%',
            width: '100%',
            playerVars: { 
                autoplay: 0
            }
        };
        return(
            <Modal show={this.props.display} onHide={() => this.props.hide()} bsSize="large">
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

const structureSelector = createStructuredSelector({
    display: selectDisplayVideo
})

const mapDispatchToProps = dispatch => {
    return {
        hide: () => { dispatch(hideVideoModal()) }
    }
}
export default connect(
    structureSelector,
    mapDispatchToProps
)(PopupVideo)