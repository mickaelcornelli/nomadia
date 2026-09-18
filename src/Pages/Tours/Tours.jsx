import React from "react";
import { Link } from "react-router-dom";
import sectionbanner from "../../assets/section-banner.jpg";
import titleShape from "../../assets/Index/BookingSteps/Title-Shape.png";

import PopularTourCard from "../../Components/PopularTourCard/PopularTourCard";
import toursData from "../../Data/PopularTour.json"

function Tours() {
  return (
    <>
      <div
        className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
        style={{ backgroundImage: `url(${sectionbanner})` }}
      >
        <div className="section-content z-0 text-center">
          <h4 className="text-2xl lg:text-4xl xl:text-6xl font-extrabold text-secondary">
            Guides touristiques
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
                to="/tours"
                className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"
              >
                Guides Touristiques
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#effefe] px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%]">
        <div className="title flex flex-col justify-center items-center text-center relative mb-10">
          <h1 className="text-secondary text-4xl md:text-6xl font-bold">
            <span className="text-yellow"> Explorez les </span> circuits
            populaires
          </h1>
          <p className="text-secondary my-2 text-lg">
            Explorez une sélection de circuits populaires soigneusement choisis
            pour vous faire vivre des expériences uniques à travers les plus
            belles destinations. Aventure, culture ou détente : trouvez le
            voyage qui vous correspond.
          </p>
          <img
            src={titleShape}
            alt="Trajet aerien d'un avion"
            className="w-[35%] object-contain absolute -bottom-12"
          />
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {toursData.map((tour) => (
              <PopularTourCard tour={tour} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tours;
