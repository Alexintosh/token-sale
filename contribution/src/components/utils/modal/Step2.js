import React, { PureComponent }     from 'react';
import { connect }                  from 'react-redux';
import ReCAPTCHA                    from 'react-google-recaptcha';
import { createStructuredSelector } from 'reselect';
import { selectContactAddress,
         selectContactMEWAddress,
         selectContactAddressCheck,
         selectStep2,
         selectPurchaseSize,
         selectPurchaseSizeCheck }  from '../../../selectors';
import { updateRegisterFormField }  from '../../../actions/registrationActions';
import { updateRecaptchaResponse,
         fetchCaptchaResponse,
         setRecaptchaPassed }     from '../../../actions/saleActions';
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
                <p className="modal-p center-text">Contribution Details</p>
                <p>Please enter the Ether Wallet Address that you will be making your contribution from or login with MetaMask</p>
                <input  type="text"
                        name="purchaseSize"
                        id="purchaseSize"
                        value={this.props.purchaseSize}
                        onChange={this.props.updateRegisterFormField.bind(this)} 
                        placeholder="Purchase Size [min 25 Ether - max 500 Ether] *" />
                <div id="_purchaseSize" className={"warning-text" + (this.props.purchaseSizeCheck ? ' hidden' : '')}>Please enter an amount between 25 Ether and 500 Ether</div>
                
                <div className="pt-20">
                    <img src={mew} className="contribute-details-img" alt="My Ether Wallet" />
                    <span className="fs-20 font-bold pt-10 pl-20">My Ether Wallet</span>
                </div>
                <input  type="text"
                        name="contactMEWAddress"
                        id="contactMEWAddress"
                        value={this.props.contactMEWAddress}
                        onChange={this.props.updateRegisterFormField.bind(this)} 
                        placeholder="Ethereum Address *" />
                <div id="_contactMEWAddress" className={"warning-text" + (this.props.contactAddressCheck ? ' hidden' : '')}>Please enter a valid ethereum address</div>
                <div className="center-text pv-10 fs-20 font-bold">
                    - or -
                </div>
                <div className="pt-10">
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

                <p>Don't have MetaMask or MyEtherWallet yet? <a href={pdf} target="_blank" rel="noopener noreferrer">Click Here</a></p>

                <ReCAPTCHA className="center-text" ref="recaptcha" sitekey="6LcUYDIUAAAAACW2oe-ShyAVAVhuJJ2efpFjWziG" onChange={this.onRecaptchaChange.bind(this)}/>
                
                <div className="pt-20 center-text">
                    <button onClick={(e) => {e.preventDefault(); this.props.submit()}} className="btn btn-register-sm">COMPLETE REGISTRATION</button>
                </div>
            </div>
        )
    }
}
const structuredSelector = createStructuredSelector({
    contactAddress: selectContactAddress,
    contactAddressCheck: selectContactAddressCheck,
    purchaseSize: selectPurchaseSize,
    purchaseSizeCheck: selectPurchaseSizeCheck,
    contactMEWAddress: selectContactMEWAddress,
    step2: selectStep2
})

const mapDispatchToProps = dispatch => {
   return {
     updateRegisterFormField: (e) => {
         dispatch(updateRegisterFormField(e.target.name, e.target.value))
     },
     updateRecaptchaResp: (userResponse) => {
        dispatch(updateRecaptchaResponse(userResponse));
     },
     fetchCaptchaResponse: (userResponse, accessID, apiToken) => {
         dispatch(fetchCaptchaResponse(userResponse, accessID, apiToken))
     },
     updateRecaptchaPassed: ()=>{
        dispatch(setRecaptchaPassed(true));
     }
   }       
}

export default connect(
    structuredSelector,
    mapDispatchToProps
)(Step2)