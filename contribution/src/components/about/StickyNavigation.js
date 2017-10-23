import React, { PureComponent } from 'react';
import { connect}               from 'react-redux';
import { pageStuck,
         pageUnstuck }          from '../../actions/stickyActions';
import TopBar                   from './TopBar';
import AboutNavigation          from './AboutNavigation';

class StickyNavigation extends PureComponent{
    componentDidMount(){
        window.addEventListener('scroll', ()=>{
            var domReact = this.refs.stickyNav.getBoundingClientRect();
            if(domReact.top <= 0){
                this.props.stickPage()
            } else {
                this.props.unstickPage()
            }
        })
    }
    render(){
        return(
            <div>
                <section id="stickyNav" ref="stickyNav" className="pos-absolute hide-on-xs">
                    <TopBar />
                    <AboutNavigation />
                </section>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        stickPage: () => { dispatch(pageStuck()) },
        unstickPage: () => { dispatch(pageUnstuck()) }
    }
}
export default connect(
    null,
    mapDispatchToProps
)(StickyNavigation)