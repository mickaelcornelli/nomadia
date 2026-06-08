import icon1 from "../../../assets/Index/About/travel-guide.png";
import icon2 from "../../../assets/Index/About/mission-icon.png";
import Mainbtn from "../../Buttons/Mainbtn";

import authore1 from "../../../assets/Index/About/pic1.jpg";
import authore2 from "../../../assets/Index/About/pic2.jpg";
import authore3 from "../../../assets/Index/About/pic3.jpg";

import airplane from "../../../assets/Index/About/airplane.png";
import aboutimg1 from "../../../assets/Index/About/about-image01.jpg";
import aboutimg2 from "../../../assets/Index/About/about-image02.jpg";
import aboutimg3 from "../../../assets/Index/About/about-image03.jpg";

function About() {
  return (
    <>
      <div className="px-[2%] ms:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] flex justify-between items-start xl:flex-row flex-col gap-12 h-auto xl:h-250 bg-yellow-light">
        <div className="w-full xl;w-[50%] title relative h-full">
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
        <div className="about-image w-full xl:w-[50%] relative hidden xl:flex justify-center items-center h-full">
          <div className="airplane absolute transition-all duration-500 -top-1 right-0">
            <img src={airplane} alt="Avion"/>
          </div>
          <div className="about-image1">
            <img src={aboutimg1} alt="A propos de nous" className="rounded-full w-full "/>
          </div>
          <div className="about-image2">
            <img src={aboutimg2} alt="A propos de nous" className="w-full h-full"/>
          </div>
          <div className="about-image3">
            <img src={aboutimg3} alt="A propos de nous" className="w-full h-full"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
