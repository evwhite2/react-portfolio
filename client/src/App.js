import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import Home from './Pages/Home';
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
// import Landing from './Pages/Landing';
import Wrapper from './Components/Wrapper';




function App() {
  return (

          <Wrapper>
          <BrowserRouter>
          <Nav/>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} />
          </BrowserRouter>
          <Footer>
<<<<<<< HEAD
            <p> © Ellen White 2022 </p>
=======
            <p> © Ellen White 2021 </p>
>>>>>>> 24ee9219231f833ac6cb64e34edd9c4bc91ee7f0
          </Footer>
          </Wrapper> 
      
  );
}

export default App;
