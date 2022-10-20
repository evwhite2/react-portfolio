import React from "react";
import "./style.css";


function PortfolioCard(props){
    return(
                <div className= "ellen-stock">
                    <a href={props.imgLink} target="blank">        
                    <img alt="icon"  className= "imgSz rounded mx-auto d-block" 
                    src={props.src} 
                    />
                    </a>
                    <div className="ellen-photo-bar"> 
                        <a className="stronger" href={props.href} rel="noopener noreferrer" target="_blank">
                       {props.text}
                        </a>
                        <br/>
                        <a href={props.hrefRepo} rel="noopener noreferrer" target="_blank">
                            Repo Link
                        </a>
                    </div>
                </div>

    )
}

export default PortfolioCard 