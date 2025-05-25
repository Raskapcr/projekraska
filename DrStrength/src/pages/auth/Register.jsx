export default function Register() {
    return (
        <div>
            <h2 className="text-2xl font-bold text-white text-center mb-8">
                Create Your Account ✨
            </h2>

            <form>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-white mb-1"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="you@example.com"
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="password"
                        className="block text-sm font-semibold text-white mb-1"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="********"
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-semibold text-white mb-1"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="********"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-800 hover:bg-purple-700 text-white font-semibold py-2 rounded-xl transition duration-300"
                >
                    Register
                </button>
            </form>
        </div>
    );
}
