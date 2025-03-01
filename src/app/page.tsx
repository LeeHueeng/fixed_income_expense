"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LandingPage() {
  const router = useRouter();
  const isLoggedIn = true; // 실제 로그인 상태와 연동 필요

  const handleStart = () => {
    if (isLoggedIn) {
      router.push("/home");
    } else {
      router.push("/auth/login");
    }
  };

  // 애니메이션 variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {/* 히어로 섹션 - 첫 화면 */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
        transition={{ duration: 0.8 }}
        className="snap-start flex items-center justify-center bg-white bg-opacity-90 min-h-screen"
      >
        <div className="max-w-6xl text-center px-4 py-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            우리와 함께 고정 수입과 지출을 쉽고 즐겁게 관리해요!
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            FixBudget와 함께라면, 여러분의 소중한 돈을 더 알차게 관리할 수
            있어요. 매달 고정지출을 줄이고, 즐거운 소비 습관을 만들어봐요 😊
          </p>
          <button
            onClick={handleStart}
            className="px-10 py-4 bg-green-500 text-white text-lg font-semibold rounded-full shadow-2xl hover:bg-green-600 transition duration-300"
          >
            시작하기
          </button>
        </div>
      </motion.section>

      {/* 기능 소개 섹션 - 배경색 변경 */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
        transition={{ duration: 0.8 }}
        className="snap-start bg-gray-100 min-h-screen flex items-center justify-center"
      >
        <div className="max-w-6xl px-4 py-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800">FixBudget 기능</h3>
            <p className="mt-4 text-lg text-gray-600">
              다양한 기능으로 여러분의 재정을 친근하게 관리해드려요!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 수입 계산 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <h4 className="text-2xl font-semibold mb-2">📈 수입 계산</h4>
              <p className="text-gray-600">
                월급이나 연봉을 입력하면, 여러분의 수입이 어떻게 들어오는지
                한눈에 보여드려요!
              </p>
            </motion.div>
            {/* 지출 계산 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <h4 className="text-2xl font-semibold mb-2">💸 지출 계산</h4>
              <p className="text-gray-600">
                전기세, 가스비 등 고정 지출을 손쉽게 관리해서, 불필요한 낭비를
                줄일 수 있어요!
              </p>
            </motion.div>
            {/* 데이터 시각화 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <h4 className="text-2xl font-semibold mb-2">📊 데이터 시각화</h4>
              <p className="text-gray-600">
                귀여운 그래프와 차트로, 내 재정 상태를 쉽고 재미있게 확인할 수
                있어요!
              </p>
            </motion.div>
            {/* 알림 기능 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <h4 className="text-2xl font-semibold mb-2">🔔 알림 기능</h4>
              <p className="text-gray-600">
                예산 초과나 결제 예정일을 미리 알려드려, 걱정 없이 관리할 수
                있게 도와드려요!
              </p>
            </motion.div>
            {/* 자동 예산 조정 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <h4 className="text-2xl font-semibold mb-2">🔄 자동 예산 조정</h4>
              <p className="text-gray-600">
                소비패턴과 분석을 통해 고정지출을 줄일 수 있는 방향을 알려드려요
                😊
              </p>
            </motion.div>
            {/* AI 재무 상담 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <h4 className="text-2xl font-semibold mb-2">🤖 AI 재무 상담</h4>
              <p className="text-gray-600">
                똑똑한 AI가 여러분의 재정 상황을 분석해, 친절한 조언을 해드려요!
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 추가 기능 섹션 */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
        transition={{ duration: 0.8 }}
        className="snap-start bg-white min-h-screen flex items-center justify-center"
      >
        <div className="max-w-6xl px-4 py-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800">더 많은 기능</h3>
            <p className="mt-4 text-lg text-gray-600">
              여러분의 재정을 더욱 풍성하게 만들어줄 추가 기능들을 소개할게요!
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* 목표 달성 도우미 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-1 bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl shadow-lg text-center"
            >
              <h4 className="text-2xl font-semibold mb-2">
                🎯 목표 달성 도우미
              </h4>
              <p className="text-gray-600">
                재무 목표를 함께 설정하고, 즐겁게 달성할 수 있도록 도와드려요!
              </p>
            </motion.div>
            {/* 자동 리포트 생성 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-1 bg-gradient-to-br from-yellow-100 to-orange-100 p-6 rounded-2xl shadow-lg text-center"
            >
              <h4 className="text-2xl font-semibold mb-2">
                📅 자동 리포트 생성
              </h4>
              <p className="text-gray-600">
                매달, 매년 나의 재정 리포트를 자동으로 만들어드려요. 간편하고
                편리해요!
              </p>
            </motion.div>
            {/* 맞춤형 재무 계획 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-1 bg-gradient-to-br from-green-100 to-blue-100 p-6 rounded-2xl shadow-lg text-center"
            >
              <h4 className="text-2xl font-semibold mb-2">
                💡 맞춤형 재무 계획
              </h4>
              <p className="text-gray-600">
                여러분만의 상황에 딱 맞는 재정 계획으로, 더 행복한 미래를
                설계해봐요!
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 문의 및 제작자 정보 섹션 */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
        transition={{ duration: 0.8 }}
        className="snap-start bg-gray-50 min-h-screen flex items-center justify-center"
      >
        <div className="max-w-6xl px-4 py-16">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold text-gray-800">
              문의 & 제작자 정보
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              궁금한 점이나 도움이 필요하시면 언제든지 연락 주세요. 친절하게
              답변해드릴게요!
            </p>
          </div>
          <div className="text-center">
            <p className="text-xl text-gray-700 font-semibold">제작: hueeng</p>
            <p className="mt-2 text-gray-700">저작권: hueeng</p>
            <p className="mt-2">
              문의:{" "}
              <a
                href="mailto:zzxx373014@gmail.com"
                className="text-blue-600 underline"
              >
                zzxx373014@gmail.com
              </a>
            </p>
          </div>
        </div>
      </motion.section>

      {/* 푸터 */}
      <footer className="snap-start bg-white py-6 text-center text-gray-500">
        © 2025 hueeng. All rights reserved.
      </footer>
    </div>
  );
}
