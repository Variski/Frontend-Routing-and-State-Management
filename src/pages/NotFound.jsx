import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-gray-600 mb-6">Halaman tidak ditemukan.</p>

        <Link
          to="/"
          className="inline-block bg-emerald-600 text-white px-5 py-2 rounded-lg"
        >
          Kembali ke Home
        </Link>
      </main>
    </>
  );
}