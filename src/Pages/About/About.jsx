import { Link } from "react-router-dom";
import sectionbanner from "../../assets/section-banner.jpg";
import aboutimg from "../../assets/AboutPage/abt-pic1.png";
import icon1 from "../../assets/Index/About/travel-guide.png";
import icon2 from "../../assets/Index/About/mission-icon.png";
import authore1 from "../../assets/Index/About/pic1.jpg";
import authore2 from "../../assets/Index/About/pic2.jpg";
import authore3 from "../../assets/Index/About/pic3.jpg";
import Mainbtn from "../../Components/Buttons/Mainbtn";

import cloud from "../../assets/AboutPage/Cloud-bg.png";
import titleShape from "../../assets/Index/BookingSteps/Title-Shape.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ballonleft from "../../assets/hotballon-Left.png";
import ballonright from "../../assets/hotballon-right.png";
import { useRef, useState } from "react";

import Destinations from "../../Data/DestinationCtg.json";
import DestinationCtgCard from "../../Components/DestinationCtgCard/DestinationCtgCard";
import services from "../../Data/Services.json";

import { Icon } from "@iconify/react";
import Testimonials from "../../Components/Index/Testimonials/Testimonials";
function About() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div
        className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
        style={{ backgroundImage: `url(${sectionbanner})` }}
      >
        <div className="section-content z-0 text-center">
          <h4 className="text-2xl lg:text-4xl xl:text-6xl font-extrabold text-secondary">
            A propos de nous
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
                to="/about"
                className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"
              >
                Notre histoire
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="px-[2%] ms:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] flex justify-between items-start xl:flex-row flex-col gap-12 h-auto xl:h-250 bg-yellow-light">
        <div className="about-image w-full xl:w-[50%] relative flex justify-center h-full">
          <div className="w-full h-full top-0 left-0 flex justify-center absolute z-0">
            <span className="lg:h-120 h-80 w-80 lg:w-120 bg-[#fff1da] rounded-full"></span>
          </div>
          <img src={aboutimg} alt="à propos de nous" className="w-auto z-1" />
        </div>
        <div className="w-full xl:w-[50%] title relative h-full">
          <h1 className="text-secondary text-3xl md:text-4xl xl:text-5xl font-bold pb-3">
            Nos <span className="text-yellow"> Plus</span> Belles destinations
            du mois
          </h1>
          <p className="text-gray-500 pb-5">
            Nomadia est une agence primée spécialisée en stratégie et création
            de contenu pour le secteur du voyage. Grâce à l'une des plus grandes
            communautés de voyageurs au monde, elle accompagne les marques et
            les destinations touristiques dans leur développement et leur
            visibilité.
          </p>
          <ul className="space-y-5">
            <li className="flex items-center flex-wrap md:flex-nowrap border border-secondary/30 p-5 gap-5 rounded-xl">
              <img src={icon1} alt="icone" className="w-14 h-14" />
              <div>
                <span className="text-xl font-semibold">
                  Votre guide voyage de confiance
                </span>
                <p>
                  Fournir des informations fiables pour aider les voyageurs à
                  planifier leurs déplacements en toute sérénité et sécurité.
                </p>
              </div>
            </li>
            <li className="flex items-center flex-wrap md:flex-nowrap border border-secondary/30 p-5 gap-5 rounded-xl">
              <img src={icon2} alt="icone" className="w-14 h-14" />
              <div>
                <span className="text-xl font-semibold">
                  Notre mission et notre vision
                </span>
                <p>
                  Connecter les voyageurs à des expériences enrichissantes qui
                  leur permettent de découvrir le monde sous un nouveau regard.
                </p>
              </div>
            </li>
          </ul>

          <div className="flex items-center flex-wrap gap-10 pt-8">
            <Mainbtn text={"En savoir plus"} to="/about" />
            <div className="flex items-center gap-5">
              <div className="authore-img flex items-center">
                <img
                  src={authore1}
                  alt="autheur"
                  className="w-10 rounded-full"
                />
                <img
                  src={authore2}
                  alt="autheur"
                  className="w-10 rounded-full -mx-3"
                />
                <img
                  src={authore3}
                  alt="autheur"
                  className="w-10 rounded-full -xm-3"
                />
              </div>
              <p className="text-md">
                <span className="block text-2xl font-bold text-secondary">
                  3.5k
                </span>
                Voyageurs satisfaits
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="popular-destination bg-[#effefe] px-[2%] sm:px[8%] lg:px-[12%] py-[6%] md:py-[10%] bg-no-repeat bg-cover bg-center relative overflow-x-hidden"
        style={{ backgroundImage: `url(${cloud})` }}
      >
        <div className="title flex flex-col justify-center items-center text-center relative pb-10">
          <h1 className="text-secondary text-4xl md:text-6xl font-bold">
            Destinations <span className="text-yellow"> populaires </span>
          </h1>
          <p className="text-secondary my-2 text-lg">
            Des destinations d’exception à découvrir ! Voici quelques-uns de nos
            lieux les plus populaires.
          </p>
          <img
            src={titleShape}
            alt="Trajet de vol illustré avec un avion"
            className="w-[35%] object-contain absolute -bottom-12"
          />
        </div>
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              setSwiperInstance(swiper);
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="destination-swiper mt-10"
          >
            {Destinations.map((destination) => (
              <SwiperSlide key={destination.id}>
                <DestinationCtgCard  item={destination} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            ref={prevRef}
            onClick={() => swiperInstance?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg transition cursor-pointer"
          >
            <Icon icon="lsicon:left-filled" width="35" height="35" />
          </button>
          <button
            ref={nextRef}
            onClick={() => swiperInstance?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg transition cursor-pointer"
          >
            <Icon icon="lsicon:right-outline" width="35" height="35" />
          </button>
          <div />
        </div>

        <div className="left-hot-ballon">
          <img src={ballonleft} alt="mongolfiere" />
        </div>
        <div className="right-hot-ballon">
          <img src={ballonright} alt="mongolfiere" />
        </div>
      </div>

      <div className="services bg-secondary px-[2%] ms:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] relative">
        <div className="title flex flex-col justify-center items-center text-center relative pb-10">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            <span className="text-yellow">Nos incroyables </span>
            services
          </h1>
          <p className="text-gray/200 my-2 text-lg">
            Des destinations d’exception à découvrir ! Voici quelques-uns de nos
            lieux les plus populaires.
          </p>
          <img
            src={titleShape}
            alt="Trajet de vol illustré avec un avion"
            className="w-[35%] object-contain absolute -bottom-12 brightness-0"
          />
        </div>
        <div className="bg-[#daeeef] p-5 md:p-10 rounded-2xl my-10 md:my-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((srv, index) => {
              return (
                <Link
                  to={`/service/${srv.id}`}
                  className="service-item bg-white shadow-xl rounded-3xl p-3 group hover:bg-secondary transition-colors duration-500 cursor-pointer"
                >
                  <div className="service-image rounded-3xl overflow-hidden h-60 md:h-100">
                    <img
                      src={srv.image}
                      alt={srv.name}
                      className="w-full h-full! object-cover"
                    />
                  </div>
                  <span className="text-center block pt-5 pb-2 text-2xl font-medium text-secondary group-hover:text-yellow transition-colors duration-500">
                    {srv.name}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="absolute right-40 bottom-8 hidden lg:flex flex-col text-white font-kaushan! text-2xl text-end xl:text-5xl z-1">
            Des services pensés pour votre confort
            <h2 className="uppercase font-afacad! font-extrabold text-4xl lg:text-6xl xl:text-8xl text-yellow">
              Nos prestations
            </h2>
          </div>
        </div>
      </div>

      <Testimonials />
    </>
  );
}

export default About;
