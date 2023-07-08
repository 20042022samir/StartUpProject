import React from "react";
import instagramlogo from   '../Styles/instagramSection7.png'
import messi from '../images/messi.jpeg'
import HatSection7 from  '../images/hatSection7/jpg'

export const Section7=()=>{
    return(
        <div id="section7" >
           <div id="section7Container">
              <div className="section7Card">
                  <img src={messi} />
                  <p className="instagramAccount">@samir.ismayiloov</p>
              </div>
              <div className="section7Card">
                  <img src={HatSection7} />
              </div>
              <div className="section7Card">
                  <img src={messi} />
              </div>
              <div className="section7Card">
                  <img src={HatSection7} />
              </div>
              <div className="section7Card">
                  <img src={messi} />
              </div>
             
           </div>
        </div>
    )
}