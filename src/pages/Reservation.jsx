import { useState } from "react";
import Navbar from "../components/Navbar";
import { services } from "../data/services";

export default function Reservation() {
  const [form, setForm] = useState({
    ownerName: "",
    petName: "",
    petType: "",
    service: "",
    date: "",
  });

  const [reservations, setReservations] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.ownerName ||
      !form.petName ||
      !form.petType ||
      !form.service ||
      !form.date
    ) {
      alert("Mohon isi semua data reservasi.");
      return;
    }

    setReservations([...reservations, form]);

    setForm({
      ownerName: "",
      petName: "",
      petType: "",
      service: "",
      date: "",
    });
  };

  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Form Reservasi</h1>

        <form onSubmit={handleSubmit} className="border rounded-xl p-5 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="ownerName"
              value={form.ownerName}
              onChange={handleChange}
              placeholder="Nama Pemilik"
              className="border rounded-lg px-4 py-2"
            />

            <input
              name="petName"
              value={form.petName}
              onChange={handleChange}
              placeholder="Nama Hewan"
              className="border rounded-lg px-4 py-2"
            />

            <input
              name="petType"
              value={form.petType}
              onChange={handleChange}
              placeholder="Jenis Hewan"
              className="border rounded-lg px-4 py-2"
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2"
            >
              <option value="">Pilih Layanan</option>
              {services.map((service) => (
                <option key={service.id} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2"
            />
          </div>

          <button className="mt-5 bg-emerald-600 text-white px-5 py-2 rounded-lg">
            Simpan Reservasi
          </button>
        </form>

        <h2 className="text-2xl font-bold mb-4">Daftar Reservasi</h2>

        {reservations.length === 0 ? (
          <p className="text-gray-500">Belum ada reservasi.</p>
        ) : (
          <div className="space-y-3">
            {reservations.map((item, index) => (
              <div key={index} className="border rounded-lg p-4">
                <p>
                  <strong>Pemilik:</strong> {item.ownerName}
                </p>
                <p>
                  <strong>Hewan:</strong> {item.petName}
                </p>
                <p>
                  <strong>Jenis:</strong> {item.petType}
                </p>
                <p>
                  <strong>Layanan:</strong> {item.service}
                </p>
                <p>
                  <strong>Tanggal:</strong> {item.date}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}