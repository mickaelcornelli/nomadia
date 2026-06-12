import patern from "../../../assets/Index/Blogs/patern.png";
import Mainbtn from "../../Buttons/Mainbtn";

import blogdata from "../../../Data/Blogs.json";
import BlogCard from "../../BlogCard/BlogCard";

function Blogs() {
  return (
    <>
      <div
        className="blog px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10] bg-secondary bg-repeat w-full"
        style={{ backgroundImage: `url(${patern})` }}
      >
        <div className="blog-title flex justify-between items-end flex-wrap pb-10 gap-5">
          <div className="title lg:max-w-2xl">
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              Inspirez-vous des
              <span className="text-yellow"> tendances voyage</span>
            </h1>
            <p className="text-gray-200/80 my-2 text-lg">
              Inspirez-vous de ces exemples de contenus dynamiques pour enrichir
              un blog de voyage, un site dédié à la faune ou une interface web
              moderne, et simuler des actualités en temps réel captivantes et
              immersives :
            </p>
          </div>
          <Mainbtn to="/blogs" text={"En savoir plus"} />
        </div>
        <div className="blog-wrap grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {blogdata.map((item) => (
            <BlogCard key={item.id} blog={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Blogs;
