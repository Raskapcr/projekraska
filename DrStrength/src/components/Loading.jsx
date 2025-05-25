export default function Loading() {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-indigo-800 px-4">
        <div className="w-full max-w-md h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-500 animate-loading-bar"></div>
        </div>
        <p className="text-white text-lg mt-4">Loading...</p>
      </div>
    );
  }
  