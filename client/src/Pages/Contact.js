import React from "react";
import Container from "../Components/Container";
import Footer from "../Components/Footer";
import Jumbotron from "../Components/Jumbotron";
import Row from "../Components/Row";
import Column4 from "../Components/Column4";

import LinkedInImg from "../images/iconfinder_linkedin_246593.png";
import GitImg from "../images/iconfinder_github_1220319.png";
import StackImg from "../images/iconfinder_318_Stack_Overflow_logo_4375498.png";


function Contact(){
    return(
        <div>
           <Container>
               <br/>
               <Jumbotron text="Contact Me"/>
            <br/>
            <div id="contactLinks" className="row">
            
            <div className="col-lg-9">
            <br/>
            <div className="row">
            <div className="col-lg">
        
                <Row>
                    <Column4>
                    <a href="https://www.linkedin.com/in/ellen-white-a4699498/"
                    target="_blank"><img src={LinkedInImg} height="100px" width="100px"/></a>
                    </Column4>
                    <Column4>
                    <a href="https://github.com/evwhite2"
                    target="_blank"><img src={GitImg} height="100px" width="100px"/></a>
                    </Column4>
                    <Column4>
                    <a href="https://stackoverflow.com/users/11934027/ln-vw" 
                    target="_blank"><img src={StackImg} height="100px" width="100px"/></a>
                    </Column4>
                </Row>
                <Row>
                    <Column4>
                    <a href="https://www.linkedin.com/in/ellen-white-a4699498/" 
                    target="_blank">Find me on LinkedIn</a> 
                    </Column4>
                    <Column4>
                    <a href="https://github.com/evwhite2" 
                    target="_blank">Find me on GitHub</a>
                    </Column4>
                    <Column4>
                    <a href="https://stackoverflow.com/users/11934027/ln-vw" 
                    target="_blank">      Find Me on StackOverFlow</a>
                    </Column4>
                </Row>
        
                                                            
            </div> 
            </div>  
            </div>
        </div>

        </Container> 
         <Footer/>
        </div>
        
    )
}

export default Contact