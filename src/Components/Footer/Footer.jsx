import { Link } from "react-router-dom";
import pic1 from "../../assets/Footer/pic1.jpg";
import pic2 from "../../assets/Footer/pic2.jpg";
import pic3 from "../../assets/Footer/pic3.jpg";
import pic4 from "../../assets/Footer/pic4.jpg";
import pic5 from "../../assets/Footer/pic5.jpg";
import pic6 from "../../assets/Footer/pic6.jpg";
import pic7 from "../../assets/Footer/pic7.jpg";
import pic8 from "../../assets/Footer/pic8.jpg";
import pic9 from "../../assets/Footer/pic9.jpg";

import { Icon } from "@iconify/react";

import tyre from "../../assets/Footer/Left-Car-tyre.png";
import car from "../../assets/Footer/Left-Car.png";
import tree from "../../assets/Footer/Righttreepic.png";

import Logo from "../../Components/Navbar/Logo/Logo";
function Footer() {
  return (
    <>
      <div className="bg-yellow-light w-full py-[6%] md:py-[10%] relative text-center overflow-hidden">
        <div className="px-[2%] sm:px-[8%] lg:px-[10%] mb-10">
          <h4 className="pb-8 text-2xl md:text-4xl text-secondary font-medium">
            Suivez nous sur Instagram
          </h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-9 gap-4 sm:gap-5 max-w-full mx-auto">
            <div className="w-full h-full gallery-item">
              <Link
                to="https://www.instagram.com"
                className="relative block w-full overflow-hidden rounded-xl group"
              >
                <img
                  src={pic1}
                  alt="gallerie"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-secondary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-22.5 h-22.5 rounded-full bg-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Icon icon="lets-icons:insta" width="28" height="28" />
                  </span>
                </div>
              </Link>
            </div>
            <div className="w-full h-full gallery-item">
              <Link
                to="https://www.instagram.com"
                className="relative block w-full overflow-hidden rounded-xl group"
              >
                <img
                  src={pic2}
                  alt="gallerie"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-secondary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-22.5 h-22.5 rounded-full bg-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Icon icon="lets-icons:insta" width="28" height="28" />
                  </span>
                </div>
              </Link>
            </div>
            <div className="w-full h-full gallery-item">
              <Link
                to="https://www.instagram.com"
                className="relative block w-full overflow-hidden rounded-xl group"
              >
                <img
                  src={pic3}
                  alt="gallerie"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-secondary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-22.5 h-22.5 rounded-full bg-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Icon icon="lets-icons:insta" width="28" height="28" />
                  </span>
                </div>
              </Link>
            </div>
            <div className="w-full h-full gallery-item">
              <Link
                to="https://www.instagram.com"
                className="relative block w-full overflow-hidden rounded-xl group"
              >
                <img
                  src={pic4}
                  alt="gallerie"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-secondary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-22.5 h-22.5 rounded-full bg-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Icon icon="lets-icons:insta" width="28" height="28" />
                  </span>
                </div>
              </Link>
            </div>
            <div className="w-full h-full gallery-item">
              <Link
                to="https://www.instagram.com"
                className="relative block w-full overflow-hidden rounded-xl group"
              >
                <img
                  src={pic5}
                  alt="gallerie"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-secondary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-22.5 h-22.5 rounded-full bg-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Icon icon="lets-icons:insta" width="28" height="28" />
                  </span>
                </div>
              </Link>
            </div>
            <div className="w-full h-full gallery-item">
              <Link
                to="https://www.instagram.com"
                className="relative block w-full overflow-hidden rounded-xl group"
              >
                <img
                  src={pic6}
                  alt="gallerie"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-secondary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-22.5 h-22.5 rounded-full bg-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Icon icon="lets-icons:insta" width="28" height="28" />
                  </span>
                </div>
              </Link>
            </div>
            <div className="w-full h-full gallery-item">
              <Link
                to="https://www.instagram.com"
                className="relative block w-full overflow-hidden rounded-xl group"
              >
                <img
                  src={pic7}
                  alt="gallerie"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-secondary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-22.5 h-22.5 rounded-full bg-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Icon icon="lets-icons:insta" width="28" height="28" />
                  </span>
                </div>
              </Link>
            </div>
            <div className="w-full h-full gallery-item">
              <Link
                to="https://www.instagram.com"
                className="relative block w-full overflow-hidden rounded-xl group"
              >
                <img
                  src={pic8}
                  alt="gallerie"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-secondary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-22.5 h-22.5 rounded-full bg-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Icon icon="lets-icons:insta" width="28" height="28" />
                  </span>
                </div>
              </Link>
            </div>
            <div className="w-full h-full gallery-item">
              <Link
                to="https://www.instagram.com"
                className="relative block w-full overflow-hidden rounded-xl group"
              >
                <img
                  src={pic9}
                  alt="gallerie"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-secondary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-22.5 h-22.5 rounded-full bg-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Icon icon="lets-icons:insta" width="28" height="28" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="md:absolute left-0 bottom-0 z-1 w-full border-b-4 border-secondary">
          <div className="marq-car z-1">
            <img src={car} alt="véhicule" />
            <span className="tyre-1">
              <img src={tyre} alt="pneu-1" className="spin-tyres" />
            </span>
            <span className="tyre-2">
              <img src={tyre} alt="pneu-2" className="spin-tyres" />
            </span>
          </div>

          <div className="right-tree md:block hidden">
            <img src={tree} alt="île" />
          </div>
        </div>
      </div>

      <div className="footer-menu flex flex-col justify-between xl:flex-row gap-10 xl:gap-16 px-5 sm:px-[8%] lg:px-[10%] bg-yellow-light py-[6%]">
        <div className="footer-item text-start xl:max-w-70">
          <Logo className="text-black!" />
          <p className="pt-5 text-gray-500/60">
            Nomadia est une agence de stratégie et de création de contenu
            plusieurs fois récompensée, spécialisée dans le marketing du voyage.
          </p>
          <ul className="pt-6 flex items-center flex-wrap">
            <li className="social-icon inline-flex h-11.5 w-11.5 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg">
              <Link
                to="https://x.com"
                className="h-9 w-9 flex justify-center items-center bg-secondary text-white text-[18px] rounded-[50%] transition-all duration-500 ease-in-out group-hover:text-yellow group-hover:rounded-[10px]"
              >
                <Icon icon="codicon:twitter" width="16" height="16" />
              </Link>
            </li>
            <li className="social-icon inline-flex h-11.5 w-11.5 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg">
              <Link
                to="https://www.facebook.com"
                className="h-9 w-9 flex justify-center items-center bg-secondary text-white text-[18px] rounded-[50%] transition-all duration-500 ease-in-out group-hover:text-yellow group-hover:rounded-[10px]"
              >
                <Icon icon="ic:outline-facebook" width="24" height="24" />
              </Link>
            </li>
            <li className="social-icon inline-flex h-11.5 w-11.5 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg">
              <Link
                to="https://instagram.com"
                className="h-9 w-9 flex justify-center items-center bg-secondary text-white text-[18px] rounded-[50%] transition-all duration-500 ease-in-out group-hover:text-yellow group-hover:rounded-[10px]"
              >
                <Icon icon="mingcute-instagram-line" width="24" height="24" />
              </Link>
            </li>
            <li className="social-icon inline-flex h-11.5 w-11.5 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg">
              <Link
                to="https://youtube.com"
                className="h-9 w-9 flex justify-center items-center bg-secondary text-white text-[18px] rounded-[50%] transition-all duration-500 ease-in-out group-hover:text-yellow group-hover:rounded-[10px]"
              >
                <Icon icon="line-md:youtube" width="24" height="24" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-24 w-full xl:w-auto">
          <div className="footer-item">
            <h4 className="text-2xl sm:text-3xl text-secondary mb-5">
              Informations
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="hover:text-yellow transition-colors duration-300 text-secondary font-medium"
                >
                  A propos de nous
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="hover:text-yellow transition-colors duration-300 text-secondary font-medium"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="hover:text-yellow transition-colors duration-300 text-secondary font-medium"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow transition-colors duration-300 text-secondary font-medium"
                >
                  Le groupe
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow transition-colors duration-300 text-secondary font-medium"
                >
                  Actualités et articles
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-item">
            <h4 className="text-2xl sm:text-3xl text-secondary mb-5">
              Destination
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow transition-colors duration-300 text-secondary font-medium"
                >
                  Tokyo
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow transition-colors duration-300 text-secondary font-medium"
                >
                  Paris
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow transition-colors duration-300 text-secondary font-medium"
                >
                  Londres
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow transition-colors duration-300 text-secondary font-medium"
                >
                  Madrid
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow transition-colors duration-300 text-secondary font-medium"
                >
                  Rome
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-item">
            <h4 className="text-2xl sm:text-3xl text-secondary mb-5">
            Mentions légales
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow transition-colors duration-300 text-secondary font-medium"
                >
                  Conditions générales
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow transition-colors duration-300 text-secondary font-medium"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-yellow transition-colors duration-300 text-secondary font-medium"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow transition-colors duration-300 text-secondary font-medium"
                >
                  Carrières
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow transition-colors duration-300 text-secondary font-medium"
                >
                  Aide
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
