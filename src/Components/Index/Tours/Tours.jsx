import titleShape from "../../../assets/Index/BookingSteps/Title-Shape.png";

import toursData from "../../../Data/PopularTour.json";
import PopularTourCard from "../../PopularTourCard/PopularTourCard";
function Tours() {
  return (
    <>
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
            {toursData.slice(0, 4).map((tour) => (
              <PopularTourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tours;
