"use client";

import React from "react";
import Link from "next/link";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* 왼쪽 사이드바 */}
      <aside className="bg-blue-700 text-white w-full md:w-64 p-4 flex-shrink-0">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">FixBudget</h2>
        </div>
        <nav>
          <ul>
            <li className="py-2 px-4 hover:bg-blue-600 rounded cursor-pointer">
              <Link href="/home">대시보드</Link>
            </li>
            <li className="py-2 px-4 hover:bg-blue-600 rounded cursor-pointer">
              <Link href="/home/income">수입 관리</Link>
            </li>
            <li className="py-2 px-4 hover:bg-blue-600 rounded cursor-pointer">
              <Link href="/home/expense">지출 관리</Link>
            </li>
            <li className="py-2 px-4 hover:bg-blue-600 rounded cursor-pointer">
              <Link href="/home/visualization">재무 리포트</Link>
            </li>
            <li className="py-2 px-4 hover:bg-blue-600 rounded cursor-pointer">
              <Link href="/home/alerts">알림 센터</Link>
            </li>
            <li className="py-2 px-4 hover:bg-blue-600 rounded cursor-pointer">
              <Link href="/home/auto-budget">스마트 예산</Link>
            </li>
            <li className="py-2 px-4 hover:bg-blue-600 rounded cursor-pointer">
              <Link href="/home/ai-consulting">AI 금융 상담</Link>
            </li>
            <li className="py-2 px-4 hover:bg-blue-600 rounded cursor-pointer">
              <Link href="/home/premium">프리미엄 서비스</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* 오른쪽 메인 콘텐츠 영역 */}
      <main className="flex-1 bg-gray-100 p-6 overflow-auto">{children}</main>
    </div>
  );
}
