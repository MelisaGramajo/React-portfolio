import React, { Component } from 'react';

export default class Skills extends Component{

render(){

    const{ name, level}= this.props.info;
return(

<div>
    <h3>{name}</h3>
    <p>{level}</p>
</div>


);

}





}