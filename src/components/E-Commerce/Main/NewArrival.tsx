import { BsCart3 } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { getAllP } from "../../../store/api";
import { Product } from "../../../types";
import { Link } from "react-router-dom";
import { formatPrice } from "../../../utils";

const NewArrival = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await getAllP();
      const [prod1, prod2, prod3, prod4, ...prod] = data.products.sort();
      setProducts([prod1, prod2, prod3, prod4]);
    };
    fetchProducts();
  }, []);

  return (
    <section className="py-20 bg-[#f0f8ff] overflow-hidden">
      <div className="container mx-auto px-4 ">
        <h2 className="mb-16 md:mb-24 text-4xl md:text-5xl font-bold font-heading">
          Discover New Arrivals
        </h2>
        <div className="-mx-3 mb-24  ">
          <div className="w-1/4  px-3 mb-6 lg:mb-0 flex">
            <div className="p-6 ">
              <div className="w-full flex ">
                {products.map((product) => (
                  <div
                    style={{ paddingBottom: "30px" }}
                    className="w-[350px] bg-white  mr-4 rounded-md p-2 shadow-lg"
                  >
                    <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-blue-300 rounded-full text-blue-300 bg-white">
                      NEW
                    </span>
                    <Link
                      className="block px-6 mt-6 mb-2"
                      to={`${product.category}/${product.subCategory}/${product.name}`}
                    >
                      <img
                        className="mb-5 mx-auto h-56 w-full object-contain"
                        src={product.pImage}
                        alt=""
                      />
                      <h3 className="mb-2 text-xl font-bold font-heading">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="pl-6 ">
                      <p className=" text-lg font-bold font-heading text-blue-500">
                        <span>₹ {formatPrice(product.price)}</span>
                      </p>
                      {/* <Link
                        className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                        to="/"
                      >
                        <BsCart3 />
                      </Link> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
