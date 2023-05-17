import React from "react";
import "./Vid.css"
import ReactPlayer from "react-player"
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';

export default function Video(){
    return(
        <div className="Vid_Section">
            <Container>
            <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                </div>

            </Container>
            <div className="Vid_image_container">
            
            </div>
          
        </div>
    )

}