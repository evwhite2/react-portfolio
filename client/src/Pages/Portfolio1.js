import React from "react"
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
import WerkOut from "../images/WerkOut.JPG";
import NotePad from "../images/NotePad.JPG";
import Directory from "../images/Directory.JPG"

function Portfolio(){
    return(

            <Container>
            <br/>
        <div className="row">
            <div className="col-lg">
                    <div id="ellen-jumbotron" className="jumbotron jumbotron-fluid rounded">
                            <div className="container">
                              <h1 id="ellen-jumbo" className="display-4">Portfolio Gallery</h1>
                            </div>
                    </div>
            </div>
        </div>
            <div className="ellen-container rounded">

                <div className="row">
                    <div className="col-lg-4">
                        <div className= "ellen-stock">
                        
                            <img className= "imgSz rounded mx-auto d-block"  alt="clip of app" src= {WerkOut} height="250px" width="250px"/>
                        
                            <div className="ellen-photo-bar"> 
                                <a href="https://werk-out-tracker.herokuapp.com/">Explore WerkOut Tracker</a>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className= "ellen-stock">
                        
                            <img className= "rounded mx-auto d-block"  alt="clip of app" src= {NotePad} height="250px" width="250px"/>
                        
                            <div className="ellen-photo-bar"> 
                                <a href="https://notepad-2019.herokuapp.com/">Explore NotePad</a>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className= "ellen-stock">
                        
                            <img className= "rounded mx-auto d-block"  alt="clip of app" src= {Directory} height="250px" width="250px"/>
                        
                            <div className="ellen-photo-bar"> 
                                <a href="https://notepad-2019.herokuapp.com/">Explore React Directory</a>
                            </div>

                        </div>
                    </div>

                </div>

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
                                        <a href="https://trip-buddy-2020.herokuapp.com/">Explore TripBuddy</a>
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
                                    <a href="https://starwars-simple-api-2019.herokuapp.com/">Explore StarWars DB</a>
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
    )
}

export default Portfolio