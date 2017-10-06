import React, { PureComponent }           from 'react';
import { connect }                        from 'react-redux'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { fetchAPIToken }                  from './actions/saleActions';
import { createStructuredSelector }       from 'reselect';
import { selectAccessId }                 from './selectors';

import Thankyou             from './components/thankyou/Thankyou';
import EmailSignup          from './components/thankyou/EmailSignup';
import LandingPage          from './components/containers/LandingPage';
import Footer               from './components/utils/Footer';
import Header               from './components/utils/Header';

class App extends PureComponent {
   componentDidMount(){
     this.props.fetchAPIToken(this.props.accessID);
   }
   render() {
     console.log(this.props.accessId);
    return (
      <Router>
        <div className="globe">
          <Header />
          <div className="min-height">
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/success" component={Thankyou} />
              <Route exact path="/email-signup" component={EmailSignup} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}
const structuredSelector = createStructuredSelector({
    accessId: selectAccessId
})
const mapDispatchToProps = dispatch => {
   return {
     fetchAPIToken: (accessID) => dispatch(fetchAPIToken(accessID)),
   }	   
}
export default connect(
  structuredSelector,
  mapDispatchToProps
)(App)
