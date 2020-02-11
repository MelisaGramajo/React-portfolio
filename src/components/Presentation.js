import React, {Component} from 'react';

export default class Presentation extends Component {

render(){
const {name, roll, description} = this.props;
    return(
        <div>
            <h1>{name}</h1>
            <h2>{roll}</h2>
            <h3>{description}</h3>
        </div>

    );
}



}

