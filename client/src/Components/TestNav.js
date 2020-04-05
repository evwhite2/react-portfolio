import React, { Component } from "react";



class TestNav extends Component{

    handleNav = (option)=>{
        var navSearch = option.target.value;
        switch (navSearch){
            case 0: 
            
        }
    };

    render(){
    return(
        <div className="row">

        <div className="col-lg">

            <nav className="navbar navbar-dark bg-dark">

                <h2> <a href= "/">Ellen White</a></h2>
                <select 
                name="navSearch"
                id="navSearch"
                onChange={this.handleNav}>
                    <option value="0">Menu</option>
                    <option value="1">Contact Me</option>
                    <option value="2">First Name</option>
                    <option value="3">Last Name</option>
                    <option value="4">Email</option>
                </select>
            
            </nav>

        </div>
    </div>
    )
    }
}

export default TestNav