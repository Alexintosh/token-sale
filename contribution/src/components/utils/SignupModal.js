import React, { PureComponent }             from 'react';
import { connect }                      from 'react-redux';
import { Modal }                        from 'react-bootstrap';
import { createStructuredSelector }     from 'reselect';
import Step1                            from './modal/Step1';
import Step2                            from './modal/Step2';
import Step3                            from './modal/Step3';
import StepFinal                        from './modal/StepFinal';
import StepError                        from './modal/StepError';
import { submitRegistrationFormFields } from '../../actions/registrationActions';
import { hideRegistrationModal }        from '../../actions/modalActions';
import * as formSelector                from '../../selectors';

class SignupModal extends PureComponent{
    render(){
        return(
            <Modal show={this.props.display} onHide={() => this.props.hide()} backdrop="static">
                <Modal.Header closeButton={true}>
                </Modal.Header>
                <Modal.Body>
                    <form   id="contactFormRegister">
                        { this.props.step1 ? <Step1 /> : '' }
                        { this.props.step2 ? <Step2 /> : '' }
                        { this.props.step3 ? <Step3 submit={() => this.props.submitRegistrationFormFields()} /> : '' }
                        { this.props.step4 ? <StepFinal /> : '' }
                        { this.props.stepError ? <StepError /> : '' }
                </form>
                </Modal.Body>
            </Modal>
        )
    }
}

const structuredSelector = createStructuredSelector({
    step1: formSelector.selectStep1,
    step2: formSelector.selectStep2,
    step3: formSelector.selectStep3,
    step4: formSelector.selectStep4,
    stepError: formSelector.selectStepError,
    accessId: formSelector.selectAccessId,
    apiToken: formSelector.selectApiToken,
    display:  formSelector.selectDisplaySignup
})

const mapDispatchToProps = dispatch => {
   return {
     submitRegistrationFormFields: () => { dispatch(submitRegistrationFormFields()) },
     hide: () => { dispatch(hideRegistrationModal()) }
   }       
}

export default connect(
    structuredSelector,
    mapDispatchToProps
)(SignupModal)
