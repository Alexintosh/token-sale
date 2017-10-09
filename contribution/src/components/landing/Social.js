import React, { PureComponent } from 'react';

export default class Social extends PureComponent{
    render(){
        return(
            <section id="social-tags">
                <div className="landing-social text-left">
                    <a href="https://t.me/joinchat/C-gLzkMqKr1zmoeS-ZQePg" target="_blank" title="Telegram" rel="noopener noreferrer">
                        <i className="fa fa-send"></i>
                    </a>
                    <span className="telegram fs-30">Join the convo on Telegram</span>
                </div>
            </section>
        )
    }
}