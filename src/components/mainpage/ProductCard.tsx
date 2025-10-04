"use client";

interface ProductCardProps {
  id: string;
  name: string;
  timeAgo: string;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  timeAgo,
  onClick,
}) => {
  return (
    <div
      className="bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      <div className="relative">
        <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400">{name} 이미지</span>
        </div>
        <div className="absolute top-2 right-2 bg-gray-500 text-white text-xs px-2 py-1 rounded">
          {timeAgo}
        </div>
      </div>
      <div className="p-3">
        <h4 className="text-sm font-medium text-gray-900">{name}</h4>
      </div>
    </div>
  );
};

export default ProductCard;
