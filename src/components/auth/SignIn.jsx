import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignIn() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [errors,setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if(!email){
      newErrors.email = "Email is required";
    }
    else if(!/\S+@\S+\.\S+/.test(email)){
      newErrors.email = "Invalid email format";
    }

    if(!password){
      newErrors.password = "Password is required";
    }
    else if(password.length < 6){
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(validate()){
      console.log("Login details ready for backend");
    }
  };

  return(
    <div className="min-h-screen flex items-center justify-center bg-[#ededed]">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-80 border-t-4 border-[#1d2a62]"
      >

        <h2 className="text-xl font-semibold mb-2 text-[#1d2a62]">
          Sign In
        </h2>

        <p className="text-sm text-gray-500 mb-4">
          Login by entering your email address and password
        </p>

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border border-[#87aece] rounded-lg px-3 py-2 mb-1 focus:outline-none focus:ring-2 focus:ring-[#afd06e]"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mb-2">{errors.email}</p>
        )}

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-[#87aece] rounded-lg px-3 py-2 mb-1 focus:outline-none focus:ring-2 focus:ring-[#afd06e]"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        {errors.password && (
          <p className="text-red-500 text-xs mb-2">{errors.password}</p>
        )}

        {/* Forgot */}
        <p className="text-xs text-[#407118] mb-4 cursor-pointer hover:underline">
          Forgot Password?
        </p>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-[#1d2a62] text-white py-2 rounded-lg mb-3 hover:bg-[#407118] transition-all"
        >
          Log in
        </button>

        {/* Divider */}
        <div className="text-center text-xs text-gray-400 mb-3">
          OR
        </div>

        {/* Google */}
        <button
          type="button"
          className="w-full border border-[#87aece] py-2 rounded-lg hover:bg-[#87aece] hover:text-[#407118] transition-all"
        >
          Sign in with Google
        </button>



        <p className="text-xs text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="hover:underline text-[#407118]"
          >
            Sign up here
          </Link>
        </p>

      </form>

    </div>
  );
}