import React from "react";
import "./style.css";
import profilePic from "../images/photo-2.JPG";
import Container from "../Components/Container";
import Wrapper from "../Components/Wrapper";
import Footer from "../Components/Footer";


function Home(){
    
    return(
        <Wrapper>
        <Container>
            <br/>
            <br/>
            <div className="row">

                <div className="col">

                    <img className="ellen-photo" alt="profile" src={profilePic}/>

                    <h3> About Me</h3>
                    <p>
                    As an aspiring full stack developer currently enrolled in the Northwestern Full-Stack Bootcamp, I am
                    working to move the trajectory of my career towards a tech company with a conscious.
                </p>
                <p>
                    I earned a Bacherlor's of Arts and Science in Earth, Society, and Envrionmental Science and
                    Sustainability from the University of Illinois at Urbana-Champaign (yes, it's a mouth full), and I
                    am currently on course to complete my Masters in Business Adminstration with a concentration in
                    Database Management from Loyola University Chicago by 2021.
                </p>
                <p>
                    Previous to the bootcamp, I have contributed to the design and implementation of small-scale data
                    tools to help a former employer make more effective choices on a front-line basis. With several
                    years of advanced customer service experience in leadership roles throughout university and into my
                    young professional career, I have enjoyed and exceled in having an active line of communication with
                    clients, while also maintaining an effective yet flexible leadership style.
                </p>
                <p>
                    I have always been inclined towards the principles of continuous improvement, and plans to use my
                    fresh experience with the many suites learned in Bootcamp to do just that. While my long term goal
                    is to dig into the development of data managment applications, I also life-long obsession with art
                    and design that is both practiced and preached. That being considered, I truly love being able to
                    work throughout the full stack, as I find the exacting work it take to build on visual design and UI
                    very gratifying.
                </p>

                </div>

            </div>

        </Container>
        <Footer/>
        </Wrapper>
    )
}

export default Home