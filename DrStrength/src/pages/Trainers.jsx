import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import trainersData from "../data/trainers.json";

export default function Trainers() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    setTrainers(trainersData);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <PageHeader title="Trainers" />

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Semua pelatih</h1>
          <p className="text-sm text-gray-500">Bertemulah dengan para Pelatih</p>
        </div>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-300 focus:outline-none"
          />
          <select className="px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-300 focus:outline-none">
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow-md">
        <table className="min-w-full">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 text-left">Photo</th>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Expertise</th>
              <th className="px-6 py-4 text-left">Experience</th>
              <th className="px-6 py-4 text-left">Contact</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {trainers.map((trainer) => (
              <tr key={trainer.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">
                  <img
                    src={trainer.photo}
                    alt={trainer.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-300"
                  />
                </td>
                <td className="px-6 py-4 font-semibold">{trainer.name}</td>
                <td className="px-6 py-4">{trainer.expertise}</td>
                <td className="px-6 py-4">{trainer.experience}</td>
                <td className="px-6 py-4">{trainer.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination (Dummy) */}
        <div className="flex justify-between items-center px-6 py-4">
          <span className="text-sm text-gray-500">Showing 1 to {trainers.length} of {trainers.length} entries</span>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border rounded-lg text-gray-600 hover:bg-purple-100">‹</button>
            <button className="px-3 py-1 border rounded-lg bg-purple-600 text-white">1</button>
            <button className="px-3 py-1 border rounded-lg text-gray-600 hover:bg-purple-100">2</button>
            <button className="px-3 py-1 border rounded-lg text-gray-600 hover:bg-purple-100">3</button>
            <button className="px-3 py-1 border rounded-lg text-gray-600 hover:bg-purple-100">›</button>
          </div>
        </div>
      </div>
    </div>
  );
}
