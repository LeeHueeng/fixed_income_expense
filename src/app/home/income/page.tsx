"use client";

import React, { useState } from "react";

export default function IncomePage() {
  // 고정수입 항목 관련 상태
  const [fixedIncomes, setFixedIncomes] = useState<
    { id: number; category: string; amount: number }[]
  >([]);
  const [incomeCategory, setIncomeCategory] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");

  const fixedIncomeCategories = [
    "시간급, 일급, 주급, 월급 임금",
    "채권, 우선주 등의 고정 소득 투자",
    "연금에서 파생된 소득",
    "정기예금, 정기적금 등의 예금상품",
    "채권, CP, CD, 개발신탁 등의 고정금리 상품",
  ];

  const addFixedIncome = () => {
    if (incomeCategory && incomeAmount) {
      const newEntry = {
        id: Date.now(),
        category: incomeCategory,
        amount: parseFloat(incomeAmount),
      };
      setFixedIncomes([...fixedIncomes, newEntry]);
      setIncomeCategory("");
      setIncomeAmount("");
    }
  };

  const removeFixedIncome = (id: number) => {
    setFixedIncomes(fixedIncomes.filter((item) => item.id !== id));
  };

  // 연봉 계산기 관련 상태
  const [salary, setSalary] = useState("");
  const [retirementPay, setRetirementPay] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");
  const [dependents, setDependents] = useState(1);
  const [children, setChildren] = useState(0);
  const [taxExemptAmount, setTaxExemptAmount] = useState("200000");
  const [netMonthlyIncome, setNetMonthlyIncome] = useState(0);
  const [deductions, setDeductions] = useState({
    nationalPension: 0,
    healthInsurance: 0,
    longTermCare: 0,
    employmentInsurance: 0,
    incomeTax: 0,
    localIncomeTax: 0,
    totalDeductions: 0,
  });

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 계산 로직 구현 가능 - 여기서는 임의의 값 사용
    const dummyNet = 3000000; // 월 예상 실수령액 예시 값
    setNetMonthlyIncome(dummyNet);
    setDeductions({
      nationalPension: 150000,
      healthInsurance: 100000,
      longTermCare: 50000,
      employmentInsurance: 30000,
      incomeTax: 200000,
      localIncomeTax: 50000,
      totalDeductions: 580000,
    });
  };

  const handleReset = () => {
    setSalary("");
    setRetirementPay("");
    setAnnualIncome("");
    setDependents(1);
    setChildren(0);
    setTaxExemptAmount("200000");
    setNetMonthlyIncome(0);
    setDeductions({
      nationalPension: 0,
      healthInsurance: 0,
      longTermCare: 0,
      employmentInsurance: 0,
      incomeTax: 0,
      localIncomeTax: 0,
      totalDeductions: 0,
    });
    setFixedIncomes([]);
    setIncomeCategory("");
    setIncomeAmount("");
  };

  const handleCopyResult = () => {
    const resultText = `월 예상 실수령액: ${netMonthlyIncome}원
국민연금: ${deductions.nationalPension}원
건강보험: ${deductions.healthInsurance}원
장기요양: ${deductions.longTermCare}원
고용보험: ${deductions.employmentInsurance}원
소득세: ${deductions.incomeTax}원
지방소득세: ${deductions.localIncomeTax}원
공제액 합계: ${deductions.totalDeductions}원`;
    navigator.clipboard.writeText(resultText);
    alert("결과가 복사되었습니다.");
  };

  return (
    <div className="p-6 space-y-8">
      {/* 고정수입 정보 섹션 */}
      <section className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">고정수입 정보</h2>
        <p className="mb-2">
          고정수입은 시간을 기준으로 지급되는 임금이나, 시간이 지나도 크게
          변하지 않는 소득을 말합니다.
        </p>
        <p className="mb-2 font-semibold">고정수입의 예시:</p>
        <ul className="list-disc list-inside mb-4">
          <li>시간급, 일급, 주급, 월급 등의 임금</li>
          <li>채권, 우선주 등의 고정 소득 투자</li>
          <li>연금의 조합에서 파생된 소득</li>
          <li>정기예금, 정기적금 등의 예금상품</li>
          <li>
            채권, CP(기업어음), CD(양도성예금증서), 개발신탁 등의 고정금리 상품
          </li>
        </ul>
        <p className="mb-2 font-semibold">고정수입 투자:</p>
        <p className="mb-4">
          고정수입 투자는 미리 알려진 이자율이나 배당금을 기반으로 고정 현금
          흐름을 제공하는 투자입니다. 고정수익 증권은 투자자에게 지급되는 이자를
          대가로 정부, 기업 또는 은행에 대출하는 증권입니다. 국채, 기업채,
          지방채, 예금증서 등이 일반적인 고정수익 투자에 해당합니다.
        </p>

        {/* 고정수입 항목 입력 */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">고정수입 항목 추가</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <select
              value={incomeCategory}
              onChange={(e) => setIncomeCategory(e.target.value)}
              className="p-2 border rounded w-full md:w-1/2"
            >
              <option value="">카테고리 선택</option>
              {fixedIncomeCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <input
              type="number"
              value={incomeAmount}
              onChange={(e) => setIncomeAmount(e.target.value)}
              placeholder="금액 입력"
              className="p-2 border rounded w-full md:w-1/2"
            />
          </div>
          <button
            onClick={addFixedIncome}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            항목 추가
          </button>
        </div>

        {/* 추가된 고정수입 항목 목록 */}
        {fixedIncomes.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">추가된 고정수입 항목</h3>
            <ul className="list-disc list-inside">
              {fixedIncomes.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <span>
                    {item.category}: {item.amount}원
                  </span>
                  <button
                    onClick={() => removeFixedIncome(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    삭제
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* 연봉 계산기 섹션 */}
      <section className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">연봉계산기</h2>
        <form onSubmit={handleCalculate} className="space-y-4">
          {/* 필수 입력 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              연봉 관련 정보 입력 (필수)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block mb-1 font-medium">급여 기준</label>
                <input
                  type="number"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="예: 3000000"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">퇴직금</label>
                <input
                  type="number"
                  value={retirementPay}
                  onChange={(e) => setRetirementPay(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="예: 1000000"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">연봉</label>
                <input
                  type="number"
                  value={annualIncome}
                  onChange={(e) => setAnnualIncome(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="예: 36000000"
                />
              </div>
            </div>
          </div>

          {/* 추가 금액 버튼 */}
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={() =>
                setAnnualIncome((prev) =>
                  String((Number(prev) || 0) + 10000000)
                )
              }
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              +1000만
            </button>
            <button
              type="button"
              onClick={() =>
                setAnnualIncome((prev) => String((Number(prev) || 0) + 1000000))
              }
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              +100만
            </button>
            <button
              type="button"
              onClick={() =>
                setAnnualIncome((prev) => String((Number(prev) || 0) + 100000))
              }
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              +10만
            </button>
          </div>

          {/* 선택 입력 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">선택 입력</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block mb-1 font-medium">
                  부양 가족 수 (본인 포함)
                </label>
                <input
                  type="number"
                  value={dependents}
                  onChange={(e) => setDependents(parseInt(e.target.value) || 1)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">
                  20세 이하 자녀수
                </label>
                <input
                  type="number"
                  value={children}
                  onChange={(e) => setChildren(parseInt(e.target.value) || 0)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">비과세액</label>
                <input
                  type="number"
                  value={taxExemptAmount}
                  onChange={(e) => setTaxExemptAmount(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              계산하기
            </button>
            <button
              type="button"
              onClick={handleCopyResult}
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              결과 복사
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              초기화
            </button>
          </div>
        </form>

        {/* 계산 결과 */}
        <div className="mt-6 p-4 border rounded">
          <h3 className="text-xl font-bold mb-2">연봉 계산기 결과</h3>
          <p>
            월 예상 실수령액:{" "}
            <span className="font-semibold">{netMonthlyIncome}원</span>
          </p>
          <div className="mt-4">
            <p>한 달 기준 공제액</p>
            <ul className="list-disc list-inside">
              <li>국민연금: {deductions.nationalPension}원</li>
              <li>건강보험: {deductions.healthInsurance}원</li>
              <li>장기요양: {deductions.longTermCare}원</li>
              <li>고용보험: {deductions.employmentInsurance}원</li>
              <li>소득세: {deductions.incomeTax}원</li>
              <li>지방소득세: {deductions.localIncomeTax}원</li>
              <li>총 공제액: {deductions.totalDeductions}원</li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          본 연봉계산기는 가장 범용적인 기준으로 만들었으나, 연봉 지급 조건과
          상황에 따라 약간의 오차가 발생할 수 있으니 참고용으로 활용하시기
          바랍니다. 본 계산기는 모의계산 결과로 법적 효력이 없습니다. 실 수령액
          산정 기준 : 국세청 간이세액표 보기
        </p>
      </section>
    </div>
  );
}
