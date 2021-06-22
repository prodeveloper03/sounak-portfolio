import React from 'react'
import mobile from "../src/images/homeImg.svg"



const Home = () => {
  return(
    <>
        <section id = "header" className = "">
        <div className = "container-fluid nav_bg">
            <div className = 'row'>
                <div className = "col-10 mx-auto">
                  <div className = "col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                    <h1>
                      Hello I am
                    </h1>
                    <h1>
                      <strong>Sounak Saha</strong>
                    </h1>
                    <h2 className = "my-3">
                      APP AND WEB DEVELOPER
                    </h2>

                  </div>
                  <div className = "mt-3">

                      <a href = "https://stackoverflow.com/questions/47427696/mx-auto-not-moving-element-to-centre" >Download Resume</a>

                  </div>


                </div>
            </div>
         </div>
           
        </section>
    </>
  );
}
export default Home;

