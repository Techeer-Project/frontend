// app/mypage/BottomNav.tsx
"use client";
import Link from "next/link";
import {
  HomeOutlined,
  ThunderboltOutlined,
  PlusCircleOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function BottomNav() {
  return (
    <nav className="bottom">
      <div className="bottom-safe" />
      <div className="bottom-inner">
        {/* <ul className="bottom-nav bottom-cols-5">
          <li>
            <Link href="/" className="bottom-item">
              <span className="bottom-icon bottom-inactive">
                <HomeOutlined />
              </span>
              <span className="bottom-label bottom-inactive">홈</span>
            </Link>
          </li>
          <li>
            <Link href="/auction" className="bottom-item">
              <span className="bottom-icon bottom-inactive">
                <ThunderboltOutlined />
              </span>
              <span className="bottom-label bottom-inactive">경매</span>
            </Link>
          </li>
          <li>
            <Link href="/sell" className="bottom-item">
              <span className="bottom-icon bottom-inactive">
                <PlusCircleOutlined />
              </span>
              <span className="bottom-label bottom-inactive">판매</span>
            </Link>
          </li>
          <li>
            <Link href="/chat" className="bottom-item">
              <span className="bottom-icon bottom-inactive">
                <MessageOutlined />
              </span>
              <span className="bottom-label bottom-inactive">채팅</span>
            </Link>
          </li>
          <li>
            <Link href="/mypage" className="bottom-item">
              <span className="bottom-icon bottom-active">
                <UserOutlined />
              </span>
              <span className="bottom-label bottom-active">내정보</span>
            </Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
}
