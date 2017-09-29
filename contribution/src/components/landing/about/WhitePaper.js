import React, { PureComponent } from 'react';

export default class WhitePaper extends PureComponent{
    render(){
        return (
            <section id="whitepaper" className="whitepaper-background">
                <div className="container">
                    <div className="center-text pb-20">
                        <h2>Want to learn more?</h2>
                        <a href="https://leverj.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-white-1">Download Whitepaper</a>
                        
                        <a href="https://leverj.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="whitepaper-link"><span>[Simplified Chinese]</span></a>
                        <a href="https://leverj.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="whitepaper-link"><span>[Japanese]</span></a>
                        <a href="https://leverj.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="whitepaper-link"><span>[Russian]</span></a>
                    </div>
                </div>
            </section>
        )
    }
}