import manrock from "../../../assets/Index/TopDestination/man-rock.png";
import customer1 from "../../../assets/Index/TopDestination/Customer-1.jpg";
import customer2 from "../../../assets/Index/TopDestination/Customer-2.jpg";
import customer3 from "../../../assets/Index/TopDestination/Customer-3.jpg";
import Mainbtn from "../../Buttons/Mainbtn";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Icon } from "@iconify/react";

import destinations from "../../../Data/TopDestination.json";
import DestinationCard from "../../DestinationCard/DestinationCard";
function TopDestination() {
  return (
    <>
      <div className="px-[2%] sm:px-[5%] lg:px-[5%] py-[5%] bg-[#DBEEEE]">
        <div className="bg-secondary px-[2%] sm:px-[3%] py-[5%] rounded-2xl relative">
          <img
            src={manrock}
            alt="Un homme qui escalade"
            className="absolute right-0 top-0 h-auto"
          />
          <div className="w-full flex flex-col xl:flex-row gap-5 justify-between items-center pb-10 z-1 relative">
            <div className="w-full xl:w-1/2">
              <h2 className="text-5xl text-white font-bold">
                <span className="text-yellow"> Les lieux </span>incontournables
                !
              </h2>
              <p className="text-gray-300 tracking-wide my-3">
                Envie d’évasion ? Parmi les innombrables destinations qui
                s’offrent à vous, nous vous aidons à trouver celle qui vous
                correspond. Préférez-vous le calme de la nature, l’énergie des
                métropoles, la découverte de sites historiques ou le farniente
                au bord de la mer ?
              </p>
              <div className="flex items-center my-5">
                <div className="flex items-center">
                  <img
                    src={customer1}
                    alt="Voyageur 1"
                    className="w-10 h-10 rounded-full object-cover border border-white"
                  />
                  <img
                    src={customer2}
                    alt="Voyageur 2"
                    className="w-10 h-10 rounded-full object-cover border border-white -translate-x-2"
                  />
                  <img
                    src={customer3}
                    alt="Voyageur 3"
                    className="w-10 h-10 rounded-full object-cover border border-white -translate-x-4"
                  />
                </div>
                <div>
                  <h3 className="text-3xl text-prim font-semibold">3.5k</h3>
                  <p className="text-white">Voyageurs satisfaits</p>
                </div>
              </div>

              <div className="mt-5">
                <Mainbtn text="Voir plus de destinations" to="/destination" />
              </div>
            </div>
            <div className="w-full xl:w-1/1 xl:ps-10">
              <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-8.5xl font-bold text-yellow uppercase">
                Top!
                <span className="text-white block flex-1">Destination</span>
              </h1>
            </div>
          </div>
          <div className="relative">
            <button className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-yellow text-white cursor-pointer flex items-center justify-center shadow">
              <Icon icon="ep:arrow-left-bold" wdith="24" height="24" />
            </button>
            <button className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-yellow text-white cursor-pointer flex items-center justify-center shadow">
              <Icon icon="ep:arrow-right-bold" wdith="24" height="24" />
            </button>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={40}
              slidesPerView="auto"
              navigation={{
                prevEl: ".swiper-prev",
                nextEl: ".swiper-next",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="destination-swiper"
            >
              {destinations.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="w-65! hover:w-125! transition-all! duration-500!"
                >
                  <DestinationCard
                    title={item.title}
                    listing={item.listing}
                    image={item.image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopDestination;
