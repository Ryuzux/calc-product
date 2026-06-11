export interface Fabric {
  id: string;
  name: string;
  hargaKg: number; // Column C: Harga KG
  hargaSaatIni: number; // Column D: Harga Saat Ini
  hargaYard: number; // Column E: Harga Yard
  meterPerKg: number; // Column F: Meter
  yardPerKg: number; // Column G: Yard
}

export const fabricData: Fabric[] = [
  { id: "1", name: "Airflow Bubble Waffle Bohoho", hargaKg: 100000, hargaSaatIni: 37500, hargaYard: 41010.00, meterPerKg: 2.67, yardPerKg: 2.92 },
  { id: "2", name: "Fiore Embroidery D#21", hargaKg: 100000, hargaSaatIni: 30000, hargaYard: 32808, meterPerKg: 3.33, yardPerKg: 3.65 },
  { id: "3", name: "Fiore Embroidery D#20", hargaKg: 100000, hargaSaatIni: 30000, hargaYard: 32808, meterPerKg: 3.33, yardPerKg: 3.65 },
  { id: "4", name: "Fiore Embroidery D#73", hargaKg: 100000, hargaSaatIni: 30000, hargaYard: 32808, meterPerKg: 3.33, yardPerKg: 3.65 },
  { id: "5", name: "Katun File Embroidery D#79", hargaKg: 100000, hargaSaatIni: 30000, hargaYard: 32808, meterPerKg: 3.33, yardPerKg: 3.65 },
  { id: "6", name: "Lisbon Modal Tebal Premium", hargaKg: 125000, hargaSaatIni: 48500, hargaYard: 53040, meterPerKg: 2.58, yardPerKg: 2.82 },
  { id: "7", name: "Plisket Glitter Platinum Silver", hargaKg: 140000, hargaSaatIni: 31000, hargaYard: 33902, meterPerKg: 4.52, yardPerKg: 4.94 },
  { id: "8", name: "Satin Polos Plisket Zenita", hargaKg: 100000, hargaSaatIni: 30000, hargaYard: 32808, meterPerKg: 3.33, yardPerKg: 3.65 },
  { id: "9", name: "Nylon Knit Rajut Levina", hargaKg: 75000, hargaSaatIni: 16000, hargaYard: 17498, meterPerKg: 4.69, yardPerKg: 5.13 },
  { id: "10", name: "Scuba Premium Tebal Stretch Manopo", hargaKg: 75000, hargaSaatIni: 36000, hargaYard: 39370, meterPerKg: 2.08, yardPerKg: 2.28 },
  { id: "11", name: "Rib Salut Spandex Veronica", hargaKg: 76000, hargaSaatIni: 28500, hargaYard: 31168, meterPerKg: 2.63, yardPerKg: 2.88 },
  { id: "12", name: "Poly Spandex Knitting Laisha", hargaKg: 95000, hargaSaatIni: 27500, hargaYard: 30074, meterPerKg: 3.45, yardPerKg: 3.78 },
  { id: "13", name: "Poly Stretch Marine Stripes", hargaKg: 75000, hargaSaatIni: 26500, hargaYard: 28981, meterPerKg: 2.83, yardPerKg: 3.10 },
  { id: "14", name: "Poly Stretch Sheerline Stripes", hargaKg: 75000, hargaSaatIni: 26500, hargaYard: 28981, meterPerKg: 2.83, yardPerKg: 3.10 },
];
