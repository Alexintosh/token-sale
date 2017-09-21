import React, { PureComponent } from 'react';

export default class Press extends PureComponent{
    render(){
        return(
            <section id="press">
                <div className="about-card">
                    <h2><span>Press</span></h2>
                    <div className="press-card">
                        <span>HuffinPost: </span><a href="https://github.com">The Visionary Disrupting Filmmaking through Cryptocurrency</a>
                        <br />
                        <span>New York Times: </span><a href="https://github.com">The Visionary Disrupting Filmmaking through Cryptocurrency</a>
                    </div>
                </div>
            </section>
        )
    }
}