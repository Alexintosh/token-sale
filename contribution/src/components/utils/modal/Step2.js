import React, { PureComponent }     from 'react';
import { connect }                  from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectContactAddress,
         selectContactAddressCheck,
         selectStep2,
         selectDuplicateAddress }   from '../../../selectors';
import { updateRegisterFormField,
         validateAddressField }     from '../../../actions/registrationActions';
import metamask                     from '../../../public/img/metamask.png';
import mew                          from '../../../public/img/mew.png';
import pdf                          from '../../../public/documents/LEV_Token_Purchase_Instructions.pdf'

class Step2 extends PureComponent{
    onRecaptchaChange(value) {
        var userResponse = value;
        this.props.updateRecaptchaResp(userResponse);
        this.props.updateRecaptchaPassed();
        //this.props.fetchCaptchaResponse(userResponse, this.props.accessId, this.props.apiToken);
    }
    render(){
        return(
            <div className={this.props.step2 ? '' : 'hide' }>
                <p className="modal-p center-text">Enter Ether Wallet Address</p>
                <p>The Leverj public sale will only accept contributions from MyEtherWallet or MetaMask. Please only add a wallet address from one of those 2 applications, otherwise you won't be able to make a contribution.</p>                
                <div className="pt-20">
                    <img src={mew} className="contribute-details-img" alt="My Ether Wallet" />
                    <span className="fs-20 font-bold pt-10 ph-20">My Ether Wallet</span>
                    <img src={metamask} className="contribute-details-img" alt="MetaMask" />
                    <span className="fs-20 font-bold pl-20">MetaMask</span>
                </div>
                <input  type="text"
                        name="contactAddress"
                        id="contactAddress"
                        value={this.props.contactAddress}
                        onChange={this.props.updateRegisterFormField.bind(this)} 
                        placeholder="Ethereum Address *" />
                <div id="_contactAddress" className={"warning-text" + (this.props.contactAddressCheck ? ' hidden' : '')}>Please enter a valid ethereum address</div>
                <div id="_contactDupAddress" className={"warning-text" + (this.props.duplicateAddress ? ' hidden' : '')}>This ethereum address has already been registered</div>

                <p>Don't have MetaMask or MyEtherWallet yet? <a href={pdf} target="_blank" rel="noopener noreferrer">Click Here</a></p>
                
                <div className="pt-20 center-text">
                    <div onClick={(e) => {e.preventDefault(); this.props.validateAddress()}} className="btn btn-register-next">NEXT</div>
                </div>
            </div>
        )
    }
}
const structuredSelector = createStructuredSelector({
    contactAddress: selectContactAddress,
    contactAddressCheck: selectContactAddressCheck,
    step2: selectStep2,
    duplicateAddress : selectDuplicateAddress
})

const mapDispatchToProps = dispatch => {
   return {
     updateRegisterFormField: (e) => {
         dispatch(updateRegisterFormField(e.target.name, e.target.value))
     },
     validateAddress: () =>{
         dispatch(validateAddressField());
     }
   }       
}

export default connect(
    structuredSelector,
    mapDispatchToProps
)(Step2)