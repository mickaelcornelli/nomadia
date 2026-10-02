import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import sectionbanner from "/assets/section-banner.jpg";
import { Icon } from "@iconify/react";

import gallery1 from "/assets/ServicesPage/ServiceDetails/gallery-01.jpg";
import gallery2 from "/assets/ServicesPage/ServiceDetails/gallery-02.jpg";
import gallery3 from "/assets/ServicesPage/ServiceDetails/gallery-03.jpg";
import gallery4 from "/assets/ServicesPage/ServiceDetails/gallery-04.jpg";
import gallery5 from "/assets/ServicesPage/ServiceDetails/gallery-05.jpg";
import gallery6 from "/assets/ServicesPage/ServiceDetails/gallery-06.jpg";

import services from "../../Data/Services.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
function ServicesDetails() {
  const { id } = useParams();
  const service = services.find((item) => item.id === parseInt(id));

  if (!service) {
    return <h2 className="text-center mt-20">Service introuvable</h2>;
  }

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const gallery = [
    { image: gallery1 },
    { image: gallery2 },
    { image: gallery3 },
    { image: gallery4 },
    { image: gallery5 },
    { image: gallery6 },
  ];

  const faqs = [
    {
      id: 1,
      question: "01 - Comment puis-je réserver un voyage ?",
      answer:
        "Vous pouvez réserver votre voyage directement depuis notre site en choisissant votre destination, vos dates et les services souhaités. Notre équipe reste également disponible pour vous accompagner dans la création d'un séjour personnalisé.",
    },
    {
      id: 2,
      question: "02 - Puis-je personnaliser mon itinéraire ?",
      answer:
        "Oui, nous proposons des voyages sur mesure adaptés à vos envies, votre budget et votre rythme. Nos experts vous aident à créer un itinéraire unique avec les activités qui vous correspondent.",
    },
    {
      id: 3,
      question: "03 - Quels services sont inclus dans vos offres ?",
      answer:
        "Nos offres peuvent inclure l'hébergement, le transport, les transferts, les visites guidées, les activités et différents services pour rendre votre voyage plus confortable et agréable.",
    },
    {
      id: 4,
      question: "04 - Proposez-vous des guides touristiques ?",
      answer:
        "Oui, nos guides professionnels vous accompagnent pour découvrir chaque destination, son histoire, sa culture et ses lieux incontournables avec des informations enrichissantes.",
    },
    {
      id: 5,
      question:
        "05 - Est-il possible de modifier ou d'annuler une réservation ?",
      answer:
        "Les modifications et annulations sont possibles selon les conditions de votre réservation. Contactez notre équipe afin que nous puissions vous proposer la meilleure solution.",
    },
    {
      id: 6,
      question: "06 - Comment puis-je contacter votre équipe ?",
      answer:
        "Notre équipe est disponible pour répondre à toutes vos questions avant, pendant et après votre voyage. Vous pouvez nous contacter par téléphone, email ou via notre formulaire en ligne.",
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
            Détails du service
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
                to={service.id}
                className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"
              >
                Détails du service
              </Link>
            </li>
            <span className="text-secondary">/</span>
            <li>
              <Link
                to={service.id}
                className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"
              >
                {service.name}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="service-container px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] bg-[#effefe] gap-10 flex justify-between items-start flex-col xl:flex-row">
        <div className="service-left w-full xl:w-[70%] flex flex-col gap-10">
          <div className="gallery-images h-50 sm:h-100 lg:h-150">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="rounded-3xl w-full h-full"
            >
              {[
                service.image,
                gallery1,
                gallery2,
                gallery3,
                gallery4,
                gallery5,
                gallery6,
              ].map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`gallery-${index}`}
                    className="rounded-3xl w-full h-full object-cover object-top"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="service-content bg-white p-5 md:p-8 rounded-3xl shadow-lg">
            <h3 className="text-xl sm:text-2xl md:text-4xl font-medium text-secondary pb-5">
              Un guide touristique qui vous fournit des informations précises et
              enrichissantes sur chaque destination.
            </h3>
            <p className="text-sm md:text-lg text-gray-500 pb-8">
              Un service de guide touristique offre aux voyageurs
              l’accompagnement de professionnels expérimentés qui enrichissent
              leur expérience de découverte. Nos guides partagent leurs
              connaissances sur l’histoire, la culture et les particularités des
              lieux visités, permettant aux voyageurs de mieux comprendre et
              apprécier chaque destination. Ils prennent également en charge
              l’organisation des itinéraires, les déplacements et l’accès aux
              principales attractions afin de garantir une visite fluide,
              agréable et parfaitement organisée.
            </p>

            <h3 className="text-xl sm:text-2xl md:text-4xl font-medium text-secondary pb-5">
              En quoi consiste un service de guide touristique ?
            </h3>
            <ul className="space-y-5 pb-8">
              <li className="flex items-center flex-wrap gap-2">
                <Icon
                  icon="ic:baseline-check"
                  width="24"
                  height="24"
                  className="bg-prim text-white p-1 rounded-full"
                />
                <span className="text-secondary font-light tracking-wide">
                  Présentation de l’histoire, de la culture et de la richesse
                  naturelle des lieux visités.
                </span>
              </li>

              <li className="flex items-center flex-wrap gap-2">
                <Icon
                  icon="ic:baseline-check"
                  width="24"
                  height="24"
                  className="bg-prim text-white p-1 rounded-full"
                />
                <span className="text-secondary font-light tracking-wide">
                  Assistance pour les aspects pratiques tels que
                  l’enregistrement à l’hôtel, les transports locaux et les
                  recommandations de restaurants.
                </span>
              </li>

              <li className="flex items-center flex-wrap gap-2">
                <Icon
                  icon="ic:baseline-check"
                  width="24"
                  height="24"
                  className="bg-prim text-white p-1 rounded-full"
                />
                <span className="text-secondary font-light tracking-wide">
                  Conseils de sécurité et informations sur les coutumes et
                  bonnes pratiques locales.
                </span>
              </li>

              <li className="flex items-center flex-wrap gap-2">
                <Icon
                  icon="ic:baseline-check"
                  width="24"
                  height="24"
                  className="bg-prim text-white p-1 rounded-full"
                />
                <span className="text-secondary font-light tracking-wide">
                  Création d’itinéraires personnalisés selon les envies et les
                  centres d’intérêt des voyageurs.
                </span>
              </li>
            </ul>

            <h3 className="text-xl sm:text-2xl md:text-4xl font-medium text-secondary pb-5">
              Nos types d’accompagnement touristique
            </h3>
            <div className="service-table mb-8">
              <ul>
                <li className="flex flex-wrap">
                  <div className="title min-w-48.75 w-48.75 py-3.75 px-7.5">
                    <span className="block text-xl font-afacad! text-secondary font-medium">
                      Guide touristique privé
                    </span>
                  </div>
                  <div className="content flex-1 py-3.75 px-7.5">
                    <p className="text-md text-secondary font-light tracking-wide">
                      Des visites privées personnalisées, souvent conçues selon
                      vos centres d’intérêt.
                    </p>
                  </div>
                </li>

                <li className="flex flex-wrap">
                  <div className="title min-w-48.75 w-48.75 py-3.75 px-7.5">
                    <span className="block text-xl font-afacad! text-secondary font-medium">
                      Circuits en groupe
                    </span>
                  </div>
                  <div className="content flex-1 py-3.75 px-7.5">
                    <p className="text-md text-secondary font-light tracking-wide">
                      Partez à la découverte de nouvelles destinations en
                      compagnie d’autres voyageurs, tout en profitant d’une
                      formule plus abordable.
                    </p>
                  </div>
                </li>

                <li className="flex flex-wrap">
                  <div className="title min-w-48.75 w-48.75 py-3.75 px-7.5">
                    <span className="block text-xl font-afacad! text-secondary font-medium">
                      Guides urbains
                    </span>
                  </div>
                  <div className="content flex-1 py-3.75 px-7.5">
                    <p className="text-md text-secondary font-light tracking-wide">
                      Des experts locaux pour explorer les villes, découvrir les
                      musées, les marchés, les monuments et les lieux
                      incontournables.
                    </p>
                  </div>
                </li>

                <li className="flex flex-wrap">
                  <div className="title min-w-48.75 w-48.75 py-3.75 px-7.5">
                    <span className="block text-xl font-afacad! text-secondary font-medium">
                      Guides culturels
                    </span>
                  </div>
                  <div className="content flex-1 py-3.75 px-7.5">
                    <p className="text-md text-secondary font-light tracking-wide">
                      Des spécialistes passionnés qui vous font découvrir les
                      traditions, les festivals, la gastronomie et les sites du
                      patrimoine.
                    </p>
                  </div>
                </li>

                <li className="flex flex-wrap">
                  <div className="title min-w-48.75 w-48.75 py-3.75 px-7.5">
                    <span className="block text-xl font-afacad! text-secondary font-medium">
                      Accompagnateurs de voyage
                    </span>
                  </div>
                  <div className="content flex-1 py-3.75 px-7.5">
                    <p className="text-md text-secondary font-light tracking-wide">
                      Des professionnels qui supervisent les séjours de
                      plusieurs jours, assurent la gestion de la logistique et
                      coordonnent les activités du groupe pour une expérience
                      fluide et agréable.
                    </p>
                  </div>
                </li>

                <li className="flex flex-wrap border-0!">
                  <div className="title min-w-48.75 w-48.75 py-3.75 px-7.5">
                    <span className="block text-xl font-afacad! text-secondary font-medium">
                      Guides nature & faune sauvage
                    </span>
                  </div>
                  <div className="content flex-1 py-3.75 px-7.5">
                    <p className="text-md text-secondary font-light tracking-wide">
                      Des spécialistes des safaris, randonnées et expériences
                      d’écotourisme dans des environnements naturels tels que
                      les réserves et les sanctuaires.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-4xl font-medium text-secondary pb-5">
              Pourquoi choisir un guide touristique professionnel ?
            </h3>
            <ul className="space-y-5 pb-8">
              <li className="flex items-center flex-wrap gap-2">
                <Icon
                  icon="ic:baseline-check"
                  width="24"
                  height="24"
                  className="bg-prim text-white p-1 rounded-full"
                />
                <span className="text-secondary font-light tracking-wide">
                  <strong>Certifiés par les autorités compétentes : </strong>
                  Nos guides agréés suivent des formations rigoureuses et
                  passent des examens exigeants afin de garantir un
                  accompagnement professionnel, fiable et de qualité.
                </span>
              </li>

              <li className="flex items-center flex-wrap gap-2">
                <Icon
                  icon="ic:baseline-check"
                  width="24"
                  height="24"
                  className="bg-prim text-white p-1 rounded-full"
                />
                <span className="text-secondary font-light tracking-wide">
                  <strong>Multilingue : </strong>
                  Nos guides parlent plusieurs langues, notamment l’anglais,
                  l’hindi et différentes langues régionales, afin de faciliter
                  la communication avec les voyageurs.
                </span>
              </li>

              <li className="flex items-center flex-wrap gap-2">
                <Icon
                  icon="ic:baseline-check"
                  width="24"
                  height="24"
                  className="bg-prim text-white p-1 rounded-full"
                />
                <span className="text-secondary font-light tracking-wide">
                  <strong>Expertise locale : </strong>
                  Une connaissance approfondie de l’histoire, de la culture
                  locale et des trésors cachés de chaque destination.
                </span>
              </li>

              <li className="flex items-center flex-wrap gap-2">
                <Icon
                  icon="ic:baseline-check"
                  width="24"
                  height="24"
                  className="bg-prim text-white p-1 rounded-full"
                />
                <span className="text-secondary font-light tracking-wide">
                  <strong>Accompagnement flexible : </strong>
                  Choisissez entre un accompagnement complet pendant toute la
                  durée de votre séjour ou une assistance ponctuelle selon vos
                  besoins.
                </span>
              </li>

              <li className="flex items-center flex-wrap gap-2">
                <Icon
                  icon="ic:baseline-check"
                  width="24"
                  height="24"
                  className="bg-prim text-white p-1 rounded-full"
                />
                <span className="text-secondary font-light tracking-wide">
                  <strong>Sécurité & assistance : </strong>
                  Nos guides vous accompagnent dans les environnements inconnus,
                  vous conseillent et vous assistent en cas de besoin ou
                  d’urgence.
                </span>
              </li>
            </ul>

            <h3 className="text-xl sm:text-2xl md:text-4xl font-medium text-secondary pb-5">
              Questions fréquentes
            </h3>
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

            <h3 className="text-xl sm:text-2xl md:text-4xl font-medium text-secondary pb-5">
              Nos services et prestations pour votre voyage
            </h3>
            <div className="bg-[#fff8eb]! service-table overflow-hidden border-0! mb-8">
              <ul className="service-table3">
                <li>
                  <div className="text-2xl font-medium font-afacad! pt-10 pe-7.5 pb-2.5 ps-7.5 w-full">
                    Pour le voyage
                  </div>
                </li>
                <li className="flex flex-wrap">
                  <div className="title min-w-48.75 w-48.75 py-3.75 px-7.5">
                    <span className="block text-xl font-afacad! text-secondary font-medium">
                      Hôtels
                    </span>
                  </div>
                  <div className="content flex-1 py-3.75 px-7.5">
                    <p className="text-md text-secondary font-light tracking-wide">
                      Wi-Fi gratuit, articles de toilette, sols chauffants,
                      chaussons en chambre, télévision par câble et service en
                      chambre.
                    </p>
                  </div>
                </li>
                <li className="flex flex-wrap">
                  <div className="title min-w-48.75 w-48.75 py-3.75 px-7.5">
                    <span className="block text-xl font-afacad! text-secondary font-medium">
                      Restaurants
                    </span>
                  </div>
                  <div className="content flex-1 py-3.75 px-7.5">
                    <p className="text-md text-secondary font-light tracking-wide">
                      Eau et accompagnements gratuits, boutons d’appel pour le
                      service, Wi-Fi et commande mobile.
                    </p>
                  </div>
                </li>
                <li className="flex flex-wrap">
                  <div className="title min-w-48.75 w-48.75 py-3.75 px-7.5">
                    <span className="block text-xl font-afacad! text-secondary font-medium">
                      Installations publiques
                    </span>
                  </div>
                  <div className="content flex-1 py-3.75 px-7.5">
                    <p className="text-md text-secondary font-light tracking-wide">
                      Toilettes propres, Wi-Fi gratuit (notamment à Séoul),
                      centres d’information touristique et casiers sécurisés.
                    </p>
                  </div>
                </li>
                <li className="flex flex-wrap">
                  <div className="title min-w-48.75 w-48.75 py-3.75 px-7.5">
                    <span className="block text-xl font-afacad! text-secondary font-medium">
                      Transports
                    </span>
                  </div>
                  <div className="content flex-1 py-3.75 px-7.5">
                    <p className="text-md text-secondary font-light tracking-wide">
                      Trains à grande vitesse KTX, cartes de transport T-money
                      et applications mobiles pour faciliter vos déplacements.
                    </p>
                  </div>
                </li>
                <li className="flex flex-wrap border-0!">
                  <div className="title min-w-48.75 w-48.75 py-3.75 px-7.5">
                    <span className="block text-xl font-afacad! text-secondary font-medium">
                      Zones commerciales
                    </span>
                  </div>
                  <div className="content flex-1 py-3.75 px-7.5">
                    <p className="text-md text-secondary font-light tracking-wide">
                      Comptoirs de remboursement de taxes, services de livraison
                      et personnel parlant plusieurs langues dans les grandes
                      enseignes.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#fff8eb]! service-table overflow-hidden border-0! mb-8">
              <ul className="service-table3">
                <li>
                  <div className="text-2xl font-medium font-afacad! pt-10 pe-7.5 pb-2.5 ps-7.5 w-full">
                    Pour la gastronomie
                  </div>
                </li>
                <li className="flex flex-wrap">
                  <div className="title min-w-48.75 w-48.75 py-3.75 px-7.5">
                    <span className="block text-xl font-afacad! text-secondary font-medium">
                      Petit-déjeuner
                    </span>
                  </div>
                  <div className="content flex-1 py-3.75 px-7.5">
                    <p className="text-md text-secondary font-light tracking-wide">
                      Les petits-déjeuners coréens comprennent souvent une
                      soupe, du riz et différents accompagnements, avec
                      également des options occidentales disponibles.
                    </p>
                  </div>
                </li>
                <li className="flex flex-wrap">
                  <div className="title min-w-48.75 w-48.75 py-3.75 px-7.5">
                    <span className="block text-xl font-afacad! text-secondary font-medium">
                      Cafés accueillants
                    </span>
                  </div>
                  <div className="content flex-1 py-3.75 px-7.5">
                    <p className="text-md text-secondary font-light tracking-wide">
                      De nombreux cafés proposent des menus en anglais, des
                      desserts, des spécialités coréennes et des boissons
                      originales.
                    </p>
                  </div>
                </li>
                <li className="flex flex-wrap">
                  <div className="title min-w-48.75 w-48.75 py-3.75 px-7.5">
                    <span className="block text-xl font-afacad! text-secondary font-medium">
                      Applications de livraison
                    </span>
                  </div>
                  <div className="content flex-1 py-3.75 px-7.5">
                    <p className="text-md text-secondary font-light tracking-wide">
                      Des applications comme Baemin et Yogiyo proposent une
                      assistance en anglais et permettent de se faire livrer
                      presque partout.
                    </p>
                  </div>
                </li>
                <li className="flex flex-wrap">
                  <div className="title min-w-48.75 w-48.75 py-3.75 px-7.5">
                    <span className="block text-xl font-afacad! text-secondary font-medium">
                      Options végétariennes & non végétariennes
                    </span>
                  </div>
                  <div className="content flex-1 py-3.75 px-7.5">
                    <p className="text-md text-secondary font-light tracking-wide">
                      Une offre de plus en plus variée, notamment à Séoul.
                      Certaines applications permettent de trouver facilement
                      des restaurants végétariens ou végétaliens.
                    </p>
                  </div>
                </li>
                <li className="flex flex-wrap border-0!">
                  <div className="title min-w-48.75 w-48.75 py-3.75 px-7.5">
                    <span className="block text-xl font-afacad! text-secondary font-medium">
                      Accompagnements gratuits
                    </span>
                  </div>
                  <div className="content flex-1 py-3.75 px-7.5">
                    <p className="text-md text-secondary font-light tracking-wide">
                      La plupart des restaurants coréens proposent des
                      accompagnements gratuits à volonté pour compléter vos
                      repas.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service-right w-full xl:w-[30%] flex flex-col">
          <div className="mb-8">
            <h4 className="widget-title text-secondary">
              Nos derniers articles
            </h4>
          </div>
          <div className="recent-posts bg-white p-3 lg:p-5 xl:p-10 mb-10">
            <div className="post1 relative flex py-5 border-b border-dashed border-secondary/50">
              <div className="post-date w-12 h-12 min-w-12 text-white bg-secondary flex flex-col justify-center items-center rounded-md">
                <span className="text-xl font-semibold leading-none">14</span>
                <span className="text-xs leading-none">Juin</span>
              </div>
              <div className="post-info ps-4">
                <div className="ctg text-yellow font-medium pb-1">
                  Sofia Bennett
                </div>
                <div className="title">
                  <h5 className="block text-secondary font-afacad! font-medium leading-7 text-xl hover:text-yellow transition-colors duration-300 cursor-pointer">
                    Les meilleurs conseils pour réussir votre premier séjour à
                    l’étranger
                  </h5>
                </div>
              </div>
            </div>

            <div className="post2 relative flex py-5 border-b border-dashed border-secondary/50">
              <div className="post-date w-12 h-12 min-w-12 text-white bg-secondary flex flex-col justify-center items-center rounded-md">
                <span className="text-xl font-semibold leading-none">1</span>
                <span className="text-xs leading-none">Juillet</span>
              </div>
              <div className="post-info ps-4">
                <div className="ctg text-yellow font-medium pb-1">
                  Noah Anderson
                </div>
                <div className="title">
                  <h5 className="block text-secondary font-afacad! font-medium leading-7 text-xl hover:text-yellow transition-colors duration-300 cursor-pointer">
                    Les meilleures façons de s’intégrer et d’échanger avec les
                    locaux
                  </h5>
                </div>
              </div>
            </div>

            <div className="post3 relative flex py-5 border-b border-dashed border-secondary/50">
              <div className="post-date w-12 h-12 min-w-12 text-white bg-secondary flex flex-col justify-center items-center rounded-md">
                <span className="text-xl font-semibold leading-none">29</span>
                <span className="text-xs leading-none">Juillet</span>
              </div>
              <div className="post-info ps-4">
                <div className="ctg text-yellow font-medium pb-1">
                  Nathan Cooper
                </div>
                <div className="title">
                  <h5 className="block text-secondary font-afacad! font-medium leading-7 text-xl hover:text-yellow transition-colors duration-300 cursor-pointer">
                    Le guide ultime pour créer votre séjour idéal
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="widget-title text-secondary">
              Destinations populaires
            </h4>
          </div>
          <div className="bg-white border-secondary/20 rounded-3xl p-3 lg:p-5 xl:p-10 mb-10">
            <ul className="space-y-3">
              <li className="flex w-full justify-between items-center">
                <span className="text-md font-medium text-secondary hover:text-yellow transition-colors duration-300 cursor-pointer">
                  Thaïlande
                </span>
                <span className="text-sm text-gray-400">
                  (5 offres disponibles)
                </span>
              </li>
              <li className="flex w-full justify-between items-center">
                <span className="text-md font-medium text-secondary hover:text-yellow transition-colors duration-300 cursor-pointer">
                  Maldives
                </span>
                <span className="text-sm text-gray-400">
                  (3 offres disponibles)
                </span>
              </li>
              <li className="flex w-full justify-between items-center">
                <span className="text-md font-medium text-secondary hover:text-yellow transition-colors duration-300 cursor-pointer">
                  Bangkok
                </span>
                <span className="text-sm text-gray-400">
                  (12 offres disponibles)
                </span>
              </li>
              <li className="flex w-full justify-between items-center">
                <span className="text-md font-medium text-secondary hover:text-yellow transition-colors duration-300 cursor-pointer">
                  Paris
                </span>
                <span className="text-sm text-gray-400">
                  (9 offres disponibles)
                </span>
              </li>
              <li className="flex w-full justify-between items-center">
                <span className="text-md font-medium text-secondary hover:text-yellow transition-colors duration-300 cursor-pointer">
                  Bali
                </span>
                <span className="text-sm text-gray-400">
                  (2 offres disponibles)
                </span>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="widget-title text-secondary">Tags populaires</h4>
          </div>
          <div className="tag-cloud mb-10">
            <span>Gastronomie</span>
            <span>Circuits</span>
            <span>Piscine</span>
            <span>Safari</span>
            <span>Vue panoramique</span>
            <span>Hôtel</span>
            <span>Aventure</span>
            <span>Voyage</span>
            <span>Luxe</span>
            <span>Faune sauvage</span>
          </div>

          <div className="mb-8">
            <h4 className="widget-title text-secondary">Galerie photos</h4>
          </div>
          <div className="bg-white border border-secondary/20 rounded-3xl p-3 lg:p-5 xl:p-10 mb-10 grid grid-cols-1 lg:grid-cols-2 gap-2">
            {gallery.map((item, index) => (
              <img
                key={index}
                src={item.image}
                alt="gallery-img"
                className="w-full h-25! object-cover rounded-xl"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesDetails;
