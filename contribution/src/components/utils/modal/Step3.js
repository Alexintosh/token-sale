import React, { PureComponent }     from 'react';
import { connect }                  from 'react-redux';
import ReCAPTCHA                    from 'react-google-recaptcha';
import { createStructuredSelector } from 'reselect';
import { selectStep3,
         selectPurchaseSize,
         selectPurchaseSizeCheck }  from '../../../selectors';
import { updateRegisterFormField }  from '../../../actions/registrationActions';
import { updateRecaptchaResponse,
         fetchCaptchaResponse,
         setRecaptchaPassed }       from '../../../actions/saleActions';

class Step3 extends PureComponent{
    onRecaptchaChange(value) {
        var userResponse = value;
        this.props.updateRecaptchaResp(userResponse);
        this.props.updateRecaptchaPassed();
        //this.props.fetchCaptchaResponse(userResponse, this.props.accessId, this.props.apiToken);
    }
    render(){
        return(
            <div className={this.props.step3 ? '' : 'hide'}>
                <p className="modal-p center-text">Contribution Details</p>
                <p>Please enter the Ether Wallet Address that you will be making your contribution from or login with MetaMask</p>
                <input  type="text"
                        name="purchaseSize"
                        id="purchaseSize"
                        value={this.props.purchaseSize}
                        onChange={this.props.updateRegisterFormField.bind(this)} 
                        placeholder="Purchase Size [min 25 Ether - max 500 Ether] *" />
                <div id="_purchaseSize" className={"warning-text" + (this.props.purchaseSizeCheck ? ' hidden' : '')}>Please enter an amount between 25 Ether and 500 Ether</div>
                <ReCAPTCHA className="center-text" ref="recaptcha" sitekey="6LcUYDIUAAAAACW2oe-ShyAVAVhuJJ2efpFjWziG" onChange={this.onRecaptchaChange.bind(this)}/>

                <div className="pt-20 center-text">
                    <button onClick={(e) => {e.preventDefault(); this.props.submit()}} className="btn btn-register-sm">COMPLETE REGISTRATION</button>
                </div>
            </div>
        )
    }
}

const structuredSelector = createStructuredSelector({
    step3: selectStep3,
    purchaseSize: selectPurchaseSize,
    purchaseSizeCheck: selectPurchaseSizeCheck,
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
)(Step3)