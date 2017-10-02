import React, { PureComponent } from 'react';

export default class Social extends PureComponent{
    render(){
        return(
            <section id="social-tags">
                <ul className="landing-social">
                    <li>
                        <a href="https://www.reddit.com/r/Leverj/" target="_blank" title="Reddit" rel="noopener noreferrer">
                            <i className="fa fa-reddit"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/Leverj_io" target="_blank" title="Twitter" rel="noopener noreferrer">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company-beta/24997541/" target="_blank" title="LindedIn" rel="noopener noreferrer">
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UC9oq9zNCn5vFuWwtLuNLUfw" target="_blank" title="YouTube" rel="noopener noreferrer">
                            <i className="fa fa-youtube"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/joinchat/C-gLzkMqKr1zmoeS-ZQePg" target="_blank" title="Telegram" rel="noopener noreferrer">
                            <i className="fa fa-send"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/coinpit" target="_blank" title="Github" rel="noopener noreferrer">
                        <i className="fa fa-github"></i>
                        </a>
                    </li>
                </ul>
            </section>
        )
    }
}