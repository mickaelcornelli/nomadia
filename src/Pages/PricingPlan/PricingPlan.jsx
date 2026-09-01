import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import sectionbanner from "../../assets/section-banner.jpg";
import titleShape from "../../assets/Index/BookingSteps/Title-Shape.png";
import pricingplan from "../../assets/PricingPage/pricebg.png";

import tour1 from "../../assets/PricingPage/tour-01.jpg";
import tour2 from "../../assets/PricingPage/tour-02.jpg";
import tour3 from "../../assets/PricingPage/tour-03.jpg";

import step1img from "../../assets/PricingPage/destination-01.png";
import step2img from "../../assets/PricingPage/destination-02.png";
import step3img from "../../assets/PricingPage/destination-03.png";

import des1 from "../../assets/PricingPage/choose-destination.png";
import des2 from "../../assets/PricingPage/make-payment-1.png";
import des3 from "../../assets/PricingPage/ready-for-travelling.png";

import bag from "../../assets/PricingPage/bag.png";
import tent from "../../assets/PricingPage/tent.png";
import frmimg from "../../assets/PricingPage/frm-left.jpg";
import Mainbtn from "../../Components/Buttons/Mainbtn";
function PricingPlan() {
  return (
    <>
      <div
        className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
        style={{ backgroundImage: `url(${sectionbanner})` }}
      >
        <div className="section-content z-0 text-center">
          <h4 className="text-2xl lg:text-4xl xl:text-6xl font-extrabold text-secondary">
            Nos tarifs
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
                to="/tourguide"
                className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"
              >
                Nos tarifs
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="pricing-plan px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] bg-[#effefe] bg-no-repeat relative bg-cover"
        style={{ backgroundImage: `url(${pricingplan})` }}
      >
        <div className="title flex flex-col justify-center items-center text-center relative pb-18">
          <h1 className="text-secondary text-4xl md:text-6xl font-bold">
            <span className="text-yellow"> Le prix </span> pour voyager à
            travers le monde
          </h1>
          <p className="text-secondary my-2 text-lg">
            Choisissez l’offre qui correspond à votre style de voyage et
            profitez d’une expérience pensée pour vous.
          </p>
          <img
            src={titleShape}
            alt="Trajet de vol illustré avec un avion"
            className="w-[35%] object-contain absolute -bottom-12"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          <div className="tour-price-card relative z-9">
            <div className="tour-image w-full mb-10">
              <img
                src={tour1}
                alt="tour-image"
                className="bg-center rounded-full w-full"
              />
            </div>

            <div className="content">
              <div className="price-head flex justify-between items-center w-full pb-5">
                <h4 className="text-yellow/80 text-3xl font-medium">
                  Essentiel
                </h4>

                <div className="plan-price text-center">
                  <span className="block text-4xl font-semibold text-secondary">
                    49€
                  </span>
                  <span className="text-secondary">Par jour</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon
                    icon="fluent:arrow-circle-right-16-regular"
                    width="24"
                    height="24"
                    className="text-yellow"
                  />
                  Hôtel 3 étoiles
                </li>

                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon
                    icon="fluent:arrow-circle-right-16-regular"
                    width="24"
                    height="24"
                    className="text-yellow"
                  />
                  Transports locaux
                </li>

                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon
                    icon="fluent:arrow-circle-right-16-regular"
                    width="24"
                    height="24"
                    className="text-yellow"
                  />
                  Activités essentielles
                </li>

                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon
                    icon="fluent:arrow-circle-right-16-regular"
                    width="24"
                    height="24"
                    className="text-yellow"
                  />
                  Assistance téléphonique
                </li>

                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon
                    icon="fluent:arrow-circle-right-16-regular"
                    width="24"
                    height="24"
                    className="text-yellow"
                  />
                  Repas et collations inclus
                </li>
              </ul>

              <div className="flex justify-center items-center">
                <Mainbtn text="Réserver maintenant" />
              </div>
            </div>
          </div>

          <div className="tour-price-card relative z-9">
            <div className="tour-image w-full mb-10">
              <img
                src={tour2}
                alt="tour-image"
                className="bg-center rounded-full w-full"
              />
            </div>

            <div className="content">
              <div className="price-head flex justify-between items-center w-full pb-5">
                <h4 className="text-yellow/80 text-3xl font-medium">Confort</h4>

                <div className="plan-price text-center">
                  <span className="block text-4xl font-semibold text-secondary">
                    79€
                  </span>
                  <span className="text-secondary">Par jour</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon
                    icon="fluent:arrow-circle-right-16-regular"
                    width="24"
                    height="24"
                    className="text-yellow"
                  />
                  Hôtel 4 étoiles
                </li>

                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon
                    icon="fluent:arrow-circle-right-16-regular"
                    width="24"
                    height="24"
                    className="text-yellow"
                  />
                  Transports inclus
                </li>

                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon
                    icon="fluent:arrow-circle-right-16-regular"
                    width="24"
                    height="24"
                    className="text-yellow"
                  />
                  Excursions et activités sélectionnées
                </li>

                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon
                    icon="fluent:arrow-circle-right-16-regular"
                    width="24"
                    height="24"
                    className="text-yellow"
                  />
                  Accompagnement personnalisé
                </li>

                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon
                    icon="fluent:arrow-circle-right-16-regular"
                    width="24"
                    height="24"
                    className="text-yellow"
                  />
                  Petit-déjeuner et repas sélectionnés
                </li>
              </ul>

              <div className="flex justify-center items-center">
                <Mainbtn text="Réserver maintenant" />
              </div>
            </div>
          </div>

          <div className="tour-price-card relative z-9">
            <div className="tour-image w-full mb-10">
              <img
                src={tour3}
                alt="tour-image"
                className="bg-center rounded-full w-full"
              />
            </div>

            <div className="content">
              <div className="price-head flex justify-between items-center w-full pb-5">
                <h4 className="text-yellow/80 text-3xl font-medium">
                  Prestige
                </h4>

                <div className="plan-price text-center">
                  <span className="block text-4xl font-semibold text-secondary">
                    129€
                  </span>
                  <span className="text-secondary">Par jour</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon
                    icon="fluent:arrow-circle-right-16-regular"
                    width="24"
                    height="24"
                    className="text-yellow"
                  />
                  Hôtel 5 étoiles
                </li>

                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon
                    icon="fluent:arrow-circle-right-16-regular"
                    width="24"
                    height="24"
                    className="text-yellow"
                  />
                  Chauffeur privés
                </li>

                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon
                    icon="fluent:arrow-circle-right-16-regular"
                    width="24"
                    height="24"
                    className="text-yellow"
                  />
                  Activités exclusives
                </li>

                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon
                    icon="fluent:arrow-circle-right-16-regular"
                    width="24"
                    height="24"
                    className="text-yellow"
                  />
                  Conciergerie
                </li>

                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon
                    icon="fluent:arrow-circle-right-16-regular"
                    width="24"
                    height="24"
                    className="text-yellow"
                  />
                  Assistance 24h/24
                </li>

                <li className="flex items-center gap-2 text-secondary font-medium">
                  <Icon
                    icon="fluent:arrow-circle-right-16-regular"
                    width="24"
                    height="24"
                    className="text-yellow"
                  />
                  Repas haut de gamme
                </li>
              </ul>

              <div className="flex justify-center items-center">
                <Mainbtn text="Réserver maintenant" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="booking px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] relative">
        <div className="booking-content w-full flex justify-between items-center flex-wrap lg:flex-nowrap gap-5 lg:gap-10 pb-10">
          <div className="flex flex-col">
            <h1 className="text-secondary text-4xl md:text-6xl font-bold">
              <span className="text-yellow"> Etapes rapides</span> avant de
              réserver travers le monde
            </h1>
            <p className="text-secondary my-2 text-lg lg:w-lg">
              En quelques étapes simples, préparez votre prochaine aventure et
              réservez votre expérience en toute sérénité.
            </p>
          </div>
          <Mainbtn to="/about" text="En savoir plus" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols2 xl:grid-cols-3 gap-10">
          <div className="step step-1 relative">
            <div className="step-icon mb-5 text-center">
              <div className="icon-black w-30 h-30 bg-[#45869d] rounded-full inline-flex justify-center items-center">
                <div className="icon-front w-22.5 h-22.5 rounded-full bg-white inline-flex justify-center items-center shadow-2xl">
                  <img
                    src={step1img}
                    alt="Etape 1"
                    className="step-img step1-image"
                  />
                </div>
              </div>
            </div>

            <div className="step-content">
              <h4 className="text-3xl font-medium text-white pb-2">
                Choisir une destination
              </h4>
              <p>
                Il vous suffit de choisir votre destination préférée, puis de
                poursuivre votre réservation.
              </p>
              <div className="flex item-end justify-between">
                <div className="media">
                  <img src={des1} alt="Choisir une destination" />
                </div>
                <span className="bld-num">01</span>
              </div>
            </div>
          </div>

          <div className="step step-2 relative">
            <div className="step-icon mb-5 text-center">
              <div className="icon-black w-30 h-30 bg-[#ce8594] rounded-full inline-flex justify-center items-center">
                <div className="icon-front w-22.5 h-22.5 rounded-full bg-white inline-flex justify-center items-center shadow-2xl">
                  <img
                    src={step2img}
                    alt="Etape 2"
                    className="step-img step1-image"
                  />
                </div>
              </div>
            </div>

            <div className="step-content">
              <h4 className="text-3xl font-medium text-white pb-2">
                Effectuer le paiement
              </h4>
              <p>
                Sécurisez votre réservation en quelques clics grâce à notre
                paiement en ligne simple et sécurisé.
              </p>
              <div className="flex item-end justify-between">
                <div className="media">
                  <img src={des2} alt="Choisir une destination" />
                </div>
                <span className="bld-num">02</span>
              </div>
            </div>
          </div>

          <div className="step step-3 relative">
            <div className="step-icon mb-5 text-center">
              <div className="icon-black w-30 h-30 bg-[#ce8594] rounded-full inline-flex justify-center items-center">
                <div className="icon-front w-22.5 h-22.5 rounded-full bg-white inline-flex justify-center items-center shadow-2xl">
                  <img
                    src={step3img}
                    alt="Etape 3"
                    className="step-img step3-image"
                  />
                </div>
              </div>
            </div>

            <div className="step-content">
              <h4 className="text-3xl font-medium text-white pb-2">
                Prêt à partir à l’aventure
              </h4>
              <p>
                Sécurisez votre réservation en quelques clics grâce à notre
                paiement en ligne simple et sécurisé.
              </p>
              <div className="flex item-end justify-between">
                <div className="media">
                  <img src={des3} alt="Choisir une destination" />
                </div>
                <span className="bld-num">03</span>
              </div>
            </div>
          </div>
        </div>

        <div className="left-bag absolute left-0 bottom-0 md:block hidden">
          <img src={bag} alt="sac à dos" className="-z-1" />
        </div>

        <div className="left-tent absolute right-0 bottom-0 md:block hidden">
          <img src={tent} alt="tente" className="-z-1" />
        </div>
      </div>

      <div className="pricing-content py-[6%] md:py-[10%] ring-offset-sky flex flex-col lg:flex-row bg-yellow-light/40">
        <div className="relative w-full lg:w-1/2 min-h-100 lg:min-h-auto overflow-hidden">
          <img
            src={frmimg}
            alt="bg"
            className="absolute inset-0 w-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/50 flex items-end p-8 lg:p-12">
            <h4 className="text-white text-3xl md:text-4xl font-medium font-kaushan!">
              Bonjour !
              <span className="block text-lg md:text-xl font-medium mt-2 font-afacad">
                Comment puis-je vous aider à préparer votre prochain voyage ?
              </span>
            </h4>
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-6 md:p-10 flex items-center"></div>
        <div className="bg-yellow-light w-full p-8 md:p-10 rounded-[40px] shadow-xl">
          <h1 className="text-secondary text-4xl md:text-6xl font-bold">
            <span className="text-yellow"> Contactez-nous</span> et échangeons !
          </h1>
          <p className="text-secondary my-2 text-lg lg:w-lg">
            Une question, une envie d’évasion ou un projet de voyage ? Notre
            équipe est à votre écoute pour vous accompagner et donner vie à vos
            prochaines aventures.
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
      </div>
    </>
  );
}

export default PricingPlan;
