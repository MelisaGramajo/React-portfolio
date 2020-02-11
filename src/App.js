import React from 'react';

import './App.css';
import Presentation from './components/Presentation';
import SkilllsContainer from './components/SkilllsContainer';


const name = "Gramajo, Melisa Rocio"
const roll = "Tester and Frontend Developer"
const description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const mySkills = [
  {
    name: "HTML",
    level: 3
  },
  {
    name: "CSS",
    level: 3
  
  },
{
    name: "JavaScript",
    level: 2}


];







function App() {
  
return (
    <div className="App">
      <header className="App-header">
        <Presentation 
        name={name}
        roll={roll}
        description={description}
        />

        <SkilllsContainer skills={mySkills} />
        


      </header>
    </div>
  );
}

export default App;
