import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Validate email
  const validate = () => {
    let newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Email ready for backend reset request:", email);
      // TODO: Call your password reset API here

      // Navigate to CheckEmail page
      navigate("/checkemail");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm transition-all"
      >
        <h2 className="text-xl font-semibold mb-2 text-center">
          Forgot Password?
        </h2>

        <p className="text-sm text-gray-500 mb-6 text-center">
          Enter your email address and we'll send you a link to reset your password
        </p>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email address"
          className="w-full border rounded-lg px-3 py-2 mb-1 focus:outline-none focus:ring-2 focus:ring-gray-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mb-4">{errors.email}</p>
        )}

        <button
          type="submit"
          className="w-full bg-gray-800 text-black py-2 rounded-lg hover:bg-black transition"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}