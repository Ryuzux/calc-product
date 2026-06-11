import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-xl text-gray-600">Halaman tidak ditemukan</p>
      <p className="mt-2 text-sm text-gray-500">Ups! Sepertinya alamat yang kamu tuju salah atau halaman telah dipindahkan.</p>
      <Link href='/' className="mt-6 inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
