import React, { PureComponent } from 'react';
import { team }                 from '../../pages.json';
import uuidv4                   from 'uuid/v4';

export default class Team extends PureComponent {
    render(){
        const teamList = team.map((person)=>{
            return <div className="col-md-3" key={uuidv4()}><h3>{person.name}</h3><p>{person.position}</p><p>{person.secondaryPosition}</p></div>
        })
        return(
            <section id="team">                
                <div className="about-card">
                    <h2><span>Team</span></h2>
                    <div className="row">
                        {teamList}
                    </div>
                </div>
            </section>
        )
    }
}