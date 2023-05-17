import React from "react";
import "./Hs.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Herosection(){
    return(
        <div className="Hero_text">
            <span className='Heading_text'>
                <h1>Manage and track all your Work <br />Inside one app</h1>
                <p>Pellentesque in ipsum id orci porta dapibus. Vestibulum <br />ante ipsum primis in faucibus orci luctus et. Pellentesque <br />in ipsum id orci porta dapibus</p>
                <button type="button" class="btn btn-primary btn-lg">Learn More</button>
            </span>
            <div className="image_container">
                <img 
                src={require("./Hero Image.png")} alt="Logo" />
            </div>
          
        </div>
    )

}