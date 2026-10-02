import titleShape from "/assets/Index/BookingSteps/Title-Shape.png";
import stepsIcon1 from "/assets/Index/BookingSteps/Steps-Icon1.png";
import stepsIcon2 from "/assets/Index/BookingSteps/Steps-Icon2.png";
import stepsIcon3 from "/assets/Index/BookingSteps/Steps-Icon3.png";
import Mainbtn from "../../Buttons/Mainbtn";

const stepsData = [
  {
    id: 1,
    number: "01",
    title: "Choisissez votre destination",
    description:
      "Il vous suffit de sélectionner votre destination préférée et de continuer.",
    icon: stepsIcon1,
  },
  {
    id: 2,
    number: "02",
    title: "Réservez votre séjour",
    description:
      "Sélectionnez vos dates, vos options et confirmez les détails de votre voyage.",
    icon: stepsIcon2,
  },
  {
    id: 3,
    number: "03",
    title: "Prêt à voyager",
    description:
      "Nous avons vérifié que vous avez rempli toutes les conditions nécessaires, vous êtes maintenant prêt à voyager.",
    icon: stepsIcon3,
  },
];

function BookingSteps() {
  return (
    <>
      <div className="px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%]">
        <div className="title flex flex-col justify-center items-center text-center relative pb-10">
          <h1 className="text-secondary text-4xl md:text-6xl font-bold">
            Réservation <span className="text-yellow"> simple et rapide </span>
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

        <div className="pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stepsData.map((step) => (
              <div
                key={step.id}
                className="steps-card p-10 pb-7 hover:shadow-xl border border-secondary/10 rounded-lg hover:translate-y-2 transition-all duration-300"
              >
                <div className="flex justify-between items-center gap-3">
                  <span className="text-5xl font-bold bg-secondary w-20 h-20 rounded-lg flex items-center justify-center text-white">
                    {step.number}
                  </span>
                  <div className="steps-icon border-4 border-yellow rounded-full p-4">
                    <img src={step.icon} alt={step.title} />
                  </div>
                </div>
                <div className="mt-5">
                  <h2 className="text-secondary font-semibold text-2xl">
                    {step.title}
                  </h2>
                  <p className="text-gray-500 text-md tracking-wide">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="SpecialOfferBanner bg-yellow flex flex-wrap items-center justify-center lg:justify-between text-center lg:text-start px-5 py-7 rounded-2xl">
          <div className="flex items-end">
            <h1 className="text-9xl font-bold text-white">30</h1>
            <div className="text-3xl font-extrabold text-secondary">
              <h5>%</h5>
              <h5>déduit</h5>
            </div>
          </div>
          <div>
            <h5 className="text-white font-semibold text-2xl">
              Bénéficiez d'une offre spéciale
            </h5>
            <h1 className="text-5xl md:text-6xl text-title mt-5 text-secondary">
              Forfaits de voyage dans le monde
            </h1>
          </div>
          <div className="mt-5">
            <Mainbtn text="Découvrir l'offre" className="discover-btn" to="/" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingSteps;
