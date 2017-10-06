import React, { PureComponent } from 'react';

export default class Whitepaper extends PureComponent {
    render(){
        return (
            <section id="whitepaper" className="pt-100 h-50">
                <h2 className="sub-header fs-50 pt-30"><span>WHITEPAPER & OTHER INFO</span></h2>
                <div className="row pv-20">
                    <div className="col-sm-6">
                        <a href="https://leverj.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="white-paper">
                            <i className="fa fa-file-pdf-o pr-20"></i>
                            English Whitepaper
                        </a>
                    </div>
                    <div className="col-sm-6">
                        <a href="https://leverj.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="yellow-paper">
                            <i className="fa fa-file-pdf-o pr-20"></i>
                            English Yellowpaper
                        </a>
                    </div>
                </div>
                <div className="row pv-20">
                    <div className="col-sm-6">
                        <a href="https://leverj.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="white-paper">
                            <i className="fa fa-file-pdf-o pr-20"></i>
                            Language1 Whitepaper
                        </a>
                    </div>
                    <div className="col-sm-6">
                        <a href="https://leverj.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="yellow-paper">
                            <i className="fa fa-file-pdf-o pr-20"></i>
                            Language1 Yellowpaper
                        </a>
                    </div>
                </div>
                <div className="row pv-20">
                    <div className="col-sm-6">
                        <a href="https://leverj.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="white-paper">
                            <i className="fa fa-file-pdf-o pr-20"></i>
                            Language2 Whitepaper
                        </a>
                    </div>
                    <div className="col-sm-6">
                        <a href="https://leverj.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="yellow-paper">
                            <i className="fa fa-file-pdf-o pr-20"></i>
                            Language2 Yellowpaper
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}