import React, { Component }     from 'react';
import { connect }              from 'react-redux';
import Supply                   from '../header/Supply';
import Price                    from '../header/Price';
import Sale                     from '../../stage/Sale';
import Register                 from '../../stage/Register';
import { information }          from '../../pages.json';

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
                                {
                                        this.props.register
                                    ?
                                        <Register   name={information.tokenName}
                                                    getShare={() => console.log("here")}
                                                    history={this.props.history} />
                                    :
                                        <Sale   name={information.tokenName}
                                                getShare={() => console.log("here")} />
                                }
                            </div>
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