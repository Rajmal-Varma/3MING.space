import React from "react";
import Logo1    from "../assets/3ming_logo.jpg";
import social1 from "../assets/Ellipse 43.png";
import social2 from "../assets/Ellipse 38.png";
import social3 from "../assets/Ellipse 39.png";
import social4 from "../assets/Ellipse 41.png";
import social5 from "../assets/Ellipse 42.png";
 
function Footer() {
  return (
    <footer className="bg-[#141414] pt-2 rounded  dark:text-neutral-200 text-right ">
      <div className="mx-6 font-medium   text-left justify-center align-middle">
        <div className="grid gap-1   grid-row-2  grid-cols-2">
         

<div className="flex p-2 ">
        <img src={Logo1} alt="" className="h-[84px]  pb-1" />

        
      </div>
          <div className="mx-24 pt-4">
            <p className="mb-1">
              <a href="#!" className="text-white dark:text-neutral-200">
                Community
              </a>
            </p>
            <p className="mb-1">
              <a href="#!" className="text-white dark:text-neutral-200">
                faq
              </a>
            </p>
            <p className="mb-1">
              <a href="#!" className="text-white dark:text-neutral-200">
                Help
              </a>
            </p>
          </div>

          <div className=" flex-col mx-4">
            <p className="mb-1 pt-4">
              <a href="#!" className="text-white dark:text-neutral-200">
                About us
              </a>
            </p>
            <p className="mb-1">
              <a href="#!" className="text-white dark:text-neutral-200">
                Terms of use
              </a>
            </p>
            <p className="mb-1">
              <a href="#!" className="text-white dark:text-neutral-200">
                Privacy Policy
              </a>
            </p>
          </div>
          <div className="flex flex-row ">
            <div className="flex flex-row space-x-4 justify-center" >
            <p className="mb-1">
              <a href="#!" className="text-white dark:text-neutral-200">
                Community
              </a>
            </p>
            <p className="mb-1">
              <a href="#!" className="text-white dark:text-neutral-200">
                faq
              </a>
            </p>
            <p className="mb-1">
              <a href="#!" className="text-white dark:text-neutral-200">
                Help
              </a>
            </p>
            </div>
            <div className="flex flex-row space-x-4 justify-center" >
            <p className="mb-1">
              <a href="#!" className="text-white dark:text-neutral-200">
                About us
              </a>
            </p>
            <p className="mb-1">
              <a href="#!" className="text-white dark:text-neutral-200">
                Terms
              </a>
            </p>
            <p className="mb-1">
              <a href="#!" className="text-white dark:text-neutral-200">
                Privacy
              </a>
            </p>
            </div>
            <div>

            </div>
          </div>


          <div className="grid pt-4 ">
            <h6 className="text-xl ml-10 pl-[50px] text-center flex  font-semibold uppercase justify-start text-white">
              social
            </h6>
            <div className="mb-16  flex items-center   pb-4 ml-10 pt-3 justify-start">
              <p>
                <img src={social1} alt="" className="w-7 mr-2" />
              </p>

              <p>
                <img src={social2} alt="" className="w-7 mr-2" />
              </p>

              <p>
                <img src={social3} alt="" className="w-7 mr-2" />
              </p>
              <p>
                <img src={social4} alt="" className="w-7 mr-2" />
              </p>

              <p>
                <img src={social5} alt="" className="w-7 mr-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;