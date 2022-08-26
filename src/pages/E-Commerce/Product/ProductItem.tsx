import React from "react";
import { useParams } from "react-router-dom";

import { addToCart } from "../../../store/cartSlice";
import { CartItem, Product } from "../../../types";
import { useAppDispatch } from "../../../store/hooks";
import { formatPrice } from "../../../utils";

interface IProps {
  products: Product[];
}

const ProductItem = ({ products }: IProps) => {
  const { productName } = useParams();
  console.log(products);
  const product = products.filter((product) => product.name === productName)[0];
  console.log(product);
  const dispatch = useAppDispatch();

  const handleAdd = (product: any) => {
    dispatch(addToCart(product));
  };

  return (
    <div
      className="relative max-w-screen-xl px-2 mx-auto my-6 shadow-lg rounded-lg"
      style={{ paddingBottom: "20px" }}
    >
      <div className="p-10">
        <h1 className="text-2xl font-bold lg:text-3xl">{product.name}</h1>

        <p className="mt-1 text-sm text-emerald-300 font-bold">
          {product.cName}
        </p>

        <div className="grid gap-8 lg:items-start lg:grid-cols-4">
          <div className="lg:col-span-3">
            <div className="relative mt-4">
              <img alt="" src={product.pImage} className="w-[30%] ml-[15rem]" />
            </div>
          </div>

          <div className="lg:top-0 lg:sticky">
            <form className="space-y-4 lg:pt-8">
              <div>
                <p className="text-xl font-bold">
                  Price: ₹{formatPrice(product.price)}
                </p>
              </div>

              <button
                type="submit"
                onClick={() => handleAdd(product)}
                className="w-full px-6 py-3 text-sm font-bold tracking-wide text-white uppercase bg-blue-500 rounded"
              >
                Add to cart
              </button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="prose max-w-none">
            <p>{product.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
