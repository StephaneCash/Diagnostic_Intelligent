import React from 'react'
import Menu from './Menu'
import UpContainer from './UpContainer'

function Configuration() {

    const a = () => {
        alert("hhh")
    }
    return (
        <div>
            <UpContainer></UpContainer>
            <Menu></Menu>
            <div className="centerData">
                <button onclick={a}className="btn btn mt-5" style={{ backgroundColor:"black", color:"white"}}>Dark</button> <></>
                <button className="btn btn mt-5" style={{ border:"1px solid silver", color:"black"}}>Light</button>
            </div>
        </div>
    )
}

export default Configuration
