"use client";

import CategoryItem from "./CategoryItem";

interface PopularCategoriesProps {
  onCategoryClick?: (categoryName: string) => void;
}

const PopularCategories: React.FC<PopularCategoriesProps> = ({
  onCategoryClick,
}) => {
  const categories = [
    {
      icon: "/mainpage/phone.svg",
      name: "디지털기기",
      alt: "디지털기기 아이콘",
    },
    {
      icon: "/mainpage/tv.svg",
      name: "생활가전",
      alt: "생활가전 아이콘",
    },
    {
      icon: "/mainpage/couch.svg",
      name: "가구/인테리어",
      alt: "가구/인테리어 아이콘",
    },
    {
      icon: "/mainpage/shirt.svg",
      name: "의류",
      alt: "의류 아이콘",
    },
  ];

  const handleCategoryClick = (categoryName: string) => {
    onCategoryClick?.(categoryName);
  };

  return (
    <div className="px-4 py-4">
      <h3 className="text-lg font-bold text-gray-900 mb-4">인기 카테고리</h3>
      <div className="grid grid-cols-4 gap-4">
        {categories.map(category => (
          <CategoryItem
            key={category.name}
            icon={category.icon}
            name={category.name}
            alt={category.alt}
            onClick={() => handleCategoryClick(category.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
