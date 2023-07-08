import React from "react";
import GirlSection5 from '../images/section5Girl.jpg'
import '../Styles/section5.css'

export const Section5=()=>{
    return(
        <div id="section5">
          <div id="section5Container">
             <div id="section5Left">
                 <img src={GirlSection5} />
             </div>
             <div id="section5Right">
                <div id="section5RightDiscountWord">
                    <p>Discount</p>
                   <p>Summer 2019</p>
                   <p>Sale 50%</p>
                </div>
                <p>29 days 23 hours 22 min 20 sec</p>
                <button id="section5ShopBtn">Shop Now</button>
             </div>
          </div>
        </div>
    )
}