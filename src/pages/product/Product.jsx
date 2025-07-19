import React, { use, useEffect, useState } from "react";
import { MdDownload } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import Contact from "../contact/Contact";
import { HashLink } from "react-router-hash-link";
import { bestProducts } from "../../data";
import { useLocation } from "react-router-dom";
import { TbRotateClockwise2 } from "react-icons/tb";
import { AiFillProduct } from "react-icons/ai";
import { Link } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // get the name of the product from the web address
  const address = useLocation().pathname.split("/")[2];

  useEffect(() => {
    window.scrollTo(0, 0);

    bestProducts.map((product) => {
      if (product.name === address) {
        setProduct(product);
        setLoading(false);
      }
    });
  }, [address]);

  return (
    <div className="pt-17 ">
      {loading ? (
        <div className="place-self-center space-y-5 place-items-center h-screen pt-20">
          <TbRotateClockwise2 size={50} className="text-primary animate-spin" />
          <span className="italic">loading information...</span>
        </div>
      ) : (
        <>
          <div className="md:flex space-y-2 md:space-y-0 md:justify-between mt-3 mb-5 mx-5 md:mx-20">
            <h2 className="flex items-center gap-2">
              <span className="text-primary">
                <AiFillProduct size={30} />
              </span>
              <span className="text-xl sm:text-2xl font-semibold">
                {product.title}
              </span>
            </h2>
            <Link
              to={product.pdf}
              target="_blank"
              className="bg-transparent text-primary font-medium rounded-lg flex items-center place-self-start gap-1 hover:bg-primary hover:cursor-pointer hover:text-white border border-primary py-2 px-4"
              download
            >
              <MdDownload className="w-4 h-4" />
              <span className="text-sm">Download Product Information</span>
            </Link>
          </div>

          <div className="md:grid grid-cols-2 gap-10 mx-5 md:mx-20">
            <div className="bg-zinc-200 self-start w-full :w-4/5 rounded-2xl p-1">
              <img
                src={product.image}
                className={`max-h-[300px] place-self-center py-5 px-3 `}
                alt="Product"
              />
              <div className="bg-primary/50 text-white rounded-2xl p-4">
                <span className="text-lg sm:text-lg font-semibold">
                  Application
                </span>
                <p className="text-sm sm:text-base">{product.description}</p>
              </div>
            </div>

            {/* FEATURES */}
            <div className="mt-5 md:mt-0">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold">Features</h3>

                <ul className="">
                  {product.features?.map((feature, index) => (
                    <li key={index} className="flex gap-2">
                      <span>
                        <GoDotFill size={10} className="mt-1 sm:mt-1.5" />
                      </span>
                      <span className="block text-sm sm:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {product.airFlowImg && (
                <div className="mt-5">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                    Curve of AirFlow and Resistance
                  </h3>

                  <img
                    src={product.airFlowImg}
                    className={`max-h-[300px] w-full`}
                    alt="Product"
                  />
                </div>
              )}

              <HashLink smooth to="#contact">
                <button
                  type="button"
                  className="bg-primary/90 min-w-40 whitespace-nowrap w-full text-white lg:w-full font-medium rounded-lg hover:bg-transparent hover:text-primary border border-primary hover:cursor-pointer py-2 px-4 mt-5"
                >
                  Get A Free Quote
                </button>
              </HashLink>
            </div>
          </div>

          {/* SPECIFICATIONS */}
          <div className="mt-20 mx-1 md:mx-20">
            <h2 className="text-xl sm:text-2xl font-semibold mb-5">
              Specifications
            </h2>
            <img
              src={product.specificationsImg}
              className={`w-full`}
              alt="Product"
            />
          </div>

          {/* CONTACT */}
          <Contact />
        </>
      )}
    </div>
  );
};

export default Product;
