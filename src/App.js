import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
}from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css";

import About from './Pages/About/About'
import Home  from './Pages/Home/Home'
import Projects  from './Pages/Projects/Projects'
import Skills  from './Pages/Skills/Skils'
import Contact  from './Pages/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'



const App = () => {
    return (

        <Router>
            <Navbar/>
                <main>
                <Switch>
                <Route path = "/" exact>
                        <Home/>
                        <img src = "homeImg.jpg" width = "100%" height = "100%"/>
                    </Route>
                    <Route path = "/about" exact>
                        <About/>
                    </Route>
                    <Route path = "/projects" exact>
                        <Projects/>
                    </Route>
                    <Route path = "/skills" exact>
                        <Skills/>
                    </Route>
                    <Route path = "/contact" exact>
                        <Contact/>
                    </Route>
                    <Route path = "/home" exact>
                        <Home/>
                    </Route>
                    <Route path = "/about" exact>
                        <About/>
                    </Route>
                    <Route path = "/projects" exact>
                        <Projects/>
                    </Route>
                    <Route path = "/skills" exact>
                        <Skills/>
                    </Route>
                    <Route path = "/contact" exact>
                        <Contact/>
                    </Route>
                

                </Switch>
                </main>
        </Router>
            


    );

}
export default App;