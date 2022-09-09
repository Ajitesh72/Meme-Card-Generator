import React from "react"

export default function header(props){
  
    return(
    <nav className={props.darkmode?"dark":""}>
      <div className="header">
        
      <img src="public\meme_afridi.jpg" alt="" className="afridi_image"/>
      
       <h1 className="title">Cards Generator</h1>

       <div className="toggler">
        <p className="toggler_light">Light</p>
       
        <div className="toggler_slider" onClick={props.togglerdarkmode}>
          <div className="toggler_slider_circle"></div>
        </div>
        <p className="toggler_dark">Dark</p>
       </div>
      </div>
   </nav>
      
    )
  }