import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle';
import "./assets/App.css";
import { Switch ,Route, Redirect} from 'react-router';
import Navbar from "./Navbar"
import Home from './Home';
import About from './About';
import Project from './Project';
import Skill from './Skill';
import Contact from './Contact';

const App = () => {
  return(
    <div className = "navall">
        <Navbar />
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route exact path = "/About" component = {About} />
          <Route exact path = "/Project" component = {Project} />
          <Route exact path = "/Skills" component = {Skill} />
          <Route exact path = "/Contact" component = {Contact} />
          <Redirect to = "/"/>
          
        </Switch>

      </div>
    
  );
};
export default App;

