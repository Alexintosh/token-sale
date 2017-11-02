import React, { PureComponent }     from 'react';
import { connect }                  from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectStep4 }              from '../../../selectors';
import success                      from '../../../public/img/success.png';
import ReactGA                      from 'react-ga';
import ReactPixel                   from 'react-facebook-pixel';

ReactGA.initialize('UA-91770964-1');
ReactPixel.init('1857805211198738');

class StepFinal extends PureComponent{
    componentDidMount(){
        ReactGA.pageview('/register-success');
        ReactPixel.track('PageView');
    }
    render(){
        return(
            <div className={this.props.step4 ? '' : 'hide'}>
            <img height="1" width="1" style={{borderStyle: 'none'}} alt="" src="//www.googleadservices.com/pagead/conversion/840593584/?label=XzohCIe7snYQsOHpkAM&amp;guid=ON&amp;script=0"/>
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