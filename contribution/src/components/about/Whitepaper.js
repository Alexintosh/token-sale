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
                            English Whitepaper
                        </a>
                    </div>
                    <div className="col-sm-4 pt-10">
                        <a href="https://leverj.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="white-paper">
                            <img src={ yellowpaper } alt="Leverj Yellowpaper" />
                            English Yellowpaper
                        </a>
                    </div>
                    <div className="col-sm-4 pt-10">
                        <a href="https://leverj.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="white-paper">
                            <img src={ yellowpaper } alt="Leverj Yellowpaper" />
                            English Yellowpaper
                        </a>
                    </div>
                </div>
                <div className="row pv-20">
                    <div className="col-sm-4 pt-10">
                        <a href="https://leverj.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="white-paper">
                            <img src={ whitepaper } alt="Leverj Whitepaper" />
                            Language1 Whitepaper
                        </a>
                    </div>
                    <div className="col-sm-4 pt-10">
                        <a href="https://leverj.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="white-paper">
                            <img src={ yellowpaper } alt="Leverj Yellowpaper" />
                            Language1 Yellowpaper
                        </a>
                    </div>
                    <div className="col-sm-4 pt-10">
                        <a href="https://leverj.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="white-paper">
                            <img src={ yellowpaper } alt="Leverj Yellowpaper" />
                            Language1 Yellowpaper
                        </a>
                    </div>
                </div>
                <div className="row pv-20">
                    <div className="col-sm-4 pt-10">
                        <a href="https://leverj.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="white-paper">
                            <img src={ whitepaper } alt="Leverj Whitepaper" />
                            Language2 Whitepaper
                        </a>
                    </div>
                    <div className="col-sm-4 pt-10">
                        <a href="https://leverj.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="white-paper">
                            <img src={ yellowpaper } alt="Leverj Yellowpaper" />
                            Language2 Yellowpaper
                        </a>
                    </div>
                    <div className="col-sm-4 pt-10">
                        <a href="https://leverj.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="white-paper">
                            <img src={ yellowpaper } alt="Leverj Yellowpaper" />
                            Language2 Yellowpaper
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}