import React from "react";

function Nav(){
    return(
        <div className="row">

        <div className="col-lg">

            <nav className="navbar navbar-dark bg-dark">

                <h2> <a href= "/">Ellen White</a></h2>

                <ul className="nav nav-tabs">
                    <li>
                        <a className="nav-link" href="/home">About Me</a>
                    </li>
                    <li>
                        <a className="nav-link" href="/portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a className="nav-link inactive" href="/contact">Contact Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.linkedin.com/in/ellen-white-a4699498/"
                            target="_blank">LinkedIn</a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="./EllenVWhiteResume2020.pdf" target="_blank">Resume</a>
                    </li> */}
                </ul>

            </nav>

        </div>
    </div>
    )
}

export default Nav