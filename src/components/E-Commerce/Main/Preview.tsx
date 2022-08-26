import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../../types";
import { formatPrice } from "../../../utils";
import Scroll from "../Scroll";

const Preview = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      const res = await axios.post(
        "https://chainkartblockchainstore.herokuapp.com/api/v1/product/getBySubCat",
        { subCategory: "Shoes" }
      );

      setProducts(res.data.products);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <div className="mt-10">
      {!loading ? (
        <section>
          <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
              <div className="flex items-center p-8 bg-[#F0F8FF] rounded">
                <div className="mx-auto text-center lg:text-left">
                  <h2 className="text-2xl font-bold">Shoes</h2>

                  <p className="mt-4 text-sm text-gray-700 max-w-[45ch]">
                    Latest and trending Shoes from top brands. Shop now to get
                    some best deals and offers.
                  </p>

                  <Link
                    to="/Fashion/Shoes"
                    className="inline-block px-6 py-3 mt-6 text-sm text-white bg-indigo-600 rounded"
                  >
                    View More
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 lg:col-span-2 lg:grid-cols-3 lg:py-12 ml-3">
                {products.map((product, i) => {
                  if (i === 3) return;
                  return (
                    <Link
                      to={`${product.category}/${product.subCategory}/${product.name}`}
                      className="block"
                    >
                      <div className="aspect-w-1 aspect-h-1">
                        <img
                          alt="Acer Nitro 5"
                          className="object-cover rounded w-64 h-48"
                          src={product.pImage}
                        />
                      </div>

                      <div className="mt-2">
                        <h5 className="font-semibold">
                          {product.name.slice(10)}
                        </h5>

                        <p className="mt-1 text-sm text-gray-700">
                          ₹{formatPrice(product.price)}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Scroll />
      )}
    </div>
  );
};

export default Preview;
