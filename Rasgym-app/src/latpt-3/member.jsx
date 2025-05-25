import { useState } from "react";
import InputField from "./components/InputField";

export default function HitungDiskonMember() {
    const [harga, setHarga] = useState("");
    const [diskon, setDiskon] = useState("");

    
    const totalHarga = harga && diskon ? harga - (harga * (diskon / 100)) : 0;


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#1E3A8A] p-5">
        <div className="bg-white/90 shadow-lg rounded-lg p-8 max-w-md w-full border border-gray-300">
          {/* Judul */}
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6 tracking-wide">
            Hitung Diskon <br /> Member Gym
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
                    <div className="mt-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700">
                        <p className="font-semibold">Silakan masukkan harga dan diskon yang valid.</p>
                    </div>
                ) : (
                    <div className="mt-4 p-3 bg-blue-100 border-l-4 border-blue-500 text-blue-700">
                        <p className="font-semibold">
                            Total Harga Setelah Diskon: Rp {totalHarga.toLocaleString()}
                        </p>
                    </div>
                )}
            </div>
       </div>
    );
}