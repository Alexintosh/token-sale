import React, { PureComponent }         from 'react';
import { connect }                      from 'react-redux';
import { createStructuredSelector }     from 'reselect';
import { hideCEOModal }                 from '../../actions/modalActions';
import { Modal }                        from 'react-bootstrap';
import YouTube                          from 'react-youtube' ;
import { selectDisplayCeoVideo }        from '../../selectors';

class CeoVideo extends PureComponent{
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
                        videoId="miJ4zz87VIs"
                        opts={opts}
                        onReady={this._onReady}
                    />
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}

const structuredSelector = createStructuredSelector({
    display: selectDisplayCeoVideo
})

const mapDispatchToProps = dispatch => {
    return {
        hide: () => { dispatch(hideCEOModal())}
    }
}

export default connect (
    structuredSelector,
    mapDispatchToProps
)(CeoVideo)

