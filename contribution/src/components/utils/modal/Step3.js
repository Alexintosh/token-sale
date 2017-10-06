import React, { PureComponent }     from 'react';
import { connect }                  from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectStep3 }              from '../../../selectors';
import success                      from '../../../public/img/success.png';

class Step3 extends PureComponent{
    render(){
        return(
            <div className={this.props.step3 ? '' : 'hide'}>
                <div className="center-text">
                    <p className="modal-p">You’ve successfully registered! Check your inbox for further details</p>
                    <img src={success} alt="Successful Registration" className="success-img" />
                    <p>You've successfully registered for the LEV Token Sale. You'll now be able to access the sale 72 hours before the public sale starts. Check your email for more information - we'll send you periodic updates leading up to the sale.</p>
                </div>
            </div>
        )
    }
}

const structuredSelector = createStructuredSelector({
    step3: selectStep3
})

export default connect(
    structuredSelector
)(Step3)