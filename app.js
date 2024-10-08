import React from 'react'
import reactDOM from 'react-dom/client'
import Header from './src/Components/Header'
import Body from './src/Components/Body'

const Applayout=()=>{

    return(
        <div>
            <Header />
            <Body />
            
        </div>
    ) 
}

const root= reactDOM.createRoot(document.getElementById("root"))

root.render(<Applayout />)