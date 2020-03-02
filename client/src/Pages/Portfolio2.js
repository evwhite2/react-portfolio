import React, { Component } from "react"
import Container from "../Components/Container"
import passwordImg from "../images/password.JPG"
import devourImg from "../images/Devour.JPG";
import FindInChiImg from "../images/FindInChi.JPG";
import planItImg from "../images/PlanIt.JPG";
import QuizTimeImg from "../images/QuizTime.JPG";
import StarWarsImg from "../images/StarWarsDB.JPG";
import ThorCastImg from "../images/ThorCast.JPG";
import TripBuddyImg from "../images/TripBuddy.JPG";
import techStockImg from "../images/ilya-pavlov-OqtafYT5kTw-unsplash.jpg";
import NotePadImg from "../images/NotePad.JPG";
import WerkOutImg from "../images/WerkOut.JPG";
import directoryImg from "../images/Directory.JPG";

import allprojects from "../projects.json";
import Row from "../Components/Row"
import Column4 from "../Components/Column4"
import PorfolioCard from "../Components/PortfolioCards"

class Portfolio2 extends Component(){
    
    state={
        allprojects
    }
    
    render(){
    return(
            <Container>
            <div className="ellen-container rounded">
               <Row>
                   <Column4>
                   {this.state.allprojects.map(proj=>{
                       <PorfolioCard
                       key={proj.ID}
                       src={proj.img}
                       text= {proj.text}
                       href={proj.href}
                       />
                   })}
                   </Column4>
               </Row>

            </div>
            </Container>    
        )
    }
}

export default Portfolio2