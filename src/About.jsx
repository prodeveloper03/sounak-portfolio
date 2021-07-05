import React from 'react'
import profile from "../src/images/profile.jpg"



const About = () => {
  return(
    <>
        <section id = "header" className = "d-flex align-item-center">
        <div className = "container-fluid nav_bg">
            <div className = 'row'>
                <div className = "col-10 mx-auto">
                  <div className = "row">
                    <div className = "col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    
                          <h1>
                            <strong className = "brand-name">About Me</strong>
                          </h1>
                          <h2 className = "my-2">
                          I am in my 3rd year of undergrad in B.tech Computer science & engineering at the Jaypee Institute of Information and Technology. I take the industrial problem as a challenge and I love to storm my brain to find a very optimal solution for that particular problem.
                          <br/>

                          </h2>
                    </div>
                    <div className = "col-lg-6 order-1 order-lg-2 header-img">

                      <img src = {profile} className = "img-fluid animated" alt = "home img" />
              
                        

                      </div>
                    </div>
                  </div>
            </div>
         </div>
           
        </section>
    </>
  );
}
export default About;

