import React from "react";
import "./Vid.css"
import ReactPlayer from "react-player"

export default function Video(){
    return(
        <div className="Vid_Section">
            <div className="Vid_image_container">
                <ReactPlayer url="https://www.youtube.com/watch?v=ug50zmP9I7s" />
            </div>
          
        </div>
    )

}