import React, { PureComponent } from 'react';
import leverjlogo               from '../../public/img/leverjlogo.svg';

export default class Header extends PureComponent{
    render(){
        return(
            <section id="sale-header">
                <img src={ leverjlogo } alt="LeverJ Logo" className="nav-logo" />
                <div className="nav-header">LEVERJ.IO</div>
                <hr />
                <div className="container">
                    <div className="center-text row">
                        <div className="col-md-10 col-md-offset-1">
                            <h1 className="pt-30">Lever<span className="color-text">J</span> Token Sale</h1>
                            <p className="header-p">The first decentralized cryptocurrency futures exchange to offer margin trading</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}