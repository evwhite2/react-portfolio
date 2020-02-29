import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Nav from "./Components/Nav";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        {/* <Route exact path="/portfolio" component={Portfolio} /> */}
        {/* <Route exact path="/contact" component={Contact} /> */}
        {/* <Route exact path="/resume" component={Resume} */}
      </BrowserRouter>
  
    </div>
  );
}

export default App;
