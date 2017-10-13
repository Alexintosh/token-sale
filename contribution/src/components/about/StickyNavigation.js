import React, { PureComponent } from 'react';
import TopBar                   from './TopBar';
import AboutNavigation          from './AboutNavigation';

export default class StickyNavigation extends PureComponent{
    constructor(){
        super();
        this.state={
            stuck: false
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', ()=>{
            var domReact = this.refs.stickyNav.getBoundingClientRect();
            if(domReact.top <= 0){
                if(!this.state.stuck){
                    this.setState({
                        stuck: true
                    })
                }
            } else if(this.state.stuck) {
                this.setState({
                    stuck: false
                })
            }
        })
    }
    render(){
        return(
            <div>
                <section id="stickyNav" ref="stickyNav" className="pos-absolute hide-on-xs">
                    <TopBar stuck={this.state.stuck} />
                    <AboutNavigation stuck={this.state.stuck} bottom={this.props.bottom} />
                </section>
            </div>
        )
    }
}