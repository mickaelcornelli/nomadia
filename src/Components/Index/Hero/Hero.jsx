import headerbg from "../../../assets/index/Hero/slider-bg.jpg";
import heroimg from "../../../assets/index/Hero/right-pic.png";
import plane from "../../../assets/index/Hero/Plane-With-Line.png";
import cloud1 from "../../../assets/index/Hero/Cloud1.png";
import cloud2 from "../../../assets/index/Hero/Cloud2.png";
import Mainbtn from "../../Buttons/Mainbtn";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div
        className="hero relative bg-cover bg-center min-h-screen xl:min-h-0 overflow-x-hidden"
        style={{ backgroundImage: `url(${headerbg})` }}
      >
        <div className="bg-overlay mx-auto px-5 sm:px-8 md:px-12 py-16 md:py-24 xl:h-screen flex items-center xl:flex-row flex-col xl:gap-0 gap-20">
          <div className="hero-content w-full xl:ps-12.5 z-1">
            <h3 className="text-5xl text-white font-kaushan!">Explore</h3>
            <h1 className="font-kaushan! font-semibold text-[160px] text-white hero-title">
              Le Monde
            </h1>
            <div className="mt-5 md:mt-10">
              <p className="text-white pera-text">
                La sécurité de nos clients à chaque étape de leur voyage
              </p>
              
                <Mainbtn className="mb-8" text={"Nous contacter"} to={"/contact"} />
         
              <div className="flex items-start md:items-center flex-col md:gap-0 gap-4 md:flex-row text-gray-50">
                <span className="follow-icons">Nous suivre</span>
                <ul className="flex items-center space-x-3">
                  <li>
                    <Link
                      to="https://www.facebook.com"
                      className="hover:text-prim hover:translate-y-2 transition-all duration-300"
                    >
                      <Icon
                        icon="ic:baseline-facebook"
                        width="24"
                        height="24"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.instagram.com"
                      className="hover:text-prim hover:translate-y-2 transition-all duration-300"
                    >
                      <Icon icon="lets-icons:insta" width="24" height="24" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.linkedin.com"
                      className="hover:text-prim hover:translate-y-2 transition-all duration-300"
                    >
                      <Icon icon="ri:linkedin-fill" width="24" height="24" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.youtube.com"
                      className="hover:text-prim hover:translate-y-2 transition-all duration-300"
                    >
                      <Icon icon="mdi:youtube" width="24" height="24" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="hero-image w-full xl:w-1/2 relative xl:absolute flex justify-center items-center right-0 xl:right-35 xl:bottom-0 h-full">
            <img
              src={heroimg}
              alt="Image principale"
              className="w-full h-full xl:w-auto z-2 xl:translate-y-15"
            />
            <div className="plan absolute w-102 h-auto top-50 -left-10 xl:block hidden">
              <img src={plane} alt="Image d'avion" className="w-full h-full" />
            </div>
            <div className="offer flex flex-col">
              <span>Profitez de</span>
              <span>50%</span>
              <span>de réduction</span>
            </div>
          </div>
          <div className="circle-area absolute top-0 left-0 bottom-0 right-0 overflow-hidden">
            <div className="circle1-wrap">
              <div className="rotate-center circle-bg circle1-bg">
                <span></span>
              </div>
            </div>
            <div className="circle2-wrap">
              <div className="rotate-center-reverse circle-bg circle2-bg"></div>
            </div>
            <div className="circle3-wrap">
              <div className="rotate-center circle-bg circle3-bg">
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div className="cloud1">
          <div className="cloud-image1 relative overflow-hidden z-0">
            <img src={cloud1} alt="Image de nuage" className="w-auto" />
          </div>
        </div>
        <div className="cloud2">
          <div className="cloud-image2 relative overflow-hidden z-0">
            <img src={cloud2} alt="Image de nuage" className="w-auto" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
