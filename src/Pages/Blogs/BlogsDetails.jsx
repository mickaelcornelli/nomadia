import React from "react";
import { Link, useParams } from "react-router-dom";
import blogdata from "../../Data/Blogs.json";
import sectionbanner from "../../assets/section-banner.jpg";

import Mainbtn from "../../Components/Buttons/Mainbtn";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Icon } from "@iconify/react";
import BlogCard from "../../Components/BlogCard/BlogCard";
function BlogsDetails() {
  const { id } = useParams();

  const blog = blogdata.find((item) => item.id === parseInt(id));

  if (!blog) {
    return <h2 className="text-center mt-20">Blog introuvable</h2>;
  }

  return (
    <>
      <div
        className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
        style={{ backgroundImage: `url(${sectionbanner})` }}
      >
        <div className="section-content z-0 text-center">
          <h4 className="text-2xl lg:text-4xl xl:text-6xl font-extrabold text-secondary">
            Détails du blog
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
                to={"/blogs"}
                className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"
              >
                Blogs
              </Link>
            </li>
            <span className="text-secondary">/</span>
            <li>
              <Link
                to={blog.id}
                className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"
              >
                {blog.title}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#effffff] w-full">
        <div className="destination-wrap mx-auto lg:w-5xl lg:min-w-5xl px[2%] py-[6%] space-y-10 relative">
          <img
            src={blog.image}
            alt={`blog`}
            className="w-full h-full object-cover rounded-3xl"
          />

          <div className="destination-content bg-white p-5">
            <h3 className="text-4xl font-medium text-secondary">
              {blog.title}
            </h3>
            <h4 className="text-2xl font-medium text-prim pb-5">
              {"Autheur: " + blog.author}
            </h4>
            <p className="text-secondary pb-8">{blog.description}</p>
            <h3 className="text-3xl font-medium text-secondary pb-5">
              Les atouts de la destination
            </h3>
            <ul className="space-y-5 pb-8">
              {blog.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start flex-wrap sm:flex-nowrap gap-2 text-lg font-light text-secondary"
                >
                  <Icon
                    icon="ph:seal-check-fill"
                    width="25"
                    height="25"
                    className="text-green-600"
                  />
                  {feature}
                </li>
              ))}
            </ul>
      
              <h3 className="text-3xl font-medium text-secondary pb-5">
                Découvrez également nos autres blogs
              </h3>
              {blogdata.map((item) => (
                <BlogCard key={item.id} blog={item} />
              ))}
           
            <div className="bg-yellow-light w-full p-8 md:p-10 rounded-[40px] shadow-xl mt-10">
              <h1 className="text-secondary text-4xl md:text-6xl font-bold">
                <span className="text-yellow"> Contactez-nous</span> et
                échangeons !
              </h1>
              <p className="text-secondary my-2 text-lg lg:w-lg">
                Une question, une envie d’évasion ou un projet de voyage ? Notre
                équipe est à votre écoute pour vous accompagner et donner vie à
                vos prochaines aventures.
              </p>
              <form method="post" className="space-y-6">
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full rounded-full px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none"
                  required
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-full px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none"
                  required
                />

                <input
                  type="text"
                  placeholder="Objet"
                  className="w-full rounded-full px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none"
                  required
                />

                <textarea
                  rows="5"
                  placeholder="Message"
                  className="w-full rounded-3xl px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none resize-none"
                  required
                ></textarea>

                <Mainbtn text={"Envoyer"} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogsDetails;
