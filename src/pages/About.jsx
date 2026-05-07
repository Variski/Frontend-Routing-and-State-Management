import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">Tentang PetCare Clinic</h1>

        <p className="text-gray-600">
          PetCare Clinic adalah aplikasi sederhana untuk membantu pemilik hewan
          melihat layanan klinik dan melakukan reservasi secara online.
        </p>
      </main>
    </>
  );
}   