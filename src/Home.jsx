import React from 'react'
import web from "../src/images/homeImg.jpg"


const Home = () => {
  return(
    <section id = "header" className = "">

      <div className = "container-fluid nav_bg">
            <div className = 'row'>
              <div className = "col-10 mx-auto">
                <div className = "row">
                <div className = "col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">

                      <h1>
                        Hello! I am<br/><strong className ="brand-name">Sounak Saha</strong>
                      </h1>
                      <h2 className = "my-3">
                          App AND WEB-DEVELOPER
                      </h2>
                      <div className = "col-lg-6 order-1 order-lg-2 header-img">

                        <img src = {web} className ="img-fluid animated" alt = "home img" />

                      </div>
                      

                </div>
                </div>
              </div>
            </div>
          </div>
    </section>
  );
}
export default Home;

