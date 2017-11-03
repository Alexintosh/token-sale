import React, { PureComponent }     from 'react';
import { connect }                  from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectContactEmail,
         selectContactEmailCheck,
         selectDuplicateEmail,
         selectEmailSuccessCheck }       from '../../selectors';
import { updateRegisterFormField,
         emailRegistration }  from '../../actions/registrationActions';

class EmailRegistration extends PureComponent{
    render(){
        return(
            <form onSubmit={(e)=>{e.preventDefault(); this.props.submitEmail()}} id="emailForm">
                <input  type="text"
                        name="contactEmail"
                        id="contactEmail"
                        value={this.props.contactEmail}
                        onChange={this.props.updateRegisterFormField.bind(this)} 
                        placeholder="Get Email Updates About the Sale" />
                <input type="submit" value="Submit" />
                <div id="_contactEmail" className={"warning-text-landing" + (this.props.contactEmailCheck ? ' hidden' : '')}>Please enter your email address</div>
                <div id="_contactEmailSuccess" className={"success-text-landing" + (this.props.emailSuccess ? ' hidden' : '')}>Email has been successfully registered, check you inbox!</div>
            </form>
        )
    }
}
const structuredSelector = createStructuredSelector({
    contactEmail: selectContactEmail,
    contactEmailCheck: selectContactEmailCheck,
    duplicateEmail: selectDuplicateEmail,
    emailSuccess: selectEmailSuccessCheck
})
const mapDispatchToProps = dispatch => {
    return{
        updateRegisterFormField: (e) => {
            dispatch(updateRegisterFormField(e.target.name, e.target.value))
        },
        submitEmail: () => {
            dispatch(emailRegistration())
        }
    }
}
export default connect(
    structuredSelector,
    mapDispatchToProps
)(EmailRegistration)