import React, { PureComponent } from 'react';
import AboutNavigation          from '../about/AboutNavigation';
import Team                     from '../about/Team';
import Section                  from '../section/Section';
import { about }                from '../pages.json';
import uuidv4                   from 'uuid/v4';

export default class About extends PureComponent {
    render(){
        const aboutSection = about.map((section)=>{
            return <Section header={section.section} details={section.details} link={section.link} key={uuidv4()} />
        })
        return(
            <section id="about" className="about-background pv-20">
                <div className="container">
                    <div className="col-container">
                        <div className="col-md-h-4">
                            <AboutNavigation />
                        </div>
                        <div className="col-md-h-8">
                            { aboutSection }
                            <Team />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}