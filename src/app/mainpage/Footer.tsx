import Image from "next/image";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30">
      <div className="max-w-[600px] mx-auto bg-white border-t border-gray-200">
        <div className="flex justify-around items-center py-2 px-4">
          <div className="flex flex-col items-center py-2">
            <Image
              src="/mainpage/house.svg"
              alt="홈"
              width={24}
              height={24}
              className="w-6 h-6 mb-1"
            />
            <span className="text-xs text-black font-medium">홈</span>
          </div>
          <div className="flex flex-col items-center py-2">
            <Image
              src="/mainpage/magnifying-glass.svg"
              alt="검색"
              width={24}
              height={24}
              className="w-6 h-6 mb-1 opacity-70"
            />
            <span className="text-xs text-black">검색</span>
          </div>
          <div className="flex flex-col items-center py-2">
            <Image
              src="/mainpage/chat.svg"
              alt="채팅"
              width={24}
              height={24}
              className="w-6 h-6 mb-1"
            />
            <span className="text-xs text-black">채팅</span>
          </div>
          <div className="flex flex-col items-center py-2">
            <Image
              src="/mainpage/user.svg"
              alt="마이페이지"
              width={24}
              height={24}
              className="w-6 h-6 mb-1"
            />
            <span className="text-xs text-black">마이페이지</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
