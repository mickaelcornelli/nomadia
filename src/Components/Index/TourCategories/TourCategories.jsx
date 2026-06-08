import { useState } from "react";
import tourbg from "../../../assets/Index/TourCategories/tour-bg.jpg";
import ctg1 from "../../../assets/Index/TourCategories/Tour-Categories-01.jpg";
import ctg2 from "../../../assets/Index/TourCategories/Tour-Categories-02.jpg";
import ctg3 from "../../../assets/Index/TourCategories/Tour-Categories-03.jpg";
import ctg4 from "../../../assets/Index/TourCategories/Tour-Categories-04.jpg";
import ctg5 from "../../../assets/Index/TourCategories/Tour-Categories-05.jpg";
import ctg6 from "../../../assets/Index/TourCategories/Tour-Categories-06.jpg";

import Mainbtn from "../../Buttons/Mainbtn";

import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const categories = [
  {
    id: 1,
    title: "Vie sauvage",
    pera: "L’observation des animaux dans leur habitat naturel, comme les safaris aux tigres de Ranthambore ou l’ornithologie dans le sanctuaire de Keoladeo Ghana, est devenue une forme de voyage à la fois populaire et enrichissante.",
    image: ctg1,
  },
  {
    id: 2,
    title: "Randonnée",
    pera: "Partez à la découverte de sentiers exceptionnels, de panoramas spectaculaires et de paysages naturels préservés à travers des expériences de randonnée inoubliables.",
    image: ctg2,
  },
  {
    id: 3,
    title: "Circuits d'aventure",
    pera: "Vivez des expériences riches en adrénaline avec des activités en plein air, des explorations hors des sentiers battus et des défis uniques.",
    image: ctg3,
  },
  {
    id: 4,
    title: "Circuits culturels",
    pera: "Découvrez l’histoire, les traditions, l’architecture et le patrimoine des destinations les plus fascinantes du monde.",
    image: ctg4,
  },
  {
    id: 5,
    title: "Croisières",
    pera: "Profitez de voyages en mer confortables combinant détente, paysages remarquables et découverte de plusieurs destinations.",
    image: ctg5,
  },
  {
    id: 6,
    title: "Tourisme sombre",
    pera: "Explorez des lieux marqués par l’histoire, les événements tragiques ou les mystères du passé pour mieux comprendre leur impact culturel et historique.",
    image: ctg6,
  },
  {
    id: 7,
    title: "Voir tous",
    isButton: true,
  },
];

function TourCategories() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div
        className="tour-ctg-container bg-no-repeat bg-center bg-cover px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] flex flex-col xl:flex-row gap-12 relative"
        style={{ backgroundImage: `url(${tourbg})` }}
      >
        <div className="ctg-content w-full xl:w-[40%] flex flex-col justify-center">
          <h3 className="text-secondary font-afacad text-4xl font-medium pb-2">
            {categories[activeIndex].title}
          </h3>
          <p className="text-lg lg:max-w-sm text-secondary/70 mb-5">
            {categories[activeIndex].pera}
          </p>
          <Mainbtn text={"En savoir plus"} className="w-fit" to="/tours" />
        </div>

        <div className="ctg-wrap x-full xl:w-[60%] relative mb-14">
          <button className="ctg-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-yellow text-white cursor-pointer flex items-center justify-center shadow">
            <Icon icon="ep:arrow-left-bold" width="24" height="24" />
          </button>

          <button className="ctg-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-yellow text-white cursor-pointer flex items-center justify-center shadow">
            <Icon icon="ep:arrow-right-bold" width="24" height="24" />
          </button>

          <Swiper
            modules={Navigation}
            spaceBetween={30}
            slidesPerView={2}
            navigation={{
              prevEl: ".ctg-prev",
              nextEl: ".ctg-next",
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full h-full"
          >
            {categories.map((cat, index) => (
              <SwiperSlide key={cat.id}>
                {cat.isButton ? (
                  <div className="flex justify-center items-center h-full">
                    <Mainbtn text={"En voir plus"} className="text-sm!" />
                  </div>
                ) : (
                  <div
                    className={`ctg-item bg-white p-5 rounded-2xl w-full transition-transform duration-500 ${
                      activeIndex === categories.indexOf(cat)
                        ? "scale-100 rotate-0"
                        : "scale-75 rotate-6"
                    }`}
                  >
                    <div className="ctg-image rounded-2xl overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-center pt-2 block text-2xl lg:text-3xl font-medium text-secondary font-afacad">
                      {cat.title}
                    </span>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="relative lg:absolute xl:right-40 bottom-8 flex flex-col text-white font-kaushan! text-xl sm:text-2xl xl:text-start text-end xl:text-5xl z-1">
          Des endroits merveilleux rien que pour vous
          <h2 className="uppercase font-afacad! font-extrabold text-4xl lg:text-6xl xl:text-7xl text-yellow">
            Catégories de voyage
          </h2>
        </div>
      </div>
    </>
  );
}

export default TourCategories;
