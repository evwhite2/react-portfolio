import React from "react";
import "./style.css";
import profilePic from "../images/photo-2.JPG";
import Container from "../Components/Container";
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

                    <h3>Profile</h3>
                <p>
                    Ellen is a Full Stack Developer and Business Data Analyst who values innovation, sustainability, and merit. She earned a certificate in Web Development from Northwestern University, and is an MBA candidate with concentration in Information Systems and Business Data Analytics.
                </p>
                <p>
                   With several years of advanced customer service experience in leadership roles, Ellen enjoys and excels in having an active line of communication with the client. During her education at Northwestern, Ellen most notably contributed to a full stack website that would serve as a catalog and calculator to build price quotes for a custom framing store. Ellen created the schema for the database and wrote the back end connections in JavaScript from MongoDB into a React application, and designed and wrote nearly the entire front end. As an engineer for Bank of America, her focus has shifted towards big data and analytics while still maintaining side projects in web development.
                </p>
                </div>

            </div>
            <Row>
                <Column4>
                    <SkillCard
                    heading="Languages/Frameworks"
                    bullet1="JavaScript, Python, Java"
                    bullet2="React, Angular"
                    bullet3="NodeJS"
                    />
                </Column4>

                <Column4>
                    <SkillCard
                    heading="DBMS"
                    bullet1="Oracle SQL"
                    bullet2="Moongoose"
                    bullet3="Impala Hadoop"
                    bullet4="PySpark"
                    />
                </Column4>

                <Column4>
                    <SkillCard
                      heading="Leadership"
                      bullet1="Project Management"
                      bullet2="Detail Orientation"
                      bullet3="Writing and Documentation"
                      bullet4="Planning and Organization"
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