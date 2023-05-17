import React from "react";
import "./Sig.css"


export default function Signup(){
    return(
        <div className="Signup_Hero_text">
            <div>
                <span className='Signup_Heading_text'>
                    <h1>Signup for early  <br />access offer!</h1>
                    <p>Vestibulum ac diam sit amet quam vehicula elementum <br />sed sit amet dui. Nulla quis lorem ut libero malesuada <br />feugiat. Quisque velit nisi, pretium ut lacinia in, <br />elementum id enim</p>
                    
                    <button>Learn More</button>
                </span>
            </div>
            <div className="Signup_image_container">
                <img 
                src={require("./Image.png")} alt="Logo" />
            </div>
        </div>
    )

}