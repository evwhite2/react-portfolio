import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import Home from './Pages/Home';
import Nav from "./Components/Nav";
import Portfolio2 from "./Pages/Portfolio2";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import Wrapper from './Components/Wrapper';



function App() {
  return (
    <div>
          <Wrapper>
          <BrowserRouter>
          <Nav/>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/portfolio" component={Portfolio2} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} />
          </BrowserRouter>
          </Wrapper>
          
    </div>
      
  );
}

export default App;
