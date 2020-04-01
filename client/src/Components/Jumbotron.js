import React from "react";
import Row from "./Row";

function Jumbotron(props){
    return(
    <div id="ellen-jumbotron" className="jumbotron jumbotron-fluid rounded">
        <h1 id="ellen-jumbo" className="display-4">{props.text}</h1>
        {props.subElement}
    </div>
  
    )
}

export default Jumbotron;