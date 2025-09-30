// components/PhoneFrameLayout.tsx
import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  title?: string; // 상단 앱바 텍스트 (옵션)
  className?: string;
};

export default function PhoneFrameLayout({
  children,
  title,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        // 데스크톱 배경 & 가운데 정렬
        "fixed inset-0 z-0",
        "min-h-dvh grid place-items-center px-6"
      )}
    >
      {/* 스마트폰 프레임 래퍼: 최대 600px */}
      <div className="w-full max-w-[600px] h-full">
        <div
          className={clsx(
            "relative h-[100vh]",
            "shadow-[0_18px_28px_rgba(0,0,0,.18),0_2px_8px_rgba(0,0,0,.07)]",
            "overflow-hidden",
            className
          )}
        >
          {/* 실제 화면: 내부만 스크롤 */}
          <div
            className={clsx(
              "absolute inset-0  bg-white",
              "overflow-y-auto [scroll-behavior:smooth] [-webkit-overflow-scrolling:touch]"
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
