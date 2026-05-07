import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">
          Reservasi Klinik Hewan Lebih Mudah
        </h1>

        <p className="text-gray-600 mb-6">
          PetCare Clinic membantu pemilik hewan melihat layanan klinik dan
          melakukan reservasi secara online.
        </p>

        <Link
          to="/reservation"
          className="inline-block bg-emerald-600 text-white px-5 py-2 rounded-lg"
        >
          Buat Reservasi
        </Link>
      </main>
    </>
  );
}