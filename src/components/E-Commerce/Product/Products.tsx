import React from "react";
import { Product } from "../../../types";
import ProductCard from "./ProductCard";

interface IProps {
  products?: Product[];
  category?: string;
  subCategory?: string;
}

const Products = ({ products, category, subCategory }: IProps) => {
  //   console.log(category, subCatgory);
  return (
    <div className=" grid grid-cols-3 p-6 mt-5 mx-30 gap-10 ">
      {products?.map((product) => (
        <ProductCard
          category={category}
          subCategory={subCategory}
          product={product}
        />
      ))}
    </div>
  );
};

export default Products;
