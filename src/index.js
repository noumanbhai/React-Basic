import React from 'react';
import ReeactDom from 'react-dom'
  
// function Name(){
// return <p>This is my first code.</p>;
// }

const Name=()=>{



    
    return (
        <div>
            <Naam/>
            <Person/>
    </div>
    )}
const Naam = () =><h3>Nouman</h3>;
const Person=()=> 
{
   return <h4>I am a component</h4>
}


ReeactDom.render(<Name/>,document.getElementById('root'));