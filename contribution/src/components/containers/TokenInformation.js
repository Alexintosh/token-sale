import React, { PureComponent } from 'react';
import WhitePaper               from '../token-information/WhitePaper';
import Icons                    from '../token-information/Icons';
import News                     from '../token-information/News';
import Features                 from '../token-information/Features';

export default class TokenInformation extends PureComponent{
    render(){
        return(
            <section id="token-container">
                <Features />
                <News />
                <WhitePaper />
                <Icons />
            </section>
        )
    }
}