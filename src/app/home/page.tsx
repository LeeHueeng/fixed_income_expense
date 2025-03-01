"use client";

import React from "react";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">대시보드</h1>

      {/* 기본 기능 카드 예시 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">기본 기능</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">📈 수입 계산</h3>
            <p className="text-gray-700">
              월급이나 연봉을 입력하면, 여러분의 수입이 어떻게 들어오는지 한눈에
              보여드려요!
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">💸 지출 계산</h3>
            <p className="text-gray-700">
              전기세, 가스비 등 고정 지출을 관리해서, 불필요한 낭비를 줄일 수
              있어요!
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">📊 데이터 시각화</h3>
            <p className="text-gray-700">
              귀여운 그래프와 차트로 내 재정 상태를 쉽고 재미있게 확인할 수
              있어요!
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">🔔 알림 기능</h3>
            <p className="text-gray-700">
              예산 초과나 결제 예정일을 미리 알려드려, 걱정 없이 관리할 수
              있어요!
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">🔄 자동 예산 조정</h3>
            <p className="text-gray-700">
              소비패턴 분석을 통해 고정지출을 줄일 수 있는 방향을 알려드려요 😊
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">🤖 AI 재무 상담</h3>
            <p className="text-gray-700">
              똑똑한 AI가 여러분의 재정 상황을 분석해, 친절한 조언을 해드려요!
            </p>
          </div>
        </div>
      </section>

      {/* 프리미엄 기능 카드 예시 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          프리미엄 기능 <span className="text-sm text-yellow-600">(유료)</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-yellow-300 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">🎯 목표 달성 도우미</h3>
            <p className="text-gray-700">
              재무 목표를 함께 설정하고, 즐겁게 달성할 수 있도록 도와드려요!
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border border-yellow-300 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">📅 자동 리포트 생성</h3>
            <p className="text-gray-700">
              매달, 매년 재정 리포트를 자동으로 만들어드려요. 간편하고 편리해요!
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border border-yellow-300 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">💡 맞춤형 재무 계획</h3>
            <p className="text-gray-700">
              여러분만의 상황에 맞는 재정 계획으로, 더 행복한 미래를 설계해봐요!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
