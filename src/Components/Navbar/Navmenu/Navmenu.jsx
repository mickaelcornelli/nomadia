import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function Navmenu({ menuOpen, toggleMenu }) {
  const [pagesOpen, setPagesOpen] = useState(false);
  const [tourguidOpen, setTourguidOpen] = useState(false);

  const handleLinkClick = () => {
    setPagesOpen(false);
    setTourguidOpen(false);
    toggleMenu();
  };

  return (
    <>
      {/* =========================
          MENU DESKTOP
      ========================== */}
      <ul className="lg:flex hidden items-start gap-10 text-white">
        <li>
          <Link
            to="/"
            className="font-semibold text-lg hover:text-prim transition-colors duration-300"
          >
            Accueil
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="font-semibold text-lg hover:text-prim transition-colors duration-300"
          >
            Notre histoire
          </Link>
        </li>

        {/* Pages */}
        <li className="relative group">
          <div className="cursor-pointer rounded-sm flex items-center font-figtree text-lg hover:text-prim transition-colors duration-300">
            Pages

            <Icon
              icon="ep:arrow-down-bold"
              width="16"
              height="16"
              className="ms-2 transition-transform duration-300 group-hover:rotate-180"
            />
          </div>

          <ul className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-xl invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50 text-black">
            <li className="border-b border-gray-200 text-secondary font-medium">
              <Link
                to="/services"
                className="block px-4 py-2 hover:translate-x-1 transition"
              >
                Services
              </Link>
            </li>

            <li className="border-b border-gray-200 text-secondary font-medium">
              <Link
                to="/service/1"
                className="block px-4 py-2 hover:translate-x-1 transition"
              >
                Services détails
              </Link>
            </li>

            <li className="border-b border-gray-200 text-secondary font-medium">
              <Link
                to="/testimonials"
                className="block px-4 py-2 hover:translate-x-1 transition"
              >
                Testimonials
              </Link>
            </li>

            {/* Tour Guide */}
            <li className="relative group/tourguide border-b border-gray-200">
              <div className="flex justify-between items-center px-4 py-2 cursor-pointer text-secondary">
                <span className="hover:translate-x-1 transition">
                  Tour Guide
                </span>

                <Icon
                  icon="ri:arrow-right-s-line"
                  width="20"
                  height="20"
                />
              </div>

              <ul className="absolute top-0 left-full min-w-52 bg-white rounded-e-xl invisible opacity-0 translate-y-2 group-hover/tourguide:visible group-hover/tourguide:opacity-100 group-hover/tourguide:translate-y-0 transition-all duration-300 ease-out">
                <li className="border-b border-gray-200 text-secondary font-medium">
                  <Link
                    to="/tourguide"
                    className="block px-4 py-2 hover:translate-x-1 transition"
                  >
                    Tour Guide
                  </Link>
                </li>

                <li className="text-secondary font-medium">
                  <Link
                    to="/tourguide/1"
                    className="block px-4 py-2 hover:translate-x-1 transition"
                  >
                    Tour Guide Details
                  </Link>
                </li>
              </ul>
            </li>

            <li className="border-b border-gray-200 text-secondary font-medium">
              <Link
                to="/faqs"
                className="block px-4 py-2 hover:translate-x-1 transition"
              >
                Faqs
              </Link>
            </li>

            <li className="text-secondary font-medium">
              <Link
                to="/pricing"
                className="block px-4 py-2 hover:translate-x-1 transition"
              >
                Tarifs
              </Link>
            </li>

            <li className="text-secondary font-medium">
              <Link
                to="/pagenotfound"
                className="block px-4 py-2 hover:translate-x-1 transition"
              >
                Erreur-404
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link
            to="/destination"
            className="font-medium text-lg hover:text-prim transition-colors duration-300"
          >
            Destination
          </Link>
        </li>

        <li>
          <Link
            to="/tours"
            className="font-medium text-lg hover:text-prim transition-colors duration-300"
          >
            Tours
          </Link>
        </li>

        <li>
          <Link
            to="/blogs"
            className="font-medium text-lg hover:text-prim transition-colors duration-300"
          >
            Blog
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="font-medium text-lg hover:text-prim transition-colors duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* =========================
          OVERLAY MOBILE
      ========================== */}
      <div
        onClick={toggleMenu}
        className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-500 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* =========================
            PANNEAU LATERAL
        ========================== */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed top-0 left-0 h-screen w-[85%] sm:w-[70%] md:w-[50%] lg:w-[45%] xl:w-[35%] bg-black text-white z-40 px-8 py-20 overflow-y-auto transform transition-transform duration-700 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Bouton fermeture */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Fermer le menu"
            className="cursor-pointer absolute bg-yellow top-8 right-8 rounded-sm text-black p-1"
          >
            <Icon
              icon="material-symbols-light:close"
              width="24"
              height="24"
            />
          </button>

          {/* =========================
              CONTENU DESKTOP
          ========================== */}
          <div className="lg:block hidden">
            <Logo />

            <h3 className="pt-12 text-3xl pb-8">
              C'est l'heure de voyager
            </h3>

            <h3 className="text-prim text-4xl font-semibold pb-3">
              Préparer vos prochaines vacances
            </h3>

            <p className="text-gray-300">
              Nomadia est une agence de stratégie et de contenu plusieurs
              fois primée, spécialisée dans le marketing du voyage.
            </p>

            <div>
              <h3 className="pt-12 text-3xl pb-10">
                Ne ratez pas cette offre
              </h3>

              <ul className="w-full grid grid-cols-3 gap-8">
                <li className="text-center">
                  <span className="text-prim text-2xl">199$</span>
                  <p className="text-xl font-medium">
                    Pack Découverte
                  </p>
                </li>

                <li className="text-center">
                  <span className="text-prim text-2xl">299$</span>
                  <p className="text-xl font-medium">
                    Pack Habitué
                  </p>
                </li>

                <li className="text-center">
                  <span className="text-prim text-2xl">399$</span>
                  <p className="text-xl font-medium">
                    Pack Business
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* =========================
              MENU MOBILE
          ========================== */}
          <ul className="lg:hidden flex flex-col gap-5 pt-8">
            <li>
              <Link
                to="/"
                onClick={handleLinkClick}
                className="block text-white font-medium text-lg hover:text-prim transition-colors duration-300"
              >
                Accueil
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={handleLinkClick}
                className="block text-white font-medium text-lg hover:text-prim transition-colors duration-300"
              >
                Notre histoire
              </Link>
            </li>

            {/* Pages mobile */}
            <li className="relative">
              <button
                type="button"
                onClick={() => {
                  setPagesOpen(!pagesOpen);
                  setTourguidOpen(false);
                }}
                className="w-full flex items-center text-white text-lg font-medium cursor-pointer"
              >
                Pages

                <Icon
                  icon="ep:arrow-down-bold"
                  width="16"
                  height="16"
                  className={`ms-2 transition-transform duration-300 ${
                    pagesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <ul
                className={`mt-2 text-white border border-gray-50/10 shadow-lg rounded-xl overflow-hidden transition-all duration-300 ${
                  pagesOpen
                    ? "opacity-100 visible max-h-[500px]"
                    : "opacity-0 invisible max-h-0"
                }`}
              >
                <li>
                  <Link
                    to="/services"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:translate-x-1 transition"
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    to="/service/1"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:translate-x-1 transition"
                  >
                    Services détails
                  </Link>
                </li>

                <li>
                  <Link
                    to="/testimonials"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:translate-x-1 transition"
                  >
                    Testimonials
                  </Link>
                </li>

                {/* Tour Guide */}
                <li>
                  <button
                    type="button"
                    onClick={() => setTourguidOpen(!tourguidOpen)}
                    className="w-full flex justify-between items-center px-4 py-2 cursor-pointer"
                  >
                    <span>Tour Guide</span>

                    <Icon
                      icon="ri:arrow-right-s-line"
                      width="20"
                      height="20"
                      className={`transition-transform duration-300 ${
                        tourguidOpen ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  <ul
                    className={`overflow-hidden bg-white/10 transition-all duration-300 ease-in-out ${
                      tourguidOpen
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <li>
                      <Link
                        to="/tourguide"
                        onClick={handleLinkClick}
                        className="block px-6 py-2 hover:translate-x-1 transition"
                      >
                        Tour Guide
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/tourguide/1"
                        onClick={handleLinkClick}
                        className="block px-6 py-2 hover:translate-x-1 transition"
                      >
                        Tour Guide Details
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link
                    to="/faqs"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:translate-x-1 transition"
                  >
                    Faqs
                  </Link>
                </li>

                <li>
                  <Link
                    to="/pricing"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:translate-x-1 transition"
                  >
                    Tarifs
                  </Link>
                </li>

                <li>
                  <Link
                    to="/pagenotfound"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:translate-x-1 transition"
                  >
                    Erreur-404
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                to="/destination"
                onClick={handleLinkClick}
                className="block text-white font-medium text-lg hover:text-prim transition-colors duration-300"
              >
                Destination
              </Link>
            </li>

            <li>
              <Link
                to="/tours"
                onClick={handleLinkClick}
                className="block text-white font-medium text-lg hover:text-prim transition-colors duration-300"
              >
                Tours
              </Link>
            </li>

            <li>
              <Link
                to="/blogs"
                onClick={handleLinkClick}
                className="block text-white font-medium text-lg hover:text-prim transition-colors duration-300"
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="block text-white font-medium text-lg hover:text-prim transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* =========================
              RÉSEAUX SOCIAUX
          ========================== */}
          <ul className="pt-10 flex items-center">
            <li className="social-icon inline-flex h-11.5 w-11.5 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 flex justify-center items-center bg-secondary text-white text-[18px] rounded-[50%] transition-all duration-500 ease-in-out group-hover:text-yellow group-hover:rounded-[10px]"
              >
                <Icon
                  icon="codicon:twitter"
                  width="16"
                  height="16"
                />
              </a>
            </li>

            <li className="social-icon inline-flex h-11.5 w-11.5 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-white transition-all duration-500 ease-in-out group-hover:rounded-xl group-hover:text-yellow-400"
              >
                <Icon
                  icon="ic:outline-facebook"
                  width="24"
                  height="24"
                />
              </a>
            </li>

            <li className="social-icon inline-flex h-11.5 w-11.5 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-white transition-all duration-500 ease-in-out group-hover:rounded-xl group-hover:text-yellow-400"
              >
                <Icon
                  icon="mingcute:instagram-line"
                  width="24"
                  height="24"
                />
              </a>
            </li>

            <li className="social-icon inline-flex h-11.5 w-11.5 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-white transition-all duration-500 ease-in-out group-hover:rounded-xl group-hover:text-yellow-400"
              >
                <Icon
                  icon="line-md:youtube"
                  width="24"
                  height="24"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navmenu;