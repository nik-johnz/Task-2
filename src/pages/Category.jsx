import React from "react";
import { Link } from "react-router-dom";
import brand1 from "../assets/images/company/brand1.png"
import brand2 from "../assets/images/company/brand2.png"
import brand3 from "../assets/images/company/brand3.png"
import brand4 from "../assets/images/company/brand4.png"
import brand5 from "../assets/images/company/brand5.png"
import image1 from "../assets/images/category/image1.png"
import image2 from "../assets/images/category/image2.png"
import image3 from "../assets/images/category/image3.png"
import image4 from "../assets/images/category/image4.png"
import image5 from "../assets/images/category/image5.png"


const companyLogo = [
  { id: 1, img: brand1 },
  { id: 2, img: brand2 },
  { id: 3, img: brand3 },
  { id: 4, img: brand4 },
  { id: 5, img: brand5},
];

const category = {
  image1,image2,image3,image4,image5
}


const Category = () => {
  return (
    <div className="max-w-screen-2xl flex-flex-col container xl:px-28 px-4 py-16">
      {/* brand logo */}
      <div className="flex items-center justify-around gap-4 py-5 border-t border-b">
        {companyLogo.map(({ id, img }) => (
          <div key={id}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>

      {/* category grid */}
      <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
        <p className="font-semibold md:-rotate-90 uppercase text-center bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex">
          Explore new and popular styles
        </p>
        <div>
          <Link to="/">
            <img src={category.image1} alt="" className="w-full hover:scale-105 transition-all duration-200 rounded-lg" />
          </Link>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-2">
            <Link to="/">
              <img
                src={category.image2}
                alt=""
                className="hover:scale-105 transition-all duration-200 rounded-lg"
              />
            </Link>
            <Link to="/">
              <img
                src={category.image3}
                alt=""
                className="hover:scale-105 transition-all duration-200 rounded-lg"
              />
            </Link>
            <Link to="/">
              <img
                src={category.image4}
                alt=""
                className="hover:scale-105 transition-all duration-200 rounded-lg"
              />
            </Link>
            <Link to="/">
              <img
                src={category.image5}
                alt=""
                className="hover:scale-105 transition-all duration-200 rounded-lg"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
