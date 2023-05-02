// import React from "react";
// import Header from "../components/Header";
// import Headline from "../components/Headline";
// import logo from '../assets/images/3ming_logo.jpg';
// import Footer from '../components/Footer';
// import "./About.css"
// const About = () => {
//     return(
//         <div>
//             <Headline />
//             <Header />
//             <div className="box-lox container text-light">
//                 <img className="about-logo mt-5"src={logo}/>
//                 <h3 className="card-title1 text-center text-bold mt-5 mb-5">
//                 "Unlock the power of Web3 streaming - Anywhere, Anytime"
//                 </h3>
//                 <h5 className="abt-text text-center text-bold mt-5 pb-6">3MING will be a web3 games streaming platform. Where we allow creators to stream web3 games. 3MING will help Creators to establish there presence in web3 gaming community and build there own virtual gaming communities.          
//                 </h5>
//                 <div class="social-overlap process-scetion mt100  ">
//               <div class="container">
//                   <div class="row justify-content-center">
//                       <div class="col-md-10">
//                           <div class="social-bar">
//                               <div class="social-icons mb-3 iconpad text-center">
                                 
                                  
//                                   <a  class="slider-nav-item"><i class="fab fa-facebook"></i></a>
//                                   <a  class="slider-nav-item"><i class="fab fa-twitter"></i></a>
//                                   <a href="https://www.youtube.com/watch?v=_XiOcsj3oNI&t=50s" target="_blank" class="slider-nav-item"><i class="fab fa-linkedin"></i></a>                             
//                                   <a href="#" class="slider-nav-item"><i class="fab fa-youtube"></i></a>
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//           </div>
//          </div> 
//                 </div>
//                 <Footer />
//                 </div>
//     )
// };
// //apps
// export default About;
import React from "react";
// import Header from "./components/Header";
import Circle from "../assets/circle.png"
import Roadmap from "../components/Roadmap";
import BackedBy from "../components/BackedBy";
import Headline from "../components/Headline"
import"../index.css"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const About = () => {
  return (
    <div>
      <Headline />
      <Navbar />
    
    <div className="about">
      {/* Header Section */}
      <img
        className=" w-[1545px] h-[1046px] top-[40px] left-[185px] sm:w-[700px] sm:h-[850px] sm:top-[2px] sm:left-[206px] md:w-[600px] md:h-[1040px]  md:top-[2px] md:left-[102px] xl:w-[730px] xl:h-[1050px] xl:top-[10px] xl:left-[140px]"
        src={Circle}
        alt="/"
      />
      {/* About Description */}
      <div className="absolute flex flex-col z-10 top-[55%] mx-4 px-4">
        <h1 className="text-[50px] text-white uppercase font-bold m-2 md:text-4xl lg:text-[32px]">
          Unlock the power of <span className="text-indigo-700">WEB3 </span>
           Streaming
        </h1>
        <p className="text-white w-[800px] px-2 py-4 my-4 text-3xl font-medium md:text-2xl md:w-[640px] lg:w-[680px] lg:text-2xl">
          3MING will be a web3 games streaming platform.
          <br />
          Where we allow creators to stream web3 games.
          <br />
          3MING will help Creators to establish there presence in web3 gaming community and build there own virtual gaming communities.
        </p>
      </div>
      {/* Backed By Section */}
      <BackedBy/>
      {/* RoadMap Section */}
      <Roadmap/>

    </div>
    <Footer />
    </div>
  );
};

export default About;
