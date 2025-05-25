export default function Card({ children }) {
    return (
      <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-lg w-full max-w-md transition duration-300 hover:shadow-xl transform hover:scale-105 border border-gray-200">
        {children}
      </div>
    );
  }
  