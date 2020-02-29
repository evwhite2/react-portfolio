import React from "react"
import Footer from "../Components/Footer"
import Wrapper from "../Components/Wrapper"
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

function Portfolio(){
    return(
        <Wrapper>

            <Container>

            <div className="ellen-container rounded">

                <div className="row">

                    <div className="col-lg-4">

                            <div className= "ellen-stock">
                            
                                <img className= "rounded mx-auto d-block"  alt="clip of app" src= {passwordImg} height="250px" width="250px"/>
                            
                                <div className="ellen-photo-bar"> 
                                    <a href="https://evwhite2.github.io/passwordgenerator/">Explore Password Generator</a>
                                </div>

                            </div>

                    </div>

                        <div className="col-lg-4">

                            <div className= "ellen-stock">
                            
                                <img className= "rounded mx-auto d-block"  alt="clip of app" src= {QuizTimeImg} height="250px" width="250px"/>
                            
                                <div className="ellen-photo-bar"> 
                                    <a href="https://evwhite2.github.io/Timed-Quiz-NH/">Explore QuizTime</a>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-4">

                                <div className= "ellen-stock">
                                
                                    <img className= "rounded mx-auto d-block"  alt="clip of app" src= {TripBuddyImg} height="250px" width="250px"/>
                                
                                    <div className="ellen-photo-bar"> 
                                        <a href="https://mysterious-eyrie-04638.herokuapp.com/">Explore TripBuddy</a>
                                    </div>

                                </div>

                        </div>

                </div>

                <div className="row">

                    <div className="col-lg-4">

                            <div className= "ellen-stock">
                            
                                <img className= "rounded mx-auto d-block"  alt="clip of app" src= {devourImg} height="250px" width="250px"/>
                            
                                <div className="ellen-photo-bar"> 
                                    <a href="https://radiant-sea-75820.herokuapp.com/">Explore Devour-or-Nah</a>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-4">

                            <div className= "ellen-stock">
                            
                                <img className= "rounded mx-auto d-block"  alt="clip of app" src= {StarWarsImg} height="250px" width="250px"/>
                            
                                <div className="ellen-photo-bar"> 
                                    <a href="https://rocky-gorge-12366.herokuapp.com/">Explore StarWars DB</a>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-4">

                                <div className= "ellen-stock">
                                
                                    <img className= "rounded mx-auto d-block"  alt="clip of app" src= {techStockImg} height="250px" width="250px"/>
                                
                                    <div className="ellen-photo-bar double"> 
                                        <a href="https://youtu.be/STRGiu6TY3s">Explore Node Employee Tracker Video</a>
                                        <a href="https://github.com/evwhite2/Employee-Tracker"> Or on Github</a>
                                    </div>

                                </div>

                            </div>

                </div>

                <div className="row">
|
                    <div className="col-lg-4">

                        <div className= "ellen-stock">
                        
                            <img className= "rounded mx-auto d-block"  alt="clip of app" src= {ThorCastImg} height="250px" width="250px"/>
                        
                            <div className="ellen-photo-bar"> 
                                <a href="https://evwhite2.github.io/ThorCast/">Explore ThorCast</a>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-4">

                        <div className= "ellen-stock">
                        
                            <img className= "rounded mx-auto d-block"  alt="clip of app" src= {FindInChiImg} height="250px" width="250px"/>
                        
                            <div className="ellen-photo-bar"> 
                                <a href="https://evwhite2.github.io/FindInChi/">Explore Find In Chi</a>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-4">

                            <div className= "ellen-stock">
                            
                                <img className= "rounded mx-auto d-block"  alt="clip of app" src= {planItImg} height="250px" width="250px"/>
                            
                                <div className="ellen-photo-bar"> 
                                    <a href="https://evwhite2.github.io/PlanIt/">Explore Plan It</a>
                                </div>

                            </div>

                    </div>


                </div>

            </div>

            </Container>
            
            <Footer/>
        </Wrapper>
    )
}

export default Portfolio