import React from "react";
import CategoryGrid from "../components/CategoryGrid";
import categories from "../assets/categories";

function Browse() {
  return (
    <div className="px-8 py-6">
      <h1 className="text-5xl font-bold mb-3">Browse</h1>
      <CategoryGrid
        categories={categories.sort((a, b) => b.viewcount - a.viewcount)}
        title="Popular categories"
      />
    </div>
  );
}

export default Browse;
