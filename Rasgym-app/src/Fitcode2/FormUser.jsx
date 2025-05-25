import { useState } from "react";
import InputField from "./components/InputField";

export default function FormUser() {
  const handleSubmit = () => {
    alert("Pendaftaran berhasil! Selamat bergabung sebagai member gym.");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 p-5">
      <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl w-96 transition duration-300 hover:shadow-3xl transform hover:scale-105">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6 tracking-wide">
          Daftar <br /> 
          Member Gym
        </h2>

        <div className="space-y-4">
          <InputField label="Nama Lengkap" type="text" placeholder="Masukkan nama..." />
          <InputField label="Email" type="email" placeholder="Masukkan email..." />
          <InputField label="Tanggal Lahir" type="date" />
          <InputField label="Nomor Telepon" type="number" placeholder="Masukkan nomor telepon..." />
          <InputField label="Paket Keanggotaan" type="text" placeholder="Contoh: Bulanan, Tahunan..." />
        </div>

        <button 
          className="w-full bg-gradient-to-r from-blue-500 to-red-600 hover:from-pink-600 hover:to-red-700 text-white p-3 rounded-2xl font-semibold transition duration-300 hover:shadow-lg transform hover:scale-105 mt-6"
          onClick={handleSubmit}
        >
          Daftar Sekarang
        </button>
      </div>
    </div>
  );
}