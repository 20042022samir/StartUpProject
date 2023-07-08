import React from "react";
import GirlPicture from '../images/section1Girl.jpeg'
import '../Styles/Section1.css'

export const Section1=()=>{
    return(
        <section id="section1">
           <div id="section1Container">
             <div id="sectin1Left">
                <div id="section1LeftWords">
                    <h2>Women's fashion</h2>
                    <p>Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore edolore magna aliquapendisse ultrices gravida.</p>
                    <button id="section1ShopBtn">SHOP NOW</button>
                </div>
                <div id="girlPictureContain">
                    <img id="girlPhoto" src={GirlPicture}/ >
                </div>
             </div>
             <div id="section1Right">
                <div className="section1RightPart">
                   <div className="section1Card">
                      <h2>Men Fashion</h2>
                      <p>358 items</p>
                      <button>shop now</button>
                   </div>
                   <div className="section1Card">
                   <h2>Kid's Fashion</h2>
                      <p>273 items</p>
                      <button>shop now</button>
                   </div>
                </div>
                <div className="section1RightPart">
                <div className="section1Card">
                      <h2>Cosmetics</h2>
                      <p>159 items</p>
                      <button>shop now</button>
                   </div>
                   <div className="section1Card">
                      <h2>Accessiores</h2>
                      <p>792 items</p>
                      <button>shop now</button>
                   </div>
                </div>
             </div>
           </div>
        </section>
    )
}