
import "./style.css"
import React, { Component } from "react";

let style = {
    backgroundColor: "#343a40",
    color: "whitesmoke",
    fontSize: "12px",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "65px",
    verticleAlign: "middle",
    width: "100%",
};

class Footer extends Component{
    render(){
        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
}

export default Footer
