import React from 'react';


function Hello(){
  const text="Hello world11111";
    const stl={
        color:'red'
    }
    return(
        <div className="first">
            <h1 style={{fontSize:'48px', color:'blue'}}>{text}</h1>
            <h2 style={stl}>It's my first SPA</h2>
        </div>
        )
    
}


export default Hello;