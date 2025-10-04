"use client";

import React, { useState } from "react";

interface CategoryTabsProps {
  categories?: string[];
  onCategoryChange?: (category: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories = ["전체", "디지털기기", "생활가전", "가구/인테리어"],
  onCategoryChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onCategoryChange?.(category);
  };

  return (
    <div className="px-4 py-3">
      <div className="flex space-x-2 overflow-x-auto">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              selectedCategory === category
                ? "bg-black text-white"
                : "bg-white text-black border border-gray-200 hover:bg-gray-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
