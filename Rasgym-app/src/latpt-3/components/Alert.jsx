export default function Alert({ message, type}) {
    const alertStyles = {
      success: "mt-4 p-3 bg-blue-100 border-l-4 border-blue-500 text-blue-700",
      error: "bg-red-100 border-red-500 text-red-700",
    };
  
    return (
      <div className={`p-3 border-l-4 rounded-md ${alertStyles[type]}`}>
        <p className="font-semibold">{message}</p>
      </div>
    );
  }
  