import React from "react";
import "../Styles/section2.css"
import Section2CardPhoto from "../images/messi.jpeg"

export const Section2=()=>{
    return(
        <div id="section2">
           <div id="section2Container">
              <div id="section2Up">
                 <div id="upWordsSection2">
                    <h3>New</h3>
                    <h3>Product</h3>
                 </div>
                 <div id="section2Choice">
                     <button className="section2ChoiceBtn">All</button>
                     <button className="section2ChoiceBtn">WWomen's</button>
                     <button className="section2ChoiceBtn">Men's</button>
                     <button className="section2ChoiceBtn">Kid's</button>
                     <button className="section2ChoiceBtn">Associers</button>
                     <button className="section2ChoiceBtn">Cosmetics</button>
                 </div>
              </div>
              <div id="section2Down">
                <div className="section2Card">
                    <img src={Section2CardPhoto} alt="section2 card image"/>
                    <div className="section2CardData">
                       <p>Buttons tweed bazzard</p>
                       <p>$59.0</p>
                    </div>
                    <p id="newTag">New</p>
                </div>
                <div className="section2Card">
                <img src={Section2CardPhoto} alt="section2 card image"/>
                    <div className="section2CardData">
                       <p>Buttons tweed bazzard</p>
                       <p>$59.0</p>
                    </div>
                </div>
                <div className="section2Card">
                <img src={Section2CardPhoto} alt="section2 card image"/>
                    <div className="section2CardData">
                       <p>Buttons tweed bazzard</p>
                       <p>$59.0</p>
                    </div>
                    <p id="outofstockMessage">Out of stock</p>
                </div>
                <div className="section2Card">
                <img src={Section2CardPhoto} alt="section2 card image"/>
                    <div className="section2CardData">
                       <p>Buttons tweed bazzard</p>
                       <p>$59.0</p>
                    </div>
                </div>
                <div className="section2Card">
                <img src={Section2CardPhoto} alt="section2 card image"/>
                    <div className="section2CardData">
                       <p>Buttons tweed bazzard</p>
                       <p>$59.0</p>
                    </div>
                </div>
                <div className="section2Card">
                <img src={Section2CardPhoto} alt="section2 card image"/>
                    <div className="section2CardData">
                       <p>Buttons tweed bazzard</p>
                       <p>$59.0</p>
                    </div>
                </div>
                <div className="section2Card">
                <img src={Section2CardPhoto} alt="section2 card image"/>
                    <div className="section2CardData">
                       <p>Buttons tweed bazzard</p>
                       <p>$59.0</p>
                    </div>
                </div>
                <div className="section2Card">
                <img src={Section2CardPhoto} alt="section2 card image"/>
                    <div className="section2CardData">
                       <p>Buttons tweed bazzard</p>
                       <p>$59.0</p>
                    </div>
                </div>
                <div className="section2Card">
                <img src={Section2CardPhoto} alt="section2 card image"/>
                    <div className="section2CardData">
                       <p>Buttons tweed bazzard</p>
                       <p>$59.0</p>
                    </div>
                </div>
                <div className="section2Card">
                <img src={Section2CardPhoto} alt="section2 card image"/>
                    <div className="section2CardData">
                       <p>Buttons tweed bazzard</p>
                       <p>$59.0</p>
                    </div>
                </div>
              </div>
           </div>
        </div>
    )
}