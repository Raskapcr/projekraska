import { useState } from "react";
import services from "./services.json";

// Komponen ServiceList
export default function ServiceList() {
  const [form, setForm] = useState({
    search: "",
    category: "",
    level: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const filtered = services.filter((item) => {
    const matchSearch =
      item.name.toLowerCase().includes(form.search.toLowerCase()) ||
      item.description.toLowerCase().includes(form.search.toLowerCase());

    const matchCategory = form.category ? item.category === form.category : true;
    const matchLevel = form.level ? item.level === form.level : true;

    return matchSearch && matchCategory && matchLevel;
  });

  const categories = [...new Set(services.map((s) => s.category))];
  const levels = [...new Set(services.map((s) => s.level))];

  // Komponen ServiceCard
  const ServiceCard = ({ service }) => (
    <div className="bg-[#111] border border-yellow-500 shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
      <img
        src={service.img}
        alt={service.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-white">
        <h3 className="text-xl font-bold text-yellow-400">{service.name}</h3>
        <p className="text-gray-300">{service.description}</p>
        <div className="text-sm mt-2 text-gray-400">
          <p><strong>Coach:</strong> {service.details.coach}</p>
          <p><strong>Durasi:</strong> {service.details.duration}</p>
          <p><strong>Harga:</strong> {service.details.price}</p>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="bg-yellow-800 text-yellow-300 text-xs px-2 py-1 rounded-full">
            {service.category}
          </span>
          <span className="bg-yellow-700 text-yellow-200 text-xs px-2 py-1 rounded-full">
            {service.level}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      {/* Header Rasgym */}
      <header className="bg-[#0d0d0d] border-b border-yellow-500 py-4 shadow-lg mb-8">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold text-yellow-400 tracking-wide">
            Ras<span className="text-yellow-600">gym</span>
          </h1>
          <nav>
          </nav>
        </div>
      </header>

      {/* Konten Utama */}
      <div className="p-6 max-w-7xl mx-auto">
        <h2 className="text-3xl text-yellow-400 font-bold mb-6 text-center">Daftar Layanan</h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 mb-8">
          <input
            type="text"
            name="search"
            value={form.search}
            onChange={handleChange}
            placeholder="Cari layanan..."
            className="p-2 border border-yellow-400 bg-black text-yellow-300 placeholder-yellow-500 rounded w-full"
          />
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="p-2 border border-yellow-400 bg-black text-yellow-300 rounded w-full"
          >
            <option value="">Semua Kategori</option>
            {categories.map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </select>
          <select
            name="level"
            value={form.level}
            onChange={handleChange}
            className="p-2 border border-yellow-400 bg-black text-yellow-300 rounded w-full"
          >
            <option value="">Semua Level</option>
            {levels.map((lvl, i) => (
              <option key={i} value={lvl}>{lvl}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
