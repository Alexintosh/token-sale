import React, { PureComponent } from 'react';
import consensys                from '../../public/img/consensyslogoblack.png';

export default class BottomBar extends PureComponent{
    render(){
        return(
            <section id="bottombar" className={(this.props.stuck ? 'bottombar-social-stuck' : '')}>
                <div className="landing-social-stuck pull-left">
                    <a href="https://t.me/joinchat/C-gLzkMqKr1zmoeS-ZQePg" target="_blank" title="Telegram" rel="noopener noreferrer">
                        <i className="fa fa-send"></i>
                    </a>
                    <span className="fs-25">Join the convo on Telegram</span>
                </div>
                <div className="pull-right">
                    <img src={consensys} alt="Consensys logo" className="bottombar-img" />
                    <div className="pull-right bottombar-text">
                        <p className="mb-0">Supported by</p>
                        <p className="fs-25">ConsenSys</p>
                    </div>
                </div>
            </section>
        )
    }
}