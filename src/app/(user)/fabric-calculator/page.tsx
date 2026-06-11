'use client';

import { useState, useMemo } from 'react';
import { fabricData, Fabric } from './data/fabric-data';

// 1 yard = 0.9144 meters (from Excel G1)
const YARD_TO_METER = 0.9144;

export default function FabricCalculator() {
  const [selectedFabric, setSelectedFabric] = useState<Fabric | null>(null);
  
  // Cost inputs
  const [hargaKg, setHargaKg] = useState<string>('');
  const [hargaSaatIni, setHargaSaatIni] = useState<string>('');
  const [hargaYard, setHargaYard] = useState<string>('');
  const [meterPerKg, setMeterPerKg] = useState<string>('');
  const [yardPerKg, setYardPerKg] = useState<string>('');
  
  // Markup inputs (from Excel columns H-M)
  const [targetMarginBersih, setTargetMarginBersih] = useState<string>('12');
  const [biayaOverhead, setBiayaOverhead] = useState<string>('7');
  const [toleransiAdds, setToleransiAdds] = useState<string>('6');
  const [adminFeeShopee, setAdminFeeShopee] = useState<string>('20');
  const [risikoWasteShrinkage, setRisikoWasteShrinkage] = useState<string>('1');
  const [pembulatan, setPembulatan] = useState<string>('500');

  // Calculate results using Excel formulas - updates automatically when inputs change
const results = useMemo(() => {
  const hargaKgNum = parseFloat(hargaKg) || 0;
  const hargaSaatIniNum = parseFloat(hargaSaatIni) || 0;

  if (hargaKgNum <= 0 || hargaSaatIniNum <= 0) {
    return null;
  }

  // Excel formulas
  // F = Harga KG / Harga Saat Ini
  const meterPerKgCalculated = hargaKgNum / hargaSaatIniNum;

  // G = Meter / 0.9144
  const yardPerKgCalculated = meterPerKgCalculated / YARD_TO_METER;

  // E = Harga Saat Ini / 0.9144
  const hargaYardCalculated = hargaSaatIniNum / YARD_TO_METER;

  // Total %
  const totalPercent =
    (parseFloat(targetMarginBersih) || 0) +
    (parseFloat(biayaOverhead) || 0) +
    (parseFloat(toleransiAdds) || 0) +
    (parseFloat(adminFeeShopee) || 0) +
    (parseFloat(risikoWasteShrinkage) || 0);

  // N = Harga Yard / (1 - Total%)
  const hargaJualYard = hargaYardCalculated / (1 - totalPercent / 100);

  // O = Harga Jual Yard / 0.9144
  const hargaJualMeter = hargaJualYard / YARD_TO_METER;

  // P = Harga Jual Meter / 2
  const hargaJualSetengahMeter = hargaJualMeter / 2;

  // Pembulatan ke atas
  const pembulatanNum = parseFloat(pembulatan) || 500;

  const hargaJualYardRounded =
    Math.ceil(hargaJualYard / pembulatanNum) * pembulatanNum;

  return {
    hargaYard: hargaYardCalculated,
    meterPerKg: meterPerKgCalculated,
    yardPerKg: yardPerKgCalculated,
    totalPercent,

    hargaJualYard,
    hargaJualMeter,
    hargaJualSetengahMeter,

    hargaJualYardRounded,

    kenaikan: hargaJualYardRounded - hargaSaatIniNum,
  };
}, [
  hargaKg,
  hargaSaatIni,
  targetMarginBersih,
  biayaOverhead,
  toleransiAdds,
  adminFeeShopee,
  risikoWasteShrinkage,
  pembulatan,
]);

  // Handle fabric selection
const handleFabricChange = (
  e: React.ChangeEvent<HTMLSelectElement>
) => {
  const fabric = fabricData.find(
    (f) => f.id === e.target.value
  );

  setSelectedFabric(fabric || null);

  if (fabric) {
    setHargaKg(fabric.hargaKg.toString());
    setHargaSaatIni(fabric.hargaSaatIni.toString());
  }
};

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Kalkulator Harga Kain</h1>

        {/* Fabric Selection */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Pilih Kain</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">Nama Kain</label>
            <select
              value={selectedFabric?.id || ''}
              onChange={handleFabricChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">-- Pilih Kain --</option>
              {fabricData.map(fabric => (
                <option key={fabric.id} value={fabric.id}>{fabric.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Cost Inputs */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Input Biaya</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Harga per KG (Rp)</label>
              <input
                type="number"
                value={hargaKg}
                onChange={(e) => setHargaKg(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="100000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Harga Saat Ini (Rp)</label>
              <input
                type="number"
                value={hargaSaatIni}
                onChange={(e) => setHargaSaatIni(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="37500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Harga Yard (Rp)</label>
              <input
                type="number"
                value={hargaYard}
                onChange={(e) => setHargaYard(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="41010"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Meter per KG</label>
              <input
                type="number"
                step="0.01"
                value={meterPerKg}
                onChange={(e) => setMeterPerKg(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="2.67"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Yard per KG</label>
              <input
                type="number"
                step="0.01"
                value={yardPerKg}
                onChange={(e) => setYardPerKg(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="2.92"
              />
            </div>
          </div>
        </div>

        {/* Markup Inputs */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Markup & Biaya (%)</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Target Margin Bersih</label>
              <input
                type="number"
                step="0.1"
                value={targetMarginBersih}
                onChange={(e) => setTargetMarginBersih(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="12"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Biaya Overhead</label>
              <input
                type="number"
                step="0.1"
                value={biayaOverhead}
                onChange={(e) => setBiayaOverhead(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="7"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Toleransi Adds</label>
              <input
                type="number"
                step="0.1"
                value={toleransiAdds}
                onChange={(e) => setToleransiAdds(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="6"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Admin Fee Shopee</label>
              <input
                type="number"
                step="0.1"
                value={adminFeeShopee}
                onChange={(e) => setAdminFeeShopee(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Risiko Waste/Shrinkage</label>
              <input
                type="number"
                step="0.1"
                value={risikoWasteShrinkage}
                onChange={(e) => setRisikoWasteShrinkage(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Pembulatan (Rp)</label>
              <input
                type="number"
                value={pembulatan}
                onChange={(e) => setPembulatan(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="500"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        {results && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Hasil Perhitungan</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Harga Dasar</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Harga Yard:</span>
                    <span className="font-semibold text-gray-800">Rp {results.hargaYard.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Persentase:</span>
                    <span className="font-semibold text-gray-800">{results.totalPercent.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Harga Jual</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Harga Jual per Yard:</span>
                    <span className="font-bold text-green-600">Rp {results.hargaJualYard.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Harga Jual per Meter:</span>
                    <span className="font-bold text-green-600">Rp {results.hargaJualMeter.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Harga Jual per ½ Meter:</span>
                    <span className="font-bold text-green-600">Rp {results.hargaJualSetengahMeter.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
