import React from "react";
import Category from "../components/Category";

function CategoryScroll({ title, categories }) {
  return (
    <div className="pl-8 mb-9">
      <h1 className=" text-2xl font-bold">{title}</h1>
      <div className="flex flex-row space-x-10 mt-5 pr-8 overflow-x-auto scrollbar-none">
        {categories.map((category) => (
          <Category category={category} key={category.name} />
        ))}
      </div>
    </div>
  );
}

export default CategoryScroll;
