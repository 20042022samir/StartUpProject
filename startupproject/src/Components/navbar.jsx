import React from "react";
import '../Styles/NavbarStyle.css';


export const Navbar=()=>{
    return( 
        <header>
            <nav id="navbarContainer">
              <div id="NavbarLeft">
                 <h1>Ashion</h1>
              </div>
              <div id="navbarMiddle">
                 <a href="#">HOME</a>
                 <a href="#">WOMEN'S</a>
                 <a href="#">MEN'S</a>
                 <a href="#">SHOP</a>
                 <a href="#">PAGES</a>
                 <a href="#">BLOG</a>
                 <a href="#">CONTACT</a>
              </div>
              <div id="navbarRight">
                  <div id="navbarRightRight">
                     <button id="loginBtn">Log In</button>
                     <p>/</p>
                     <button id="RegiterBtn">Register</button>
                  </div>
                  <div id="navbarRightLeft">
                      <button id="SearchBtn"><i class="fa-solid fa-magnifying-glass"></i></button>
                      <button id="LikedBtn"><i class="fa-regular fa-heart"></i></button>
                      <button id="ListBtn"><i class="fa-solid fa-list-dropdown"></i></button>
                  </div>
              </div>
            </nav>
        </header>
    );
}