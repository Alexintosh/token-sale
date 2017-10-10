import React, { Component } from 'react';
import Overview                 from '../about/Overview';
import Information              from '../about/Information';
import Contribute               from '../about/Contribute';
import Whitepaper               from '../about/Whitepaper';
import Audit                    from '../about/Audit';
import FAQ                      from '../about/FAQ';
import StickyNavigation         from '../about/StickyNavigation';
import Whitelist                from '../about/Whitelist';

export default class About extends Component {
    constructor(){
        super();
        this.state={
            bottom: false
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', ()=>{
            var domReact = this.refs.aboutContainer.getBoundingClientRect();
            console.log(domReact.bottom);
            if(domReact.bottom <= 1100){
                this.setState({
                    bottom: true
                })
            } else {
                this.setState({
                    bottom: false
                })
            }
        })
    }
    render(){
        return(
            <section id="about" className="about-background" ref="aboutContainer">
                <div className="container-fluid">
                    <StickyNavigation history={this.props.history} bottom={this.state.bottom} />
                    <div className="row">
                        <div className="col-sm-9 col-sm-offset-3">
                            <div className="row">
                                <div className="col-sm-11">
                                    <Overview />
                                    <Whitelist />
                                    <Information />
                                    <Contribute />
                                    <Whitepaper />
                                    <Audit />
                                    <FAQ />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}