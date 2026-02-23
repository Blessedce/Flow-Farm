export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm transition-all">

        <h2 className="text-xl font-semibold mb-2 text-center">
          Forgot Password?
        </h2>

        <p className="text-sm text-gray-500 mb-6 text-center">
          Enter your email address and we'll send you a link to reset your password
        </p>

        <input
          type="email"
          placeholder="Email address"
          className="w-full border rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <button className="w-full bg-gray-800 text-black py-2 rounded-lg hover:bg-black transition">
          Reset Password
        </button>

      </div>

    </div>
  );
}