"use client";

import Image from "next/image";

interface CategoryItemProps {
  icon: string;
  name: string;
  alt: string;
  onClick?: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  icon,
  name,
  alt,
  onClick,
}) => {
  return (
    <button
      className="text-center focus:outline-none rounded-lg p-2 transition-colors hover:bg-gray-50"
      onClick={onClick}
      aria-label={`${name} 카테고리 선택`}
    >
      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
        <Image
          src={icon}
          alt={alt}
          width={24}
          height={24}
          className="text-gray-600"
        />
      </div>
      <span className="text-xs text-gray-600">{name}</span>
    </button>
  );
};

export default CategoryItem;
