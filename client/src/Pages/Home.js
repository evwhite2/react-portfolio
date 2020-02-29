import React from "react";
import "./style.css";
import profilePic from "../images/photo-2.JPG";
import Container from "../Components/Containter";


function Home(){
    
    return(
        <Container>
            <div className="row">
                <img className="ellen-photo" alt="profile photo" src={profilePic}/>
            </div> 
        </Container>
        
    )
}

export default Home