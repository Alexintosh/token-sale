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
                        <div className="col-md-8 col-md-offset-2">
                            <h1 className="pt-30">LEVER<span className="color-text">J</span></h1>
                            <p className="header-p">DECENTRALIZED LEVERAGED TRADING EXCHANGE</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}