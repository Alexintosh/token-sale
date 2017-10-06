import React, { PureComponent }           from 'react';
import { connect }                        from 'react-redux'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { fetchAPIToken }                  from './actions/saleActions';
import { createStructuredSelector }       from 'reselect';
import { selectAccessId }                 from './selectors';

import LandingPage          from './components/containers/LandingPage';
import Footer               from './components/utils/Footer';
import Header               from './components/utils/Header';

class App extends PureComponent {
   componentDidMount(){
     this.props.fetchAPIToken(this.props.accessId);
   }
   render() {
    return (
      <Router>
        <div className="globe">
          <Header />
          <div className="min-height">
              <Route path="/" component={LandingPage} />
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
