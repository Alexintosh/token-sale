import React, { PureComponent }     from 'react';
import { connect }                  from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectStepError }              from '../../../selectors';
import { resetFormSteps, changeFormStep }  from '../../../actions/registrationActions';
import ReactGA                      from 'react-ga';
ReactGA.initialize('UA-91770964-1');

class StepError extends PureComponent{
    componentDidMount(){
        ReactGA.pageview('/register-error');
    }
    render(){
        return(
            <div className={this.props.stepError ? '' : 'hide'}>
                <div className="center-text">
                    <p className="modal-p">Oops. There was an error with your submission.</p>
                    <p>Please make sure you are using a unique email and Ethereum address and kindly try again.</p>
                    <div className="pt-20 center-text">
                    <div onClick={(e) => {this.props.resetForms(); ;this.props.changeForms('step1');}} className="btn btn-register-complete">Retry</div>
                </div>
                </div>
            </div>
        )
    }
}

const structuredSelector = createStructuredSelector({
    stepError: selectStepError
})

const mapDispatchToProps = dispatch => {
    return { 
        resetForms: () => {
            dispatch(resetFormSteps())
        },
        changeForms: (formName) => {
            dispatch(changeFormStep(formName))
        }
    }
}

export default connect(
    structuredSelector,
    mapDispatchToProps
)(StepError)