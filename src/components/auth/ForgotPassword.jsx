export default function ForgotPassword() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">

      <h2 className="text-xl font-semibold mb-4">
        Forgot password?
      </h2>
    <p className="text-xs text-gray-500 mb-4 cursor-pointer hover:underline">
        Enter your email address and we'll send you a link to reset your password
    </p>
      <input
        type="email"
        placeholder="Email address"
        className="w-full border rounded-lg px-3 py-2 mb-4"
      />

      <button className="w-full bg-gray-800 text-white py-2 rounded-lg">
        Reset Password
      </button>

    </div>
  );
}
