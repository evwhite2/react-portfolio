import React from "react";
import "./style.css";

function PortfolioCard(props){
    return(
                <div className= "ellen-stock">
                    <a href={props.imgLink} target="blank">        
                    <img alt="icon" className= "imgSz rounded mx-auto d-block"  alt="clip of app" 
                    src={props.src} 
                    />
                    </a>
                    <div className="ellen-photo-bar"> 
                        <a href={props.href} rel="noopener noreferrer" target="_blank">
                       {props.text}
                        </a>
                    </div>
                </div>

    )
}

export default PortfolioCard 