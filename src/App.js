import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
}from 'react-router-dom'

import About from './Pages/About/About'
import Home  from './Pages/Home/Home'
import Projects  from './Pages/Projects/Projects'
import Skills  from './Pages/Skills/Skils'
import Contact  from './Pages/Contact/Contact'



const App = () => {
    return (

        <Router>
            <main>
                <Route path = "/" exact>
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


            </main>
        </Router>
            


    );

}
export default App;