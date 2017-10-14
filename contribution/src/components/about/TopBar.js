import React, { PureComponent }     from 'react';
import { connect }                  from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectStuck }              from '../../selectors';
import TimerSmall                   from './TopBar/TimerSmall';
import { showRegistrationModal }    from '../../actions/modalActions';

class TopBar extends PureComponent{
    render(){
        return(
            <section id="topbar" className={(this.props.stuck ? 'topbar-stuck' : 'topbar-top')}>
                <div className="nav-header-stuck">LEVER<span className="color-text">J</span></div>
                <div className="pull-right">
                    <TimerSmall />
                    <div className="topbar-register pull-right">
                        <div onClick={()=> this.props.displayRegistrationModal()} className="btn btn-register-sm">REGISTER</div>
                    </div>
                </div>
            </section>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return { 
        displayRegistrationModal: () => { dispatch(showRegistrationModal()) }
    }
}
const structuredSelector = createStructuredSelector({
    stuck: selectStuck
})
export default connect(
    structuredSelector,
    mapDispatchToProps
)(TopBar);