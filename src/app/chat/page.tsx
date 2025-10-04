import Link from "next/link";
import Image from "next/image";

// 실제로는 DB에서 가져올 채팅방 목록 데이터 (목업 데이터)
async function getChatRooms() {
  return [
    {
      id: "1",
      userName: "김철수",
      productImage: "/images/product_1", // public/images/ 폴더에 이미지 필요
      lastMessage: "네, 내일 2시에 역삼역에서 만나요!",
      productName: "아이폰 14 Pro 딥퍼플",
      price: 850000,
      timestamp: "오후 3:24",
      unreadCount: 2,
      isOnline: true,
    },
    {
      id: "2",
      userName: "박영희",
      productImage: "/images/product_2",
      lastMessage: "사진 더 보내주실 수 있나요?",
      productName: "맥북 에어 M2 실버",
      price: 1200000,
      timestamp: "오후 1:15",
      unreadCount: 0,
      isOnline: false,
    },
    {
      id: "3",
      userName: "이민수",
      productImage: "/images/product_3",
      lastMessage: "경매 참여했습니다! 💪",
      productName: "삼성 갤럭시 워치5",
      price: 180000,
      timestamp: "오전 11:42",
      unreadCount: 1,
      isOnline: true,
    },
  ];
}

export default async function ChatListPage() {
  const rooms = await getChatRooms();

  return (
    <div className="flex h-full flex-col bg-white">
      {/* 상단 검색창 */}
      <header className="sticky top-0 z-10 p-4">
        <input
          type="text"
          placeholder="채팅방 검색"
          className="w-full rounded-md border border-gray-200 bg-gray-100 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </header>

      {/* 채팅 목록 */}
      <main className="flex-1 overflow-y-auto">
        <ul>
          {rooms.map(room => (
            <li key={room.id}>
              <Link href={`/chat/${room.id}`} className="flex space-x-4 p-4">
                {/* 상품 이미지 */}
                <div className="relative h-14 w-14 flex-shrink-0">
                  <Image
                    src={room.productImage}
                    alt={room.productName}
                    width={56}
                    height={56}
                    className="rounded-md object-cover"
                  />
                  {room.isOnline && (
                    <span className="absolute -bottom-1 -right-1 block h-3 w-3 rounded-full border-2 border-white bg-green-500" />
                  )}
                </div>

                {/* 채팅 정보 */}
                <div className="flex-1 overflow-hidden">
                  <p className="font-semibold text-gray-800">{room.userName}</p>
                  <p className="truncate text-sm text-gray-600">
                    {room.lastMessage}
                  </p>
                  <p className="mt-1 truncate text-xs text-gray-400">
                    {room.productName} &middot; {room.price.toLocaleString()}원
                  </p>
                </div>

                {/* 시간 및 안 읽은 메시지 */}
                <div className="flex flex-col items-end space-y-1 text-xs text-gray-400">
                  <p>{room.timestamp}</p>
                  {room.unreadCount > 0 && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                      {room.unreadCount}
                    </span>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
