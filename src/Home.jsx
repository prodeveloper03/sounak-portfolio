import React from 'react'
import mobile from "../src/images/homeImg.svg"



const Home = () => {
  return(
    <>
        <section id = "header" className = "d-flex align-item-center">
        <div className = "container-fluid nav_bg">
            <div className = 'row'>
                <div className = "col-10 mx-auto">
                  <div className = "row">
                    <div className = "col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>
                            Hello I am
                          </h1>
                          <h1>
                            <strong className = "brand-name">Sounak Saha</strong>
                          </h1>
                          <h2 className = "my-3">
                            APP AND WEB DEVELOPER
                          </h2>
                          
                    </div>
                    <div className = "col-lg-6 order-1 order-lg-2 profile-img">

                      <img src = {mobile} className = "img-fluid animated" alt = "home img" />
                      
              
                        

                      </div>
                    </div>
                  </div>
                </div>
             </div>
           
        </section>
    </>
  );
}
export default Home;

