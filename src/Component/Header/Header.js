import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="Header">
          <div className='Logo_img'>
            <span>Worku</span>
          </div>
          <div className='navigation'>
            <ul>
                <Link style={{textDecoration: 'none'}}><li>Features</li></Link>
                <Link style={{textDecoration: 'none'}}><li>Contact</li></Link>
                <Link style={{textDecoration: 'none'}}><li>Help</li></Link>
                <Link style={{textDecoration: 'none'}}><span>Login</span></Link>

            </ul>
          </div>
        </div>
    )

}