import React, { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { addToCart } from "../../../store/cartSlice";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Product } from "../../../types";
import { useAppDispatch } from "../../../store/hooks";
import { formatPrice } from "../../../utils";

interface IProps {
  product: Product;
  category?: string;
  subCategory?: string;
}

const ProductCard = ({ product, category, subCategory }: IProps) => {
  const dispatch = useAppDispatch();
  const { name, price, pImage } = product;

  const handleAdd = (product: any) => {
    dispatch(addToCart(product));
  };

  return (
    <div className=" p-6 rounded-md bg-violet-100 shadow-lg">
      <Link to={`/${category}/${subCategory}/${name}`}>
        <LazyLoadImage
          className="mb-5 h-56 w-48 object-contain ml-[5rem] rounded-2xl"
          src={pImage}
          loading="eager"
          effect="blur"
        />
      </Link>
      <div className="flex flex-col text-justify ">
        <span className="font-bold text-violet-700">{name}</span>
        <span className="text-indigo-800">₹{formatPrice(price)}</span>
        <div className="flex justify-end">
          <button
            onClick={() => handleAdd(product)}
            className=" p-2 rounded-lg text-indigo-800 w-28 h-auto"
          >
            <div className="ml-[4rem]">
              <TiShoppingCart size={30} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
