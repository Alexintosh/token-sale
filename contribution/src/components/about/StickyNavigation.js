import React, { PureComponent } from 'react';
import TopBar                   from './TopBar';
import AboutNavigation          from './AboutNavigation';
import BottomBar                from './BottomBar';

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
            console.log(document.body.scrollTop, domReact.top)
            if(domReact.top <= 0){
                this.setState({
                    stuck: true
                })
            } else {
                this.setState({
                    stuck: false
                })
            }
        })
    }
    render(){
        return(
            <section id="stickyNav" ref="stickyNav" className="pos-absolute hide-on-xs">
                <TopBar stuck={this.state.stuck} history={this.props.history} />
                <AboutNavigation stuck={this.state.stuck} />
                <BottomBar stuck={this.state.stuck} />
            </section>
        )
    }
}