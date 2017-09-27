import React, { Component }     from 'react';
import { connect }              from 'react-redux';
import Supply                   from '../header/Supply';
import Price                    from '../header/Price';
import Countdown                from '../header/Countdown';
import Register                 from '../../stage/Register';

class Header extends Component {
    render(){
        return(
            <section id="landing">
                <div className="container">
                    <div className="col-container">
                        <div className="col-md-h-7">
                            <div className="ph-20">
                                <Price />
                            </div>
                        </div>
                        <div className="col-md-h-5">
                            <div className="ph-20">
                                <Supply />
                            </div>
                        </div>
                    </div>
                    <div className="col-container pb-40">
                        <div className="col-md-h-7">
                            <Countdown  history={this.props.history} />
                        </div>
                        <div className="col-md-h-5">
                            <Register   history={this.props.history} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = state => {
    return {
        register: state.sale.register
    }
}
export default connect(
    mapStateToProps
)(Header)