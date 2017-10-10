import React, { Component }             from 'react';
import { connect }                      from 'react-redux';
import { Modal }                        from 'react-bootstrap';
import { createStructuredSelector }     from 'reselect';
import { submitRegistrationFormFields } from '../../actions/registrationActions';
import * as formSelector                from '../../selectors';
import Step1                            from './modal/Step1';
import Step2                            from './modal/Step2';
import Step3                            from './modal/Step3';
import StepFinal                        from './modal/StepFinal';

class SignupModal extends Component{
    render(){
        return(
            <Modal show={this.props.display} onHide={this.props.hide} backdrop="static">
                <Modal.Header closeButton={true}>
                </Modal.Header>
                <Modal.Body>
                    <form   id="contactFormRegister">
                        <Step1 />
                        <Step2 />
                        <Step3 submit={() => this.props.submitRegistrationFormFields(this.props.history)} />
                        <StepFinal />
                </form>
                </Modal.Body>
            </Modal>
        )
    }
}

const structuredSelector = createStructuredSelector({
    accessId: formSelector.selectAccessId,
    apiToken: formSelector.selectApiToken,
})

const mapDispatchToProps = dispatch => {
   return {
     submitRegistrationFormFields: (history) => {
         dispatch(submitRegistrationFormFields(history))
     }
   }       
}

export default connect(
    structuredSelector,
    mapDispatchToProps
)(SignupModal)
