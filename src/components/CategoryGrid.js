import React from "react";
import Category from "../components/Category";

function CategoryGrid({ categories, title }) {
  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold overflow-hidden whitespace-nowrap text-ellipsis">
        {title}
      </h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(var(--category-width),1fr))] gap-8">
        {categories.map((category) => (
          <Category category={category} fullWidth={true} key={category.name} />
        ))}
      </div>
    </div>
  );
}

export default CategoryGrid;
