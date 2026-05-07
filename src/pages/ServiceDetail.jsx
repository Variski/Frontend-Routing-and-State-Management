import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { services } from "../data/services";

export default function ServiceDetail() {
  const { id } = useParams();

  const service = services.find((item) => item.id === id);

  if (!service) {
    return (
      <>
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 py-10">
          <h1 className="text-2xl font-bold">Layanan tidak ditemukan</h1>
          <Link to="/services" className="text-blue-600">
            Kembali ke Services
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-3">{service.name}</h1>
        <p className="text-emerald-600 font-semibold mb-4">{service.price}</p>
        <p className="text-gray-600 mb-6">{service.description}</p>

        <Link
          to="/reservation"
          className="inline-block bg-emerald-600 text-white px-5 py-2 rounded-lg"
        >
          Reservasi Layanan Ini
        </Link>
      </main>
    </>
  );
}