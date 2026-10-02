import React from "react";
import { Link, useParams } from "react-router-dom";
import sectionbanner from "/assets/section-banner.jpg";

import destination1 from "/assets/Destination/DestinationDetailsPage/destinationdetails-image01.png";
import destination2 from "/assets/Destination/DestinationDetailsPage/destinationdetails-image02.png";
import destination3 from "/assets/Destination/DestinationDetailsPage/destinationdetails-image03.png";
import Mainbtn from "../../Components/Buttons/Mainbtn";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import destinationCtgData from "../../Data/DestinationCtg.json";
import { Icon } from "@iconify/react";
function DestinationDetails() {
  const { id } = useParams();

  const desCtgData = destinationCtgData.find(
    (item) => item.id === parseInt(id)
  );

  if (!desCtgData) {
    return <h2 className="text-center mt-20">Destination introuvable</h2>;
  }
  return (
    <>
      <div
        className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
        style={{ backgroundImage: `url(${sectionbanner})` }}
      >
        <div className="section-content z-0 text-center">
          <h4 className="text-2xl lg:text-4xl xl:text-6xl font-extrabold text-secondary">
            Détails de la destination
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
                to={desCtgData.id}
                className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"
              >
                Destination
              </Link>
            </li>
            <span className="text-secondary">/</span>
            <li>
              <Link
                to={desCtgData.id}
                className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"
              >
                {desCtgData.name}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#effffff] w-full">
        <div className="destination-wrap mx-auto lg:w-5xl lg:min-w-5xl px[2%] py-[6%] space-y-10 relative">
          <div className="relative">
            <button className="des-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-yellow text-white cursor-pointer flex items-center justify-center shadow">
              <Icon icon="ep:arrow-left-bold" width="24" height="24" />
            </button>

            <button className="des-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-yellow text-white cursor-pointer flex items-center justify-center shadow">
              <Icon icon="ep:arrow-right-bold" width="24" height="24" />
            </button>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation={{
                prevEl: ".des-prev",
                nextEl: ".des-next",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="rounded-3xl"
            >
              <SwiperSlide>
                <img
                  src={destination1}
                  alt={`destination-1`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={destination2}
                  alt={`destination-2`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={destination3}
                  alt={`destination-3`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="destination-content bg-white p-5">
            <h3 className="text-4xl font-medium text-secondary pb-5">
              {desCtgData.name}
            </h3>
            <p className="text-secondary pb-8">{desCtgData.description}</p>
            <h3 className="text-3xl font-medium text-secondary pb-5">
              Les atouts de la destination
            </h3>
            <ul className="space-y-5 pb-8">
              {desCtgData.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start flex-wrap sm:flex-nowrap gap-2 text-lg font-light text-secondary"
                >
                  <Icon
                    icon="ph:seal-check-fill"
                    width="25"
                    height="25"
                    className="text-green-600"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <h3 className="text-3xl font-medium text-secondary pb-5">
              Circuits associés
            </h3>
            <p className="text-secondary pb-8">
              Aucun circuit trouvé pour cette destination
            </p>

            <div className="bg-yellow-light w-full p-8 md:p-10 rounded-[40px] shadow-xl">
              <h1 className="text-secondary text-4xl md:text-6xl font-bold">
                <span className="text-yellow"> Contactez-nous</span> et
                échangeons !
              </h1>
              <p className="text-secondary my-2 text-lg lg:w-lg">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default DestinationDetails;
