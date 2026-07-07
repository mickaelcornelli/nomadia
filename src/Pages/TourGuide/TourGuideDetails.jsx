import React from "react";
import { Link, useParams } from "react-router-dom";

import sectionbanner from "../../assets/section-banner.jpg";
import { Icon } from "@iconify/react";
import teams from "../../Data/Team.json";
function TourGuideDetails() {
  const { id } = useParams();

  const team = teams.find((item) => item.id === parseInt(id));

  if (!team) {
    return <h2 className="text-center mt-20">Profil du guide introuvable</h2>;
  }
  return (
    <>
      <div
        className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
        style={{ backgroundImage: `url(${sectionbanner})` }}
      >
        <div className="section-content z-0 text-center">
          <h4 className="text-2xl lg:text-4xl xl:text-6xl font-extrabold text-secondary">
            {team.name}
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
                to="/tourguide"
                className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"
              >
                Equipe
              </Link>
            </li>
            <span className="text-secondary">/</span>
            <li>
              <Link
                to={team.id}
                className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"
              >
                {team.name}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col bg-[#daeeef] sm:p-10 rounded-lg">
        <div className="bg-white px-[2%] sm:px-[8%] py-[6%] md:py-[8%] rounded-2xl flex justify-between items-start gap-10 relative flex-col lg:flex-row">
          <div
            key={team.id}
            className="team-item bg-white [box-shadow:0px_18px_18px_rgba(0,106,114,0.1)] p-3.5 rounded-2xl h-full lg:sticky lg:left-0 lg:top-0 lg:min-w-[30%] w-full lg:w-[30%]"
          >
            <div className="team-img rounded-2xl overflow-hidden group">
              <img
                src={team.image}
                alt="Un(e) guide"
                className="group-hover:scale-110 transition-all duration-300"
              />
            </div>

            <div className="team-content text-center pt-5">
              <ul className="flex justify-center mb-2">
                <li className="social-icon inline-flex h-11.5 w-11.5 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg">
                  <Link
                    to="https://x.com"
                    className="h-9 w-9 flex justify-center items-center bg-secondary text-white text-[18px] rounded-[50%] transition-all duration-500 ease-in-out group-hover:text-yellow group-hover:rounded-[10px]"
                  >
                    <Icon icon="codicon:twitter" width="16" height="16" />
                  </Link>
                </li>
                <li className="social-icon inline-flex h-11.5 w-11.5 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg">
                  <Link
                    to="https://www.facebook.com"
                    className="h-9 w-9 flex justify-center items-center bg-secondary text-white text-[18px] rounded-[50%] transition-all duration-500 ease-in-out group-hover:text-yellow group-hover:rounded-[10px]"
                  >
                    <Icon icon="ic:outline-facebook" width="24" height="24" />
                  </Link>
                </li>
                <li className="social-icon inline-flex h-11.5 w-11.5 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg">
                  <Link
                    to="https://instagram.com"
                    className="h-9 w-9 flex justify-center items-center bg-secondary text-white text-[18px] rounded-[50%] transition-all duration-500 ease-in-out group-hover:text-yellow group-hover:rounded-[10px]"
                  >
                    <Icon
                      icon="mingcute-instagram-line"
                      width="24"
                      height="24"
                    />
                  </Link>
                </li>
                <li className="social-icon inline-flex h-11.5 w-11.5 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg">
                  <Link
                    to="https://youtube.com"
                    className="h-9 w-9 flex justify-center items-center bg-secondary text-white text-[18px] rounded-[50%] transition-all duration-500 ease-in-out group-hover:text-yellow group-hover:rounded-[10px]"
                  >
                    <Icon icon="line-md:youtube" width="24" height="24" />
                  </Link>
                </li>
              </ul>

              <h3 className="text-secondary text-3xl pt-2 pb-1 font-medium hover:text-yellow transition-colors duration-300">
                {team.name}
              </h3>
              <span className="text-yellow">Guide touristique</span>
            </div>
          </div>

          <div className="w-full lg:w-[70%] flex flex-col">
            <h3 className="text-secondary text-4xl font-bold pb-2">
              A propos de moi
            </h3>
            <p className="text-md text-secondary/80 tracking-wide pb-5">
              {team.description}
            </p>
            <ul className="tour-guide-list">
              <li>
                <span>Age:</span>
                {team.age}
              </li>
              <li>
                <span>Formation:</span>
                {team.education}
              </li>
              <li>
                <span>Poste:</span>
                {team.jobtitle}
              </li>
              <li>
                <span>Localisation:</span>
                {team.location}
              </li>
              <li>
                <span>Expérience professionnelle:</span>
                {team.experiences}
              </li>
              <li>
                <span>Téléphone:</span>
                {team.contact}
              </li>
              <li>
                <span>Adresse e-mail:</span>
                {team.email}
              </li>
            </ul>
            <h3 className="text-secondary text-4xl font-bold pb-3">
              Compétences essentielles
            </h3>

            <ul className="space-y-4 mb-5">
              {team.essentialSkills.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-500/80 font-light"
                >
                  <Icon
                    icon="fluent:arrow-circle-right-16-regular"
                    width="24"
                    height="24"
                    className="text-yellow"
                  />
                  {skill}
                </li>
              ))}
            </ul>
            <h3 className="text-secondary text-4xl font-bold pb-3">
              Certifications et formations
            </h3>

            <ul className="space-y-4 mb-5">
              {team.certificationsTraining.map((certification, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-500/80 font-light"
                >
                  <Icon
                    icon="fluent:arrow-circle-right-16-regular"
                    width="24"
                    height="24"
                    className="text-yellow"
                  />
                  {certification}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default TourGuideDetails;
