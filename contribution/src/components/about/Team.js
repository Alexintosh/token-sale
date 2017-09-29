import React, { PureComponent } from 'react';
import { team }                 from '../pages.json';
import uuidv4                   from 'uuid/v4';

export default class Team extends PureComponent {
    render(){
        const teamList = team.map((person)=>{
            return <div className="col-md-4" key={uuidv4()}><div className="team-card"><img src={require('../../public/img/'+person.image)} alt={person.name}/><div className="information"><h3>{person.name}</h3><p>{person.about}</p></div></div></div>
        })
        return(
            <section id="team">                
                <div className="about-card">
                    <h2><span>Team</span></h2>
                    <div className="row pt-40">
                        {teamList}
                    </div>
                </div>
            </section>
        )
    }
}