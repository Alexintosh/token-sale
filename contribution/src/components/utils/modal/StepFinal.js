import React, { PureComponent }     from 'react';
import { connect }                  from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectStep4 }              from '../../../selectors';
import success                      from '../../../public/img/success.png';
import ReactGA                      from 'react-ga';
ReactGA.initialize('UA-91770964-1');

class StepFinal extends PureComponent{
    componentDidMount(){
      ReactGA.ga('send', 'pageview', '/register-success');
    }
    render(){
        return(
            <div className={this.props.step4 ? '' : 'hide'}>
                <div className="center-text">
                    <p className="modal-p">You’ve successfully registered! You should receive an e-mail within 24 hrs</p>
                    <img src={success} alt="Successful Registration" className="success-img" />
                    <p>You've successfully registered for the LEV Token Sale. You'll now be able to access the sale 72 hours before the public sale starts. Check your email for more information - we'll send you periodic updates leading up to the sale.</p>
                </div>
            </div>
        )
    }
}

const structuredSelector = createStructuredSelector({
    step4: selectStep4
})

export default connect(
    structuredSelector
)(StepFinal)