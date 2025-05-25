import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);

    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      })
      .then((response) => {
        if (response.status !== 200) {
          setError(response.data.message);
          return;
        }

        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "An error occurred");
        } else {
          setError(err.message || "An unknown error occurred");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const errorInfo = error ? (
    <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
      <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="bg-gray-200 mb-5 p-5 text-sm rounded flex items-center">
      <ImSpinner2 className="me-2 animate-spin" />
      Mohon Tunggu...
    </div>
  ) : null;

  return (
    <div className="max-w-md mx-auto mt-20 p-8 shadow-md bg- rounded-xl">
      <h2 className="text-2xl font-bold text-white text-center mb-8">
        Selamat Datang Kembali BroGym <span className="inline-block animate-wave">👊</span>
      </h2>

      {errorInfo}
      {loadingInfo}

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-white mb-1"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-white mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="********"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            name="password"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-800 hover:bg-purple-700 text-white font-semibold py-2 rounded-xl transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}
