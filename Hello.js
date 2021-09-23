import React, { useState } from 'react'

function Hello(){
    const a=useState("Hello");

    const updats=()=>{
        a[1]("Welcome")
    }

    return(
        <div>
            <h1>{a[0]}</h1>
            <button onClick={updats}>Change</button>
        </div>
    )
}

export default Hello;