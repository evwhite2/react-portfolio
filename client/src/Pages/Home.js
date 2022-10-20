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
                    Ellen earned an MBA in Information System and a certificate in business data analytics from Loyola University Chicago. Her inclination towards data science and IT was propelled by her love of learn and value in continuing education, which has also resulted in a professional certificate from Northwestern University in Full Stack Web Development. She consistently demonstrates her acumen for leadership across all her endeavors. 
                </p>
                <p>
                    With several years of advanced customer service experience in leadership roles, Ellen excels in having an active line of communication with the client. During her education at Northwestern, Ellen most notably contributed to a full stack website that would serve as a catalog and calculator to build price quotes for a custom framing store. Ellen created the schema for the database and wrote the back-end connections in JavaScript from MongoDB into a React application and designed and wrote a majority of the entire front-end while delegating other critical components and research tasks to her team. As a Business Analysis and Software Engineer for Bank of America, her focus has shifted towards data and analytics and ETL-oriented planning and execution. During her short time under contract for the Bank’s Rates Market Data team, her confidence as a leader, skills as an meticulous analyst, and fluency in computer science and business-oriented language and requirements have proven her an invaluable asset to the team. 

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