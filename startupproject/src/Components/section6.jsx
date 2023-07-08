import React from "react";
import RedCar from '../images/section6RedCard.png'
import '../Styles/section6.css'
export const Section6 = () => {
  return (
    <div id="section6">
      <div id="section6Container">
        <div className="section6Card">
            <img className="redCarIcon" src={RedCar}/>
            <div className="section6caardData">
               <p>Free Shipping</p>
               <p>For All Over $99</p>
            </div>
        </div>
        <div className="section6Card">
        <img className="redCarIcon" src={RedCar}/>
            <div className="section6caardData">
               <p>Payment Secure</p>
               <p>100% secure payment</p>
            </div>
        </div>
        <div className="section6Card">
        <img className="redCarIcon" src={RedCar}/>
            <div className="section6caardData">
               <p>Online Support</p>
               <p>Dedicated Support</p>
            </div>
        </div>
        <div className="section6Card">
        <img className="redCarIcon" src={RedCar}/>
            <div className="section6caardData">
               <p>Moeny Back Guarantee</p>
               <p>if good have propblems</p>
            </div>
        </div>
      </div>
    </div>
  );
};
