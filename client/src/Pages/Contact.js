import React from "react";
import Container from "../Components/Container";
import Footer from "../Components/Footer";

import LinkedInImg from "../images/iconfinder_linkedin_246593.png";
import GitImg from "../images/iconfinder_github_1220319.png";
import StackImg from "../images/iconfinder_318_Stack_Overflow_logo_4375498.png";

function Contact(){
    return(
        <div>
           <Container>
            <br/>
            <div className="row">
            
            <div className="col-lg-9">
                <h1>Contact Me</h1>   
            <br/>
            <div className="row">
            <div id= "contactLinks" className="col-lg">
        
 

                                <div className="row">
                                    <div className="col-md">
                                        <img src={LinkedInImg} height="100px" width="100px"/>
                                        <a href="https://www.linkedin.com/in/ellen-white-a4699498/">Find me on LinkedIn</a> 

                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-md">
                                        <img src={GitImg} height="100px" width="100px"/>
                                        <a href="https://github.com/evwhite2">Find me on GitHub</a>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-md">
                                        <img src={StackImg} height="100px" width="100px"/>
                                        <a href="https://stackoverflow.com/users/11934027/ln-vw">Find Me on StackOverFlow</a>
                                    </div>
                                </div>
                                
                                
                        
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