import { useState } from "react";
import InputField from "./components/InputField";

export default function HitungDiskonMember() {
    const [harga, setHarga] = useState("");
    const [diskon, setDiskon] = useState("");

    const hargaSetelahDiskon = harga && diskon 
        ? (parseFloat(harga) - (parseFloat(harga) * (parseFloat(diskon) / 100))).toFixed(2) 
        : "";

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 p-5">
            <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl w-96 transition duration-300 hover:shadow-3xl transform hover:scale-105">
                <h2 className="text-2xl font-extrabold text-center text-gray-900 mb-6">
                    Hitung Diskon Member Gym
                </h2>

                <div className="space-y-4">
                    <InputField 
                        label="Harga Paket Gym (Rp)" 
                        type="number" 
                        placeholder="Masukkan harga paket..."
                        value={harga}
                        onChange={(e) => setHarga(e.target.value)}
                    />

                    <InputField 
                        label="Diskon (%)" 
                        type="number" 
                        placeholder="Masukkan persen diskon..."
                        value={diskon}
                        onChange={(e) => setDiskon(e.target.value)}
                    />
                </div>

                {!harga || !diskon ? (
                    <div className="mt-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-lg">
                        <p className="font-semibold text-center">
                            Silakan masukkan harga dan diskon yang valid.
                        </p>
                    </div>
                ) : (
                    <div className="mt-6 p-5 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-2xl shadow-lg border border-gray-600">
                        <div className="flex justify-between items-center py-2 border-b border-gray-500">
                            <span className="font-semibold">💰 Harga Asli:</span>
                            <span className="text-yellow-400 font-bold">Rp {parseFloat(harga).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-500">
                            <span className="font-semibold">🎉 Diskon:</span>
                            <span className="text-green-400 font-bold">{diskon}%</span>
                        </div>
                        <div className="flex justify-between items-center py-3">
                            <span className="font-semibold text-lg">✅ Harga Setelah Diskon:</span>
                            <span className="text-blue-400 font-extrabold text-xl">Rp {parseFloat(hargaSetelahDiskon).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
