import React from "react";
import { Link } from "react-router-dom";
import { formatNumber } from "../assets/formatter";

function Category({ category }) {
  return (
    <Link
      to={`/${category.name.toLowerCase()}`}
      className=" w-40 flex flex-col flex-shrink-0 space-y-2"
    >
      <img
        className="w-full"
        src={category.image}
        alt={`${category.name} Image`}
      />
      <div className=" leading-tight">
        <p className="font-bold text-lg whitespace-nowrap hover:text-link ">
          {category.name}
        </p>
        <p className="hover:text-link">
          {formatNumber(category.viewcount, 1)} viewers
        </p>
      </div>
    </Link>
  );
}

export default Category;
