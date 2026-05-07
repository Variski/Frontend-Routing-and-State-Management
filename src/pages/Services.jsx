import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { services } from "../data/services";

export default function Services() {
  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Layanan Klinik</h1>

        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service) => (
            <div key={service.id} className="border rounded-xl p-5">
              <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
              <p className="text-emerald-600 font-medium mb-4">
                {service.price}
              </p>

              <Link
                to={`/services/${service.id}`}
                className="text-sm text-blue-600 hover:underline"
              >
                Lihat Detail
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}