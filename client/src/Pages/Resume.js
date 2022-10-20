import React from "react";
import Container from "../Components/Container";
import Row from "../Components/Row";
import Card from "../Components/Card";
import ListCard from "../Components/ListCard";

function Resume(){
    return(
        <Container>
            <br/>
            <Row>
                <div className="col-lg-6">
                    <h1>Education</h1>
                    <Card
                    heading="Masters in Business Administration"
                    subheading="Loyola University Chicago, 2022"
                    text="Concentration in Information Systems including SQL, DBMS, and Python"
                    />
                    <Card
                    heading="Certificate in Business Data Analytics"
                    subheading="Loyola University Chicago, 2022"
                    text="Machine Learning, Business Intelligence, Analytics"
                    />
                    <Card
                    heading="Certificate of Full Stack Web Development"
                    subheading="Northwestern University, 2020"
                    text="JavaScript, Node.js, HTML/CSS, MongoDB, SQL,React"
                    />

                    <Card
                    heading="BS Environmental Science and Sustainablity"
                    subheading="University of Illinois at Urbana-Champaign, 2016"
                    text="Major in Society and Environment"
                    />
                </div>

                <div className="col-lg-6">
                    <h1>Professtional Experience</h1>
                    <ListCard
                    heading="Software Developer"
                    subheading="FDM Group, Inc / July 2020-Current"
                    text="Working under contract for Bank of America since October 2020"
                    bullet1="Serves as lead analyst and project manager for a data source migration project required by global risk analytics management, coordinating business and technical requirements, change management, facilitating data vendor contract agreements, and  serves in a variety of research and testing capacities for development tasks"
                    bullet2="Served as the lead analyst and assisted in UAT for the development project of a new trade blotter application, assisting development team with gathering business requirements, research, and documentation"
                    bullet3="Wrote python modules in the Quartz Environment that would serve to extract and catalog e-trading data from several sources into Tableau dashboard for impact analysis reporting in the global e-trading divisions and monitor volumes, anomalies, and potentially erroneous transactions
                    rote several python modules in the Quartz Environment that would serve to migrate e-trading data from several sources into the Hadoop environment."
                    />
                    <ListCard
                    heading="IT Consultant"
                    subheading="FDM Group, Inc / July 2020 - Present"
                    text="Contracted by Bank of America since October 2020"
                    bullet1="Underwent intoductory courses in Unix and Java Applications programming, and professional skills development"
                    bullet2="During preliminary onboarding for first contract, engaged in individual studies to learn Big Data Programming skills via Hadoop, Google Cloud, and Databricks"
                    bullet3="Self-taught Python for purposes on contract at Bank of America"
                    />
                    <ListCard
                    heading="Customer Service Representative"
                    subheading="ArcelorMittal International, Long Carbon Europe / October 2018-May 2020"
                    text="Liaison for all Canada-based client needs after and order placement, including
                    status updates, invoicing, and reporting on vessel schedules in coordination with
                    counterparts in European producing mills. Also resident techie."
                    bullet1="Inputs, transmits, and tracks new orders, handles registration and credit memos for quality claims on AMI products."
                    bullet2="Assists engineers with assorted tasks, such as preparing data in Excel to be used for structural analysis of future steel projects and AMI recommendations."
                    bullet3="Ensures all customer-related master data is current and accurate, creating and instructing tickets when data requires modification."
                    />
                    <ListCard
                    heading="East Coast Regional Manager"
                    subheading="First Look Appraisals, LLC / June 2016 - October 2018"
                    text="Promoted after 1 year of employment to leadership role overseeing team of 9 coordinators to provide integral, multi-faceted support for mortgage lenders during real estate appraisal life cycles."
                    bullet1="Charged with managing all escalated files, including developing new strategies to mitigate reoccurring issues."
                    bullet2="Consistently demonstrated mastery of various technological interfaces and several operating systems, often improving the understanding of company systems for my superiors, on several occasions, leading to the creation of new tools to run user operations more effectively."
                    bullet3="Recruited new vendors and worked to build and maintain relationships with client and vendors alike."
                    />
                </div>
            </Row>
        </Container>
    )

}

export default Resume