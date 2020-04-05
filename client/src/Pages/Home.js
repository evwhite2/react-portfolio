import React from "react";
import "./style.css";
import profilePic from "../images/photo-2.JPG";
import Container from "../Components/Container";
import Wrapper from "../Components/Wrapper";
import Footer from "../Components/Footer";
import Row from "../Components/Row";
import Column4 from "../Components/Column4";
import SkillCard from "../Components/SkillCard";

function Home(){
    
    return(
        <Container>
            <br/>
            <br/>
            <div className="row">

                <div className="col">

                    <img className="ellen-photo" alt="profile" src={profilePic}/>

                    <h3> About Me</h3>
                <p>
                    Full Stack Developer working to change the trajectory of my career towards a company that values innovation, sustainability, and merit. I earned a certificate in Full Stack Development from Northwestern University, and I am in active pursuit of my MBA. I am inclined towards the principles of continuous improvement, and I use my fresh experience in Javascript and database management systems to do just that. 
                </p>
                <p>
                    I have contributed to the design and implementation of small-scale data tools to help my previous organization make more effective choices on a front-line basis. With several years of advanced customer service experience in leadership roles, I enjoy and excel in having an active line of communication with the client, providing me with the ideal combination of flexibility, emotional intelligence, and diligence.
                </p>
                <p>
                    I seek to change into a role in back-end development, specifically in development of data-driven tools and architecture. As a life-long learner and leader, I plan to use my fresh coding experience and my natural tenacity to tackle my entry into a role aligned with these interests.
                </p>

                </div>

            </div>
            <Row>
                <Column4>
                    <SkillCard
                    heading="Languages"
                    bullet1="JavaScript"
                    bullet2="HTML/CSS"
                    
                    />
                </Column4>

                <Column4>
                    <SkillCard
                    heading="DB Mgmt"
                    bullet1="MS Access, Oracle"
                    bullet2="MongoDB/Moongoose"
                    bullet3="MySQL/Sequelize"
                    />
                </Column4>

                <Column4>
                    <SkillCard
                      heading="Interpersonal"
                      bullet1="Leadership"
                      bullet2="Detail Orientation"
                      bullet3="Project Management"
                      />
                </Column4>

            </Row>
            <br/>
            <br/>
            <br/>

        </Container>
      
    )
}

export default Home