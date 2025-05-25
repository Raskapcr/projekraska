import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-black to-purple-400 flex items-center justify-center px-4">
      <div className="w-full max-w-md  p-10 rounded-3xl shadow-xl animate-fade-in">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-3">
          <img
              src="https://i.pinimg.com/736x/20/0e/59/200e5992b8e541c5e06ee4ccb1148bca.jpg" // Ganti path sesuai lokasi file logo kamu
              alt="RasGYM Logo"
              className="w-20 h-20 object-contain rounded-full shadow-lg"
            />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
