import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import bannerImg from "../assets/images/banner.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-primaryBG py-12 xl:px-28 px-4 mt-24 rounded-lg shadow">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-20">
      <div className="md:w-1/2">
            <img src={bannerImg} alt="" className="mx-auto h-full md:h-[562px] md:w-[442px] w-full" />
        </div>

        <div className="md:w-1/2 w-full flex flex-col items-center">
          <h1 className="text-5xl mb-5 font-semibold">Collections</h1>
          <p className="text-sm mb-7 text-gray-400 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti architecto dolores quae commodi voluptate eius sint itaque, ipsa vel aut, quod sequi, facere veniam accusantium nemo maiores earum distinctio molestias.
          </p>
          <button onClick={()=> navigate('/products')} className="bg-transparent border-[2px] border-black hover:bg-black hover:text-white px-6 py-2 text-black font-semibold flex gap-2 items-center rounded-full">
            <FaShoppingBag className="inline-flex" /> Shop Now
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
