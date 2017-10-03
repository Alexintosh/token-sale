///Signup Modal selectors
export const selectAccessId = state => state.sale.accessId;
export const selectApiToken = state => state.sale.apiToken;
export const selectRecaptchaUserReponse = state =>  state.sale.recaptchaUserReponse;
export const selectCaptchaPassed = state => state.sale.captchaPassed;


///Signup Modal Input Fields
export const selectContactName = state => state.register.contactName;
export const selectContactEmail = state => state.register.contactEmail;
export const selectContactAddress = state => state.register.contactAddress;
export const selectContactCountry = state => state.register.contactCountry;
export const selectPurchaseSize = state => state.register.purchaseSize;

///Signup Modal Check Fields 
export const selectContactNameCheck = state => state.register.contactNameCheck;
export const selectContactEmailCheck = state => state.register.contactEmailCheck;
export const selectContactAddressCheck = state => state.register.contactAddressCheck;
export const selectContactCountryCheck = state => state.register.contactCountryCheck;
export const selectPurchaseSizeCheck = state => state.register.purchaseSizeCheck;


///Signup Modal Check Boxes
export const selectCountryCheck = state => state.register.countryCheck;
export const selectTermsCheck = state => state.register.termsCheck;
export const selectCountryCheckValidation = state => state.register.countryCheckValidation;
export const selectTermsCheckValidation = state => state.register.termsCheckValidation;


///Email Registration inside of countdown
export const selectContactEmailName = state => state.register.contactEmailName;