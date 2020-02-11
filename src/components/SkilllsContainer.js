import React, { Component } from 'react';
import Skill from './Skill';
import Skills from './Skill';

export default class SkillsContainer extends Component{

render(){
const {skills} = this.props;
return(

<div>
    {

        skills.map((skill)=> <Skill info={skill} key={skill.name}/>)
    }

</div>


);

}





}