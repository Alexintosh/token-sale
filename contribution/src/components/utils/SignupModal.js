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
                        <Step1 />
                        <Step2 />
                        <Step3 submit={() => this.props.submitRegistrationFormFields()} />
                        <StepFinal />
                        <StepError />
                </form>
                </Modal.Body>
            </Modal>
        )
    }
}

const structuredSelector = createStructuredSelector({
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
