import React from "react";
import sectionbanner from "/assets/section-banner.jpg";
import { Link } from "react-router-dom";
import Mainbtn from "../../Components/Buttons/Mainbtn";
import { Icon } from "@iconify/react";

function Contact() {
  return (
    <>
      <div
        className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
        style={{ backgroundImage: `url(${sectionbanner})` }}
      >
        <div className="section-content z-0 text-center">
          <h4 className="text-2xl lg:text-4xl xl:text-6xl font-extrabold text-secondary">
            Nous contacter
          </h4>
          <ul className="flex items-center flex-wra^p justify-center gap-2">
            <li>
              <Link
                to="/"
                className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"
              >
                Accueil
              </Link>
            </li>
            <span className="text-secondary">/</span>
            <li>
              <Link
                to="/contact"
                className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"
              >
                Nous contacter
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] bg-[#e6f1f3]">
        <div className="bg-white p-5 md:p-10 rounded-3xl w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2317110826225!2d2.3234546768054187!3d48.87285919968768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e348ae98c39%3A0xfc481a03cea45e71!2s29%20Rue%20Tronchet%2C%2075008%20Paris!5e0!3m2!1sfr!2sfr!4v1789985074893!5m2!1sfr!2sfr"
            style={{ width: "100%", borderRadius: "20px", height: "400px" }}
          ></iframe>

          <div className="w-full flex justify-between items-center flex-col lg:flex-row gap-10 pt-10">
            <div className="bg-yellow-light w-full p-8 md:p-10 rounded-[40px] shadow-xl lg:w-1/2">
              <h1 className="text-secondary text-4xl md:text-6xl font-bold">
                <span className="text-yellow"> Contactez-nous</span> et
                échangeons !
              </h1>
              <p className="text-secondary my-2 text-lg w-full max-w-full wrap-break-words">
                Une question, une envie d’évasion ou un projet de voyage ? Notre
                équipe est à votre écoute pour vous accompagner et donner vie à
                vos prochaines aventures.
              </p>
              <form method="post" className="space-y-6">
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full rounded-full px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none"
                  required
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-full px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none"
                  required
                />

                <input
                  type="text"
                  placeholder="Objet"
                  className="w-full rounded-full px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none"
                  required
                />

                <textarea
                  rows="5"
                  placeholder="Message"
                  className="w-full rounded-3xl px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none resize-none"
                  required
                ></textarea>

                <Mainbtn text={"Envoyer"} />
              </form>
            </div>
            <div className="flex flex-col lg:w-1/2 w-full">
              <h4 className="text-5xl font-semibold text-secondary">
                Contactez-nous
              </h4>
              <p className="text-gray-500 mb-8">
                Nous serions ravis d’échanger avec vous. Remplissez le
                formulaire ci-dessous pour nous faire part de votre demande.
              </p>
              <div className="flex justify-between items-start flex-col space-y-10">
                <div className="flex items-center flex-wrap gap-6">
                  <div className="w-20 h-20 bg-[#45869d] rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                      <Icon
                        icon="line-md:phone-call"
                        width="35"
                        height="35"
                        className="text-[#53a4c0]"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-secondary text-lg">Nous contacter</p>
                    <p className="text-secondary text-2xl font-semibold tracking-wide">
                      +33 5 81 33 52 03
                    </p>
                  </div>
                </div>
                <div className="flex items-center flex-wrap gap-6">
                  <div className="w-20 h-20 bg-rose-400 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                      <Icon
                        icon="oui:email"
                        width="35"
                        height="35"
                        className="text-rose-400"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-secondary text-lg">
                      Une question ? Écrivez-nous !
                    </p>
                    <p className="text-secondary text-2xl font-semibold tracking-wide">
                      nomadia-info@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center flex-wrap gap-6">
                  <div className="w-20 h-20 bg-teal-700 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                      <Icon
                        icon="lsicon:house-outline"
                        width="35"
                        height="35"
                        className="text-teal-700"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-secondary text-lg">Adresse</p>
                    <p className="text-secondary text-2xl font-semibold tracking-wide">
                      29 Rue Tronchet, <br />
                      75008 Paris
                    </p>
                  </div>
                </div>
                <h4 className="text-5xl pt-15 font-kaushan! font-medium">
                  Parlons de <span className="text-yellow">votre projet</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
