import React, { useEffect, useState } from 'react';
import PageHeader from "../components/PageHeader";
import exercisesData from "../data/exercise.json";

export default function Exercise() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    setExercises(exercisesData);
  }, []);

  return (
    <div id="dashboard-container" className="bg-gray-100 min-h-screen">
      <PageHeader title="Exercise" />

      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold leading-tight mb-2">
          <span className="text-gray-900">Temukan</span> <span className="text-purple-600">Latihan</span> <br />
          <span className="text-gray-900">Terbaik</span> <span className="text-purple-600">Untukmu</span>
        </h1>
        <p className="text-gray-500 text-lg">Cari latihan yang sesuai dengan tujuan dan kebutuhanmu!</p>
      </div>

      <div className="overflow-x-auto bg-white p-6 rounded-xl shadow-lg border border-purple-200 mx-4 mb-6">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gradient-to-r from-pink-200 to-purple-200 text-purple-800 uppercase text-sm">
            <tr>
              {["Nama Latihan", "Jenis", "Durasi", "Intensitas", "Pelatih", "Kontak", "Deskripsi"].map((header) => (
                <th key={header} className="px-6 py-4 text-left font-semibold border-b-2 border-purple-300">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {exercises.map((ex) => (
              <tr key={ex.id} className="hover:bg-purple-50 transition duration-300">
                <td className="px-6 py-4 text-gray-700 font-medium border-b border-gray-200">{ex.name}</td>
                <td className="px-6 py-4 text-gray-600 border-b border-gray-200">{ex.type}</td>
                <td className="px-6 py-4 text-gray-600 border-b border-gray-200">{ex.duration}</td>
                <td className="px-6 py-4 text-gray-600 border-b border-gray-200">{ex.intensity}</td>
                <td className="px-6 py-4 text-gray-600 border-b border-gray-200">{ex.trainer.name}</td>
                <td className="px-6 py-4 text-gray-600 border-b border-gray-200">{ex.trainer.contact}</td>
                <td className="px-6 py-4 text-gray-600 border-b border-gray-200">{ex.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
