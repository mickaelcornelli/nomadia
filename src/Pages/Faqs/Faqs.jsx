import { Link } from "react-router-dom";
import sectionbanner from "/assets/section-banner.jpg";

import faqimg from "/assets/faq-media.png";
import contactbg from "/assets/con-sec-bg.jpg";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Mainbtn from "../../Components/Buttons/Mainbtn";

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      id: 1,
      question: "1 - Comment réserver un voyage sur Nomadia ?",
      answer:
        "Vous pouvez réserver votre voyage directement sur Nomadia. Il vous suffit de choisir la destination ou l'expérience qui vous plaît, de sélectionner vos dates, puis de suivre les étapes de réservation en ligne.",
    },
    {
      id: 2,
      question: "2 - Quels types de voyages puis-je trouver sur Nomadia ?",
      answer:
        "Nomadia vous permet de découvrir une grande variété de destinations et d'expériences : séjours, activités, excursions, visites, aventures et bien plus encore. Vous pouvez explorer les offres selon vos envies et votre destination.",
    },
    {
      id: 3,
      question:
        "3 - Puis-je rechercher une destination ou une activité spécifique ?",
      answer:
        "Oui. Vous pouvez utiliser les outils de recherche de Nomadia pour trouver facilement une destination, une activité ou une expérience spécifique. Filtrez vos résultats selon vos critères pour trouver l'offre qui vous correspond.",
    },
    {
      id: 4,
      question:
        "4 - Comment savoir si une expérience est disponible à mes dates ?",
      answer:
        "Les disponibilités sont indiquées directement sur la page de chaque expérience. Sélectionnez vos dates pour vérifier les créneaux disponibles avant de procéder à la réservation.",
    },
    {
      id: 5,
      question: "5 - Puis-je modifier ou annuler ma réservation ?",
      answer:
        "Les conditions de modification ou d'annulation dépendent de l'expérience réservée. Consultez les conditions indiquées sur la page de l'offre avant de réserver. Si vous avez besoin d'aide, notre équipe est là pour vous accompagner.",
    },
    {
      id: 6,
      question: "6 - Le paiement en ligne est-il sécurisé ?",
      answer:
        "Oui. Nomadia accorde une grande importance à la sécurité de vos paiements. Les transactions sont effectuées via un système de paiement sécurisé afin de protéger vos informations personnelles et bancaires.",
    },
    {
      id: 7,
      question:
        "7 - Comment vais-je recevoir la confirmation de ma réservation ?",
      answer:
        "Une fois votre réservation confirmée, vous recevrez les informations de votre réservation à l'adresse e-mail indiquée lors de votre commande. Vous pourrez ainsi retrouver facilement les détails de votre voyage ou de votre expérience.",
    },
    {
      id: 8,
      question:
        "8 - Que faire si j'ai besoin d'aide avant ou après ma réservation ?",
      answer:
        "Notre équipe est disponible pour vous accompagner à chaque étape de votre voyage. Si vous avez une question concernant une destination, une expérience ou une réservation, n'hésitez pas à nous contacter.",
    },
  ];

  return (
    <>
      <div
        className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
        style={{ backgroundImage: `url(${sectionbanner})` }}
      >
        <div className="section-content z-0 text-center">
          <h4 className="text-2xl lg:text-4xl xl:text-6xl font-extrabold text-secondary">
            Questions fréquentes
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
                to="/faqs"
                className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"
              >
                Questions fréquentes
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="px-[2%] sm:px-[8%] py-[6%] md:py-[8%] flex justify-between items-start xl:flex-row flex-col gap-12 h-auto xl:h-250 bg-[#efffff]">
        <div className="w-full xl:w-[50%] title relative h-full">
          <h1 className="text-secondary text-4xl md:text-6xl font-bold">
            <span className="text-yellow"> Trouvez </span> les réponses à vos
            questions
          </h1>
          <p className="text-secondary my-2 text-lg">
            Retrouvez ici les réponses aux questions les plus fréquemment
            posées.
          </p>
          <div className="relative">
            <img src={faqimg} alt="faq-image" className="sm:ms-10" />
            <div className="faq-element flex-wrap">
              <Icon icon="la:quote-left" width="32" height="32" />
              <h3>Laissez-nous vous aider!</h3>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-[50%]">
          <div className="service-table2 mb-8">
            {faqs.map((faq, index) => (
              <li
                key={faq.id}
                className="p-5 border-b border-gray-200 list-none!"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center cursor-pointer"
                >
                  <span className="text-lg font-medium text-secondary text-start">
                    {faq.question}
                  </span>

                  <Icon
                    icon="lsicon:right-outline"
                    width="35"
                    height="35"
                    className={`text-secondary transition-all duration-300 ${
                      activeIndex === index ? "rotate-90 text-yellow" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-40 pt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-sm md:text-lg font-light text-secondary">
                    {faq.answer}
                  </p>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>

      <div
        className="contact-faq px-[2%] sm:px-[8%] py-[6%] md:py-[10%] bg-no-repeat bg-cover bg-center relative"
        style={{ backgroundImage: `url(${contactbg})` }}
      >
        <div className="absolute bg-black/30 top-0 left-0 w-full h-full"></div>
        <div className="w-full lg:w-[50%] title relative h-full p-5 sm:py-10 sm:px-10 md:py-15 md:px-12.5 rounded-2xl border border-gray-200 backdrop-blur-[5px]">
          <h1 className="text-white text-3xl md:text-4xl xl:text-5xl font-bold pb-3">
            <span className="text-yellow">Contactez-nous</span> et échangez avec
            notre équipe!
          </h1>

          <p className="text-gray-200 pb-5">
            Nous serions ravis d’échanger avec vous. Notre équipe est à votre
            écoute pour répondre à vos questions et vous accompagner dans vos
            projets de voyage.
          </p>
          <form method="post" className="space-y-8">
            <input
              type="text"
              placeholder="Saisir votre nom"
              className="w-full rounded-full px-6 py-4 text-gray-700 placeholder-gray-500 font-light bg-white outline-none transition-duration-300"
              required
            />
            <input
              type="email"
              placeholder="Saisir votre adresse mail"
              className="w-full rounded-full px-6 py-4 text-gray-700 placeholder-gray-500 font-light bg-white outline-none transition-duration-300"
              required
            />
            <input
              type="text"
              placeholder="Motif"
              className="w-full rounded-full px-6 py-4 text-gray-700 placeholder-gray-500 font-light bg-white outline-none transition-duration-300"
              required
            />

            <textarea
              rows="5"
              placeholder="Message"
              className="w-full rounded-3xl px-6 py-4 text-gray-700 placeholder-gray-500 font-light bg-white outline-none transition-duration-300"
              required
            ></textarea>

            <Mainbtn text={"Envoyer le message"}/>
          </form>
        </div>
      </div>
    </>
  );
}

export default Faqs;
