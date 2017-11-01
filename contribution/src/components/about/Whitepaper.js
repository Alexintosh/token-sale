import React, { PureComponent }     from 'react';
import { connect }                  from 'react-redux';
import whitepaper                   from '../../public/img/leverj_white.png';
import yellowpaper                  from '../../public/img/leverj_yellow.png';
import { showCEOModal }             from '../../actions/modalActions'; 

class Whitepaper extends PureComponent {
    render(){
        return (
            <section id="whitepaper" className="about-card">
                <h2 className="sub-header-large"><span>WHITEPAPER & OTHER INFO</span></h2>
                <div className="row pv-20">
                    <div className="col-sm-4 pt-10">
                        <a href="https://leverj.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="white-paper">
                            <div className="white-line">
                                <img src={ whitepaper } alt="Leverj Whitepaper" />
                            </div>
                            Whitepaper (English)
                        </a>
                    </div>
                    <div className="col-sm-4 pt-10 plm-80">
                        <a href="https://blog.leverj.io/" target="_blank" rel="noopener noreferrer" className="white-paper">
                            <div className="white-line">
                                <i className="fa fa-link fs-30 pr-10" aria-hidden="true"></i>
                            </div>
                            Leverj   Blog
                        </a>
                    </div>
                    <div className="col-sm-4 plm-50">
                        <a href="https://github.com/coinpit/token-sale" target="_blank" rel="noopener noreferrer" className="white-paper">
                            <div className="white-line">
                                <i className="fa fa-github fs-30 pr-10" aria-hidden="true"></i>
                            </div>
                             Coinpit repo (old product)
                        </a>
                    </div>
                </div>
                <div className="row pv-20">
                    <div className="col-sm-4 pt-10">
                        <a href="https://leverj.io/LeverjProtocol.pdf" target="_blank" rel="noopener noreferrer" className="white-paper">
                            <div className="white-line">
                                <img src={ yellowpaper } alt="Leverj Yellowpaper" />
                            </div>
                            Yellowpaper (English)
                        </a>
                    </div>
                    <div className="col-sm-4 pt-10 plm-80">
                        <div className="white-paper pointer" onClick={()=> this.props.displayModal()}>
                            <div className="white-line">
                                <i className="fa fa-youtube fs-30 pr-10" aria-hidden="true"></i>
                            </div>
                            CEO Interview
                        </div>
                    </div>
                    <div className="col-sm-4 plm-50">
                        <a href="https://github.com/leverj/token-contracts" target="_blank" rel="noopener noreferrer" className="white-paper">
                            <div className="white-line">
                                <i className="fa fa-github fs-30 pr-10" aria-hidden="true"></i>
                            </div>
                             Leverj repo
                        </a>
                    </div>
                </div>
                <div className="row pv-20">
                    <div className="col-sm-6 pt-10">
                        <a href="https://leverj.io/tc.html" target="_blank" rel="noopener noreferrer" className="white-paper">
                            <div className="white-line">
                                <img src={ whitepaper } alt="Leverj Whitepaper" />
                            </div>
                            Token Sale Terms and Conditions
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        displayModal: () => { dispatch(showCEOModal()) }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Whitepaper)