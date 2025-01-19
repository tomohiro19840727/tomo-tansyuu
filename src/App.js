// Import necessary libraries
import React, { useState } from 'react';

function AreaCalculator() {
  const [area, setArea] = useState(0); // 面積(a)
  const [yieldKg, setYieldKg] = useState(0); // 作物の収量(kg)
  const [yieldPer10a, setYieldPer10a] = useState(0); // 10aあたりの収量(kg)
  const [yieldInTawara, setYieldInTawara] = useState(0); // 俵数
  const [tawaraPer10a, setTawaraPer10a] = useState(0); // 10aあたりの俵数

  // 計算を行う関数
  const calculateYield = () => {
    const per10a = area > 0 ? yieldKg / (area / 10) : 0;
    const tawara = yieldKg / 60; // 1俵 = 60kgとして計算
    const tawaraPer10a = per10a / 60; // 10aあたりの俵数
    setYieldPer10a(per10a);
    setYieldInTawara(tawara);
    setTawaraPer10a(tawaraPer10a);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">面積と収量計算アプリ</h1>

      {/* 面積入力 */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="area">
          面積 (a):
        </label>
        <input
          type="number"
          id="area"
          value={area}
          onChange={(e) => setArea(parseFloat(e.target.value))}
          className="border rounded w-full py-2 px-3 text-gray-700"
          placeholder="例: 50"
        />
      </div>

      {/* 作物の収量入力 */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="yieldKg">
          作物の収量 (kg):
        </label>
        <input
          type="number"
          id="yieldKg"
          value={yieldKg}
          onChange={(e) => setYieldKg(parseFloat(e.target.value))}
          className="border rounded w-full py-2 px-3 text-gray-700"
          placeholder="例: 1000"
        />
      </div>

      {/* 計算ボタン */}
      <button
        onClick={calculateYield}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        計算する
      </button>

      {/* 計算結果表示 */}
      {(yieldPer10a > 0 || yieldInTawara > 0) && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700">
          <p>10aあたりの収量: {yieldPer10a.toFixed(2)} kg</p>
          <p>10aあたりの俵数: {tawaraPer10a.toFixed(2)} 俵</p>
          <p>合計俵数: {yieldInTawara.toFixed(2)} 俵</p>
        </div>
      )}
    </div>
  );
}

export default AreaCalculator;
