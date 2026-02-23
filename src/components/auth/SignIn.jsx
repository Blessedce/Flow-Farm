import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignIn() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [errors,setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    // Email validation
    if(!email){
      newErrors.email = "Email is required";
    }
    else if(!/\S+@\S+\.\S+/.test(email)){
      newErrors.email = "Invalid email format";
    }

    // Password validation
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
      // API call goes here
    }
  };

  return(
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-80 transition-all"
      >

        <h2 className="text-xl font-bold mb-2">
          Sign In
        </h2>

        <p className="text-sm text-gray-500 mb-4">
          Login by entering your email address and password
        </p>

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border rounded-lg px-3 py-2 mb-1 focus:outline-none focus:ring-2 focus:ring-gray-400"
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
          className="w-full border rounded-lg px-3 py-2 mb-1 focus:outline-none focus:ring-2 focus:ring-gray-400"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        {errors.password && (
          <p className="text-red-500 text-xs mb-2">{errors.password}</p>
        )}

        {/* Forgot */}
        
       <Link
  to="/forgotpassword"
  className="block text-xs text-gray-500 mb-4 hover:underline"
>
  Forgot Password?
</Link>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-gray-800 text-black py-2 rounded-lg mb-3 hover:bg-black"
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
          className="w-full border py-2 rounded-lg hover:bg-gray-100"
        >
          Sign in with Google
        </button>

        <p className="text-xs text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="hover:underline text-blue-600"
          >
            Sign up here
          </Link>
        </p>

      </form>

    </div>
  );
}