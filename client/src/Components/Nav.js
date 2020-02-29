import React from "react";

function Nav(){
    return(
        <div class="row">

        <div class="col-lg">

            <nav class="navbar navbar-dark bg-dark">

                <h2> <a href= "/">Ellen White</a></h2>

                <ul class="nav nav-tabs">
                    <li>
                        <a class="nav-link" href="/home">About Me</a>
                    </li>
                    <li>
                        <a class="nav-link" href="/portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a class="nav-link" href="#">Contact Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.linkedin.com/in/ellen-white-a4699498/"
                            target="_blank">LinkedIn</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./EllenVWhiteResume2020.pdf" target="_blank">Resume</a>
                    </li>
                </ul>

            </nav>

        </div>
    </div>
    )
}

export default Nav