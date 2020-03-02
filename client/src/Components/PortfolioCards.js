import React from "react";
// import Row from "./Row";
// import Column4 from "./Column4";

function PorfolioCard(props){
    return(
                <div className= "ellen-stock">
                            
                    <img className= "rounded mx-auto d-block"  alt="clip of app" 
                    key={props.ID}
                    src= {props.img} 
                    height="250px" 
                    width="250px"/>
                        
                    <div className="ellen-photo-bar"> 
                        <a href={props.href}>
                        {props.text}
                        </a>
                    </div>
                </div>

    )
}

export default PorfolioCard