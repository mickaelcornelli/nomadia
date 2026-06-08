import titleShape from "../../../assets/Index/BookingSteps/Title-Shape.png";

import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import tst1 from "../../../assets/Index/Testimonials/testimonials-01.jpg";
import tst2 from "../../../assets/Index/Testimonials/testimonials-02.jpg";
import tst3 from "../../../assets/Index/Testimonials/testimonials-03.jpg";
import tst4 from "../../../assets/Index/Testimonials/testimonials-04.jpg";
import tst5 from "../../../assets/Index/Testimonials/testimonials-05.jpg";
import tst6 from "../../../assets/Index/Testimonials/testimonials-06.jpg";
import quote from "../../../assets/Index/Testimonials/Quote.png";

import { Icon } from "@iconify/react";

const testimonials = [
  {
    id: 1,
    name: "Kavin Martin",
    image: tst1,
    gender: "Voyageur",
    msg: "Une expérience incroyable ! Chaque étape du voyage était parfaitement organisée. Je recommande vivement Nomadia.",
  },
  {
    id: 2,
    name: "Alex Morgan",
    image: tst2,
    gender: "Voyageur",
    msg: "Des destinations magnifiques et un service très fluide. J’ai découvert des lieux que je n’aurais jamais trouvés seul.",
  },
  {
    id: 3,
    name: "Hana Akari",
    image: tst3,
    gender: "Voyageuse",
    msg: "Voyage exceptionnel du début à la fin. L’application est simple et très pratique pour planifier ses aventures.",
  },
  {
    id: 4,
    name: "Sophia Lee",
    image: tst4,
    gender: "Voyageuse",
    msg: "J’ai adoré chaque moment ! Les recommandations étaient pertinentes et les lieux absolument superbes.",
  },
  {
    id: 5,
    name: "Isabelle Landre",
    image: tst5,
    gender: "Voyageuse",
    msg: "Une plateforme vraiment utile pour les voyageurs. Tout est bien pensé et facile à utiliser.",
  },
  {
    id: 6,
    name: "John Carter",
    image: tst6,
    gender: "Voyageur",
    msg: "Un service au top ! Grâce à Nomadia, j’ai vécu l’un de mes meilleurs voyages jusqu’à présent.",
  },
];

function Testimonials() {
  return (
    <>
      <div className="bg-[#effefe] px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%]">
        <div className="title flex flex-col justify-center items-center text-center relative pb-10">
          <h1 className="text-secondary text-4xl md:text-6xl font-bold">
            <span className="text-yellow"> Ce que nos clients</span> pense de
            nous
          </h1>
          <p className="text-secondary my-2 text-lg">
            Découvrez les expériences et témoignages de nos voyageurs à travers
            le monde. Leurs avis reflètent la qualité de nos services et la
            richesse des aventures vécues avec Nomadia.
          </p>
          <img
            src={titleShape}
            alt="Trajet aerien d'un avion"
            className="w-[35%] object-contain absolute -bottom-12"
          />
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="tst-item">
                <div className="tst-img w-60 h-60 md:w-70 md:h-70 rounded-2xl overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={"tst-image"}
                    className="w-full h-full object-cover"
                  />
                  <div className="flex p-1 bg-black absolute bottom-0 left-0 rounded-2xl rounded-tl-none">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        icon="material-symbols:star-rounded"
                        width="20"
                        height="20"
                        className="text-yellow"
                      />
                    ))}
                  </div>
                </div>
                <div className="tst-content pt-2 relative">
                  <img
                    src={quote}
                    alt="quote"
                    className="w-16 h-16 absolute right-0 top-0"
                  />
                  <h2 className="text-4xl font-kaushan! text-secondary">
                    {item.name}
                  </h2>
                  <span className="text-yellow text-lg font-semibold">
                    {item.gender}
                  </span>
                  <p className="pt-5 text-[20px] font-medium text-secondary/80">
                    {item.msg}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Testimonials;
