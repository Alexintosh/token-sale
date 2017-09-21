import React, { Component }               from 'react';
import { connect }                        from 'react-redux'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SinglePage           from './components/landing/containers/SinglePage';
import Contribute           from './components/sale/containers/Contribute';
import Header               from './components/utils/Header';
import Footer               from './components/utils/Footer';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="pt-50">
          <div className="min-height">
            <Header />
            <Route exact path="/" component={SinglePage} />
            {
                this.props.presale
              ?
                null
              :
                <Route exact path="/contribute" component={Contribute} />
            }
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}
const mapStateToProps = state => {
  return {
    presale: state.sale.presale
  }
}
export default connect(
  mapStateToProps
)(App)