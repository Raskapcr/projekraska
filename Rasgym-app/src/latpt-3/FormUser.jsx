import { useState } from "react";
import InputField from "./components/InputField";
import Alert from "./components/Alert";
import Card from "./components/Card";

export default function FormUser() {
  const [nama, setNama] = useState("");
  const [paket, setPaket] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isNamaValid = nama.length >= 8;
  const isPaketSelected = paket !== "";

  // Fungsi ketika tombol Daftar diklik
  const handleSubmit = () => {
    if (isNamaValid && isPaketSelected) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1E3A8A] p-5">
      <Card className="bg-white/90 shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6 tracking-wide">
          Daftar <br /> Member Gym Rasgym
        </h2>

        <div className="space-y-4">
          {/* Nama Lengkap */}
          <div> 
            <label className="block text-gray-700 font-medium mb-2">
              Nama Lengkap
            </label>
            <InputField
              type="text"
              placeholder="Masukkan nama..."
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          {!isNamaValid ? (
            <Alert message="Nama lengkap harus minimal 8 karakter!" type="error" />
          ) : (
            <Alert message="Nama lengkap valid!" type="success" />
          )}

          {/* Tanggal Lahir */}
          <InputField label="Tanggal Lahir" type="date" />

          {/* Nomor Telepon */}
          <InputField
            label="Nomor Telepon"
            type="number"
            placeholder="Masukkan nomor telepon..."
          />

          {/* Pilihan Paket Keanggotaan */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Paket Member
            </label>
            <select
              className="w-full p-3 border rounded-lg bg-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={paket}
              onChange={(e) => setPaket(e.target.value)}
            >
              <option value="">Pilih Paket...</option>
              <option value="Perhari">Perhari</option>
              <option value="Bulanan">Bulanan</option>
              <option value="Tahunan">Tahunan</option>
            </select>
          </div>
          {!isPaketSelected ? (
            <Alert message="Silakan pilih paket terlebih dahulu!" type="error" />
          ) : (
            <Alert message={`Paket ${paket} dipilih!`} type="success" />
          )}
        </div>

        {/* Tombol Daftar */}
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] 
                  hover:from-[#1E40AF] hover:to-[#60A5FA] text-white p-3 rounded-2xl font-semibold transition duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 mt-6"
        >
          Daftar Sekarang
        </button>

        {/* Pesan Sukses Setelah Klik */}
        {isSubmitted && (
          <Alert message="🎉 Pendaftaran berhasil! Selamat bergabung di Gym KokoSten!" type="success" />
        )}
      </Card>
    </div>
  );
}