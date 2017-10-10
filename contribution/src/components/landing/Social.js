import React, { PureComponent } from 'react';
import join                     from '../../public/img/join_telegram.png'; 

export default class Social extends PureComponent{
    render(){
        return(
                <div className="landing-social text-left">
                    <a href="https://t.me/joinchat/C-gLzkMqKr1zmoeS-ZQePg" target="_blank" title="Telegram" rel="noopener noreferrer">
                        <img src={join} alt="Join Telegram" className="telegram-img" />
                        <span className="telegram">Join the convo on Telegram</span>
                    </a>
                </div>
        )
    }
}