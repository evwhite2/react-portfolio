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
                    heading="MS Business Administration"
                    subheading="Concentration in IT and Data Management"
                    text="Loyola University Chicago, Expected Graduation 2021"
                    />

                    <Card
                    heading="Certificate of Full Stack Web Development"
                    subheading="School of Professional Studies"
                    text="Northwestern University, 2020"
                    />

                    <Card
                    heading="BS Environmental Science and Sustainablity"
                    subheading="Concentration in Society and Environment"
                    text="University of Illinois at Urbana-Champaign, 2016"
                    />
                </div>

                <div className="col-lg-6">
                    <h1>Professtional Experience</h1>
                    <ListCard
                    heading="Customer Service Representative"
                    subheading="ArcelorMittal International, Long Carbon Europe / October 2018- Present"
                    text="Liaison for all Canada-based client needs after and order placement, including
                    status updates, invoicing, and reporting on vessel schedules in coordination with
                    counterparts in European producing mills. Also resident techie."
                    bullet1="Inputs, transmits, and tracks new orders, handles registration and credit memos for quality claims on AMI products."
                    bullet2="Assists engineers with assorted tasks, such as preparing data in Excel to be used for structural analysis of future steel projects and AMI recommendations."
                    bullet3="Ensures all customer-related master data is current and accurate, creating and instructing tickets when data requires modification."
                    />
                    <ListCard
                    heading="East Coast Regional Manager"
                    subheading="First Look Appraisals, LLC / June 2016-October 2018"
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