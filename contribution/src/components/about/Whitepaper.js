import React, { PureComponent } from 'react';
import whitepaper               from '../../public/img/leverj_white.png'
import yellowpaper              from '../../public/img/leverj_yellow.png'

export default class Whitepaper extends PureComponent {
    render(){
        return (
            <section id="whitepaper" className="about-card">
                <h2 className="sub-header-large"><span>WHITEPAPER & OTHER INFO</span></h2>
                <div className="row pv-20">
                    <div className="col-sm-4 pt-10">
                        <a href="https://leverj.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="white-paper">
                            <img src={ whitepaper } alt="Leverj Whitepaper" />
                            Whitepaper
                        </a>
                    </div>
                    <div className="col-sm-4 pt-10">
                        <a href="https://blog.leverj.io/" target="_blank" rel="noopener noreferrer" className="white-paper">
                            <i className="fa fa-link fs-30 pr-10" aria-hidden="true"></i> Blog
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <a href="https://github.com/coinpit/token-sale" target="_blank" rel="noopener noreferrer" className="white-paper">
                            <i className="fa fa-github fs-30 pr-10" aria-hidden="true"></i>
                             GitHub repo (Coinpit)
                        </a>
                    </div>
                </div>
                <div className="row pv-20">
                    <div className="col-sm-4 pt-10">
                        <a href="https://leverj.io/LeverjProtocol.pdf" target="_blank" rel="noopener noreferrer" className="white-paper">
                            <img src={ yellowpaper } alt="Leverj Yellowpaper" />
                            Technical Protocol Paper
                        </a>
                    </div>
                    <div className="col-sm-4 pt-10">
                        <a href="https://www.youtube.com/watch?v=miJ4zz87VIs" target="_blank" rel="noopener noreferrer" className="white-paper">
                            <i className="fa fa-link fs-30 pr-10" aria-hidden="true"></i> CEO Interview
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <a href="https://github.com/leverj/token-sale" target="_blank" rel="noopener noreferrer" className="white-paper">
                            <i className="fa fa-github fs-30 pr-10" aria-hidden="true"></i>
                             GitHub repo (Leverj)
                        </a>
                    </div>
                </div>
                <div className="row pv-20">
                    <div className="col-sm-4 pt-10">
                        <a href="https://leverj.io/tc.html" target="_blank" rel="noopener noreferrer" className="white-paper">
                            <i className="fa fa-link fs-30 pr-10" aria-hidden="true"></i> Terms and Conditions
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}