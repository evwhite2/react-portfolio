import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import Home from './Pages/Home';
import Nav from "./Components/Nav";
import Portfolio1 from "./Pages/Portfolio1";
import Contact from "./Pages/Contact";
import Wrapper from './Components/Wrapper';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
          <Wrapper>
          <BrowserRouter>
          <Nav/>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/portfolio" component={Portfolio1} />
            <Route exact path="/contact" component={Contact} />
      
          </BrowserRouter>
          </Wrapper>
          
    </div>
      
  );
}

export default App;
