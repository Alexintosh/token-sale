import React, { PureComponent }     from 'react';
import { connect }                  from 'react-redux';
import { showRegistrationModal }    from '../../actions/modalActions';

class MobileFooter extends PureComponent{
    render(){
        return(
            <div className="mobile-footer">
                <div className="center-text">
                    <button onClick={()=> this.props.displayRegistrationModal()} className="btn btn-footer">REGISTER</button>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        displayRegistrationModal: () => { dispatch(showRegistrationModal()) }
    }
}
export default connect(
    null,
    mapDispatchToProps
)(MobileFooter)