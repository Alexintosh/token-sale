import React, { PureComponent } from 'react';
import { connect }              from 'react-redux'
import Overview                 from '../about/Overview';
import Information              from '../about/Information';
import Contribute               from '../about/Contribute';
import Whitepaper               from '../about/Whitepaper';
import Audit                    from '../about/Audit';
import FAQ                      from '../about/FAQ';
import StickyNavigation         from '../about/StickyNavigation';
import Whitelist                from '../about/Whitelist';
import { showBottomImage,
         hideBottomImage }      from '../../actions/stickyActions';

class About extends PureComponent {
    componentDidMount(){
        window.addEventListener('scroll', ()=>{
            var domReact = this.refs.aboutContainer.getBoundingClientRect();
            if(domReact.bottom <= 1100){
                this.props.showBottom();
            } else {
                this.props.hideBottom();
            }
        })
    }
    render(){
        return(
            <section id="about" className="about-background" ref="aboutContainer">
                <div className="container-fluid">
                    <StickyNavigation />
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

const mapDispatchToProps = dispatch => {
    return {
        showBottom: () => { dispatch(showBottomImage()) },
        hideBottom: () => { dispatch(hideBottomImage()) }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(About);