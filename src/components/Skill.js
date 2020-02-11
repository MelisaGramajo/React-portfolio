import React, { Component } from 'react';

export default class Skills extends Component{

getStringLevel(level){
    return level ===1 ? "principiante" : level ===2 ? "intermedio" : "avanzado";

}

render(){

    const{ name, level}= this.props.info;
    const stringLevel = this.getStringLevel(level);
return(

<div>
    <h3>{name}</h3>
    <p>{stringLevel}</p>
</div>


);

}





}