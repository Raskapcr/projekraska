export default function Forgot() {
    return (
        <div>
            <h2 className="text-2xl font-bold text-white text-center mb-8">
                Forgot Your Password?
            </h2>

            <p className="text-sm text-white mb-6 text-center">
                Enter your email address and we&apos;ll send you a link to reset your password.
            </p>

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

                <button
                    type="submit"
                    className="w-full bg-indigo-800 hover:bg-purple-700 text-white font-semibold py-2 rounded-xl transition duration-300"
                >
                    Send Reset Link
                </button>
            </form>
        </div>
    );
}
