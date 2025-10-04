"use client";

import ProductCard from "./ProductCard";

interface PopularProductsProps {
  onProductClick?: (productId: string) => void;
  onMoreClick?: () => void;
}

const PopularProducts: React.FC<PopularProductsProps> = ({
  onProductClick,
  onMoreClick,
}) => {
  const products = [
    {
      id: "1",
      name: "닌텐도 스위치 OLED 화이트",
      timeAgo: "10분 전",
    },
    {
      id: "2",
      name: "캠핑 테이블 접이식 대형",
      timeAgo: "30분 전",
    },
    {
      id: "3",
      name: "루이비통 네버풀 MM",
      timeAgo: "1시간 전",
    },
    {
      id: "4",
      name: "자전거 트렉 FX3",
      timeAgo: "2시간 전",
    },
    {
      id: "5",
      name: "아이패드 프로 11인치 M2",
      timeAgo: "3시간 전",
    },
    {
      id: "6",
      name: "나이키 에어맥스 97",
      timeAgo: "4시간 전",
    },
    {
      id: "7",
      name: "아이폰 17",
      timeAgo: "5시간 전",
    },
    {
      id: "8",
      name: "에프킬라",
      timeAgo: "6시간 전",
    },
  ];

  const handleProductClick = (productId: string) => {
    onProductClick?.(productId);
  };

  return (
    <div className="px-4 py-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-900">중고거래 인기매물</h3>
        <button
          className="text-sm text-gray-500 hover:text-gray-700"
          onClick={onMoreClick}
        >
          더보기
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            timeAgo={product.timeAgo}
            onClick={() => handleProductClick(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
