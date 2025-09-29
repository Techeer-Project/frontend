"use client";

import React from "react";
import {
  Avatar,
  Tag,
  Row,
  Col,
  Divider,
  List,
  Tabs,
  Typography,
  Space,
  Badge,
} from "antd";
import {
  EnvironmentOutlined,
  EditOutlined,
  HeartOutlined,
  StarOutlined,
  SafetyOutlined,
  CreditCardOutlined,
  SettingOutlined,
  CustomerServiceOutlined,
  HomeOutlined,
  ThunderboltOutlined,
  PlusCircleOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Text, Title } = Typography;

const sellingItems = [
  {
    id: 1,
    title: "아이폰 14 Pro 딥퍼플 128GB",
    price: "850,000원",
    badge: "판매중",
    meta: "조회 45 · 관심 8",
    emoji: "📱",
  },
  {
    id: 2,
    title: "맥북 에어 M2 실버 256GB",
    price: "1,250,000원",
    badge: "판매중",
    meta: "조회 102 · 관심 17",
    emoji: "💻",
  },
];

export default function MyPage() {
  return (
    <div className="min-h-full bg-white">
      {/* 상단 - 프로필 영역 */}
      <section className="px-4 pt-5">
        <div className="rounded-2xl border border-black/10 p-4 shadow-sm">
          <Row gutter={16} align="middle" justify="space-between">
            <Col flex="none">
              {/* 오렌지 원형 아바타 / '홍' */}
              <Avatar
                size={64}
                style={{
                  backgroundColor: "#FF7A00",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 28,
                }}
              >
                홍
              </Avatar>
            </Col>

            <Col flex="auto">
              <Space direction="vertical" size={4} className="pl-2">
                <Space size="small" align="center">
                  <Title level={4} className="!m-0 !font-bold">
                    홍길동
                  </Title>
                  <Tag color="success" className="!rounded-full">
                    인증
                  </Tag>
                </Space>
                <Space size={6} align="center" className="text-gray-500">
                  <EnvironmentOutlined />
                  <Text type="secondary">강남구 역삼동</Text>
                </Space>
              </Space>
            </Col>

            <Col flex="none">
              <EditOutlined className="text-xl text-gray-500" />
            </Col>
          </Row>

          <Divider className="!my-4" />

          {/* 평점/후기/거래/응답률 */}
          <Row gutter={0} className="text-center">
            {[
              { label: "평점", value: "4.8" },
              { label: "후기", value: "24" },
              { label: "거래", value: "32" },
              { label: "응답률", value: "95%" },
            ].map((s, idx) => (
              <Col span={6} key={idx} className="py-2">
                <div className="text-2xl font-extrabold">{s.value}</div>
                <div className="text-gray-500 text-sm mt-1">{s.label}</div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* 바로가기 아이콘 그리드 */}
      <section className="px-4 mt-4">
        <div className="grid grid-cols-3 gap-y-6 rounded-2xl border border-gray-100 p-5 shadow-sm">
          <Shortcut icon={<HeartOutlined />} label="관심목록" />
          <Shortcut icon={<StarOutlined />} label="내 후기" />
          <Shortcut icon={<SafetyOutlined />} label="지역 인증" />
          <Shortcut icon={<CreditCardOutlined />} label="판매수익" />
          <Shortcut icon={<SettingOutlined />} label="설정" />
          <Shortcut icon={<CustomerServiceOutlined />} label="고객센터" />
        </div>
      </section>

      {/* 탭 + 리스트 */}
      <section className="mt-4">
        <Tabs
          defaultActiveKey="sell"
          className="[--ant-tabs-ink-bar-color:#ff7a00] [--ant-tabs-active-color:#ff7a00]"
          items={[
            {
              key: "sell",
              label: <span className="text-[#ff7a00]">판매내역</span>,
              children: <SellList />,
            },
            {
              key: "buy",
              label: "구매내역",
              children: <EmptyBlock text="구매내역이 없습니다." />,
            },
            {
              key: "auction",
              label: "경매내역",
              children: <EmptyBlock text="경매내역이 없습니다." />,
            },
          ]}
        />
      </section>
    </div>
  );

  function SellList() {
    return (
      <div className="px-4">
        <div className="flex items-center justify-between py-2 text-gray-600">
          <span className="text-base font-semibold">판매중인 상품</span>
          <span>2개</span>
        </div>

        <List
          itemLayout="horizontal"
          dataSource={sellingItems}
          split={false}
          renderItem={item => (
            <List.Item className="rounded-xl border mb-3 px-3 py-3">
              <List.Item.Meta
                avatar={
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50 text-2xl">
                    {item.emoji}
                  </div>
                }
                title={
                  <div className="flex flex-col">
                    <span className="text-[17px] font-semibold">
                      {item.title}
                    </span>
                    <span className="mt-1 text-[20px] font-extrabold">
                      {item.price}
                    </span>
                    <div className="mt-2 flex items-center gap-2">
                      <Tag
                        color="success"
                        className="!rounded-full !px-2 !py-0.5"
                      >
                        {item.badge}
                      </Tag>
                      <Text type="secondary" className="text-sm">
                        {item.meta}
                      </Text>
                    </div>
                  </div>
                }
                description={null}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

/** 재사용 컴포넌트들 */
function Shortcut({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <Badge count={0} size="small">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-700">
          {icon}
        </div>
      </Badge>
      <div className="mt-2 text-[13px] text-gray-600">{label}</div>
    </div>
  );
}

function EmptyBlock({ text }: { text: string }) {
  return <div className="px-4 py-10 text-center text-gray-400">{text}</div>;
}
