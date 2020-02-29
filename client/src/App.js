import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import Home from './Pages/Home';
import Nav from "./Components/Nav";
import Portfolio from "./Pages/Portfolio";

function App() {
  return (
    
      <BrowserRouter>
      <Nav/>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        {/* <Route exact path="/contact" component={Contact} /> */}
        {/* <Route exact path="/resume" component={Resume} */}
      </BrowserRouter>
    
  );
}

export default App;
