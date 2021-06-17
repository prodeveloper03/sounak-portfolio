import React from 'react'
import { Switch ,Route} from 'react-router';
import Home from './Home'
import About from './About'
import Project from './Project'
import Skill from './Skill'
import Contact from './Contact'

const App = () => {
  return(

        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route exact path = "/About" component = {About} />
          <Route exact path = "/Project" component = {Project} />
          <Route exact path = "/Skills" component = {Skill} />
          <Route exact path = "/Contact" component = {Contact} />
          
        </Switch>
    
  );
};
export default App;

