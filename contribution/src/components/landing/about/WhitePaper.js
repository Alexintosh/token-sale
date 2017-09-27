import React, { PureComponent } from 'react';

export default class WhitePaper extends PureComponent{
    render(){
        return (
            <section id="whitepaper">
                <div className="about-card">
                    <h2><span>Whitepaper</span></h2>
                    <a href="https://leverj.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer">Leverj White Paper</a>
                </div>
            </section>
        )
    }
}