import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-emerald-600">
          PetCare Clinic
        </Link>

        <div className="flex gap-4 text-sm">
          <Link to="/" className="hover:text-emerald-600">
            Home
          </Link>
          <Link to="/services" className="hover:text-emerald-600">
            Services
          </Link>
          <Link to="/reservation" className="hover:text-emerald-600">
            Reservation
          </Link>
          <Link to="/about" className="hover:text-emerald-600">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}