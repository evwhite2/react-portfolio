import React from "react";
import "./style.css";

import Container from "../Components/Container"
import Row from "../Components/Row"
import PortfolioCard from "../Components/PortfolioCards"
import Jumbotron from "../Components/Jumbotron";
import Column4 from "../Components/Column4";

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
import framesImg from "../images/Frames.JPG";

function Portfolio(){
    
    return(
        
            <Container>
            <br/>
            <div className="ellen-container rounded">
              <Jumbotron text="Portfolio Gallery"/>  
            </div>
            <br/>
            <div className="ellen-container rounded">

            <Row>

                <Column4>
                <PortfolioCard
                src={TripBuddyImg}
                href="https://trip-buddy-2020.herokuapp.com/"
                imgLink="https://trip-buddy-2020.herokuapp.com/"
                text="Trip Buddy"
                hrefRepo="https://github.com/evwhite2/TripBuddy"
                />
                </Column4>

                <Column4>
                <PortfolioCard
                src={directoryImg}
                href="https://react-directory-lnv2020.herokuapp.com/"
                imgLink="https://react-directory-lnv2020.herokuapp.com/"
                text="React Directory"
                hrefRepo="https://github.com/evwhite2/reactDirectory2.0"
                />
                </Column4>

                <Column4>
                <PortfolioCard
                src={framesImg}
                href="https://custom-studio-frames-2020.herokuapp.com/"
                imgLink="https://custom-studio-frames-2020.herokuapp.com/"
                text="Studio Frames"
                hrefRepo="https://github.com/evwhite2/CustomFramingApp2"
                />
                </Column4>

            </Row>

            <Row>

                <Column4>
                <PortfolioCard
                src={FindInChiImg}
                href="https://evwhite2.github.io/FindInChi/"
                imgLink="https://evwhite2.github.io/FindInChi/"
                text="Find In Chi"
                hrefRepo="https://github.com/evwhite2/FindInChi"
                />
                </Column4>

                <Column4>
                <PortfolioCard
                src={QuizTimeImg}
                href="https://evwhite2.github.io/Timed-Quiz-NH/"
                imgLink="https://evwhite2.github.io/Timed-Quiz-NH/"
                text="Quiz Time"
                hrefRepo="https://github.com/evwhite2/Timed-Quiz-NH"
                />
                </Column4>

                <Column4>
                <PortfolioCard
                src={WerkOutImg}
                href="https://werk-out-tracker.herokuapp.com/"
                imgLink="https://werk-out-tracker.herokuapp.com/"
                text="WerkOut"
                hrefRepo="https://github.com/evwhite2/WerkOutRecorder"
                />
                </Column4>

            </Row>

            <Row>

                <Column4>
                <PortfolioCard
                src={techStockImg}
                href="https://github.com/evwhite2/Employee-Tracker"
                imgLink="https://github.com/evwhite2/Employee-Tracker"
                text="Node Employee Tracker"
                hrefRepo="https://github.com/evwhite2/Employee-Tracker"
                />
                </Column4>

                <Column4>
                <PortfolioCard
                src={StarWarsImg}
                href="https://starwars-simple-api-2019.herokuapp.com/"
                imgLink="https://starwars-simple-api-2019.herokuapp.com/"
                text="Star Wars DB"
                hrefRepo="https://github.com/evwhite2/StarWarsApp"
                />
                </Column4>

                <Column4>
                <PortfolioCard
                src={devourImg}
                href="https://devour-or-nah.herokuapp.com/"
                imgLink="https://devour-or-nah.herokuapp.com/"
                text="Devour-or-Nah"
                hrefRepo="https://github.com/evwhite2/Devour-or-nah"
                />
                </Column4>

            </Row>

            <Row>

                <Column4>
                <PortfolioCard
                src={passwordImg} 
                href="https://evwhite2.github.io/passwordgenerator/"
                imgLink="https://evwhite2.github.io/passwordgenerator/"
                text="Password Generator"
                hrefRepo="https://github.com/evwhite2/passwordgenerator"
                />
                </Column4>

                <Column4>
                <PortfolioCard
                src={NotePadImg}
                href="https://notepad-2019.herokuapp.com/"
                imgLink="https://notepad-2019.herokuapp.com/"
                text="Note Pad"
                hrefRepo="https://github.com/evwhite2/NotePad"
                />
                </Column4>

                <Column4>
                <PortfolioCard
                src={ThorCastImg}
                href="https://evwhite2.github.io/ThorCast/"
                imgLink="https://evwhite2.github.io/ThorCast/"
                text="ThorCast"
                hrefRepo="https://github.com/evwhite2/ThorCast"
                />
                </Column4>

            </Row>
            
            <Row>

                <Column4>
                <PortfolioCard
                src={planItImg} 
                href="https://evwhite2.github.io/PlanIt"
                imgLink="https://evwhite2.github.io/PlanIt"
                text="PlanIt"
                hrefRepo="https://github.com/evwhite2/PlanIt"
                />
                </Column4>

            </Row>          

            </div>
        
            </Container>    
        )
}

export default Portfolio