// app/mypage/Header.tsx
"use client";
import { LeftOutlined, SettingOutlined } from "@ant-design/icons";

export default function Header() {
  return (
    <header className="header">
      <div className="header-safe" />
      <div className="header-inner">
        <div className="header-grid">
          <div className="header-left">
            <button className="header-btn" onClick={() => history.back()}>
              <LeftOutlined />
            </button>
          </div>
          <div className="header-center">
            <h1 className="header-title">내정보</h1>
          </div>
          <div className="header-right">
            <button className="header-btn">
              <SettingOutlined />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
