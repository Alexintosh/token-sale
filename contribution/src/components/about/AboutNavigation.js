import React, { PureComponent } from 'react';
import { aboutNavigation }      from '../pages.json';
import uuidv4                   from 'uuid/v4';

export default class AboutNavigation extends PureComponent {
    render(){
        const nav = aboutNavigation.map((list)=>{
            return <li key={uuidv4()}><a href={"#"+list.link}>{list.title}</a></li>
        })
        return(
            <section id="about-nav">
                <h2 className="mt-0">About this project</h2>
                <ul className="about-list">
                    { nav }
                </ul>
            </section>
        )
    }
}