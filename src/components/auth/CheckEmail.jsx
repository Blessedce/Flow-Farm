import { Link } from "react-router-dom";

export default function CheckEmail() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm text-center transition-all">

       

        <h2 className="text-xl font-semibold mb-2">
          Check your email
        </h2>

        <p className="text-sm text-gray-500 mb-6">
          We've sent password recovery instructions to your email address.
        </p>

        <p className="text-xs text-gray-500 mb-6">
          Didn't receive the email? Check your spam folder or{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            resend the message
          </span>.
        </p>

        <Link to="/">
          <button className="w-full bg-gray-800 text-black py-2 rounded-lg hover:bg-black transition">
            Go back to Sign In
          </button>
        </Link>

      </div>
    </div>
  );
}