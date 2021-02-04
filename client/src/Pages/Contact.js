import React from "react";
import Container from "../Components/Container";
import Jumbotron from "../Components/Jumbotron";
import Row from "../Components/Row";
import Column4 from "../Components/Column4";

import LinkedInImg from "../images/iconfinder_linkedin_246593.png";
import GitImg from "../images/iconfinder_github_1220319.png";
import StackImg from "../images/iconfinder_318_Stack_Overflow_logo_4375498.png";


function Contact(){
    return(
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
                    target="_blank" rel="noopener noreferrer"><img src={LinkedInImg} alt="icon" height="100px" width="100px"/></a>
                    </Column4>
                    <Column4>
                    <a href="https://github.com/evwhite2"
                    target="_blank" rel="noopener noreferrer"><img src={GitImg} alt="icon" height="100px" width="100px"/></a>
                    </Column4>
                    <Column4>
                    <a href="https://stackoverflow.com/users/11934027/ln-vw" 
                    target="_blank" rel="noopener noreferrer"><img src={StackImg} alt="icon" height="100px" width="100px"/></a>
                    </Column4>
                </Row>
                <Row>
                    <Column4>
                    <a href="https://www.linkedin.com/in/ellen-white-a4699498/" 
                    target="_blank" rel="noopener noreferrer">Reach out on LinkedIn</a> 
                    </Column4>
                    <Column4>
                    <a href="https://github.com/evwhite2" 
                    target="_blank" rel="noopener noreferrer">Find me on GitHub</a>
                    </Column4>
                    <Column4>
                    <a href="https://stackoverflow.com/users/11934027/ln-vw" 
                    target="_blank" rel="noopener noreferrer">Find Me on StackOverFlow</a>
                    </Column4>
                </Row>
                <br/>
                <br/>
                <br/>
              
        
                                                            
            </div> 
            </div>  
            </div>
        </div>

        </Container> 
      
    )
}

export default Contact