import React, { PureComponent } from 'react';
import { Link }                 from 'react-router-dom';

export default class Sale extends PureComponent {
    render(){
        return (
            <section id="sale">
                <h4>Contribute to the {this.props.name} crowd sale</h4>
                <Link to="/contribute" className="btn btn-color btn-full">Contribute</Link>
                <div className="row pv-20">
                    <div className="col-md-6 col-sm-12">
                        <a href="#contribute" className="btn btn-white btn-full-1">How to contribute?</a>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <button onClick={() => this.props.getShare()} className="btn btn-white btn-full-1">Share</button>
                    </div>
                </div>
            </section>
        )
    }
}