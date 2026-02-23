import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
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

    // Confirm password validation
    if(!confirmPassword){
      newErrors.confirmPassword = "Please confirm your password";
    }
    else if(password !== confirmPassword){
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(validate()){
      console.log("Ready to send to backend");
      // API call goes here
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      
      <form 
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-8 rounded-xl shadow-md w-full max-w-sm"
      >

        <h2 className="text-xl font-semibold mb-4">
          Create Your Account
        </h2>

        <button 
          type="button"
          className="w-full border py-2 rounded-lg mb-4 hover:bg-gray-100"
        >
          Continue with Google
        </button>

        <div className="text-center text-xs text-gray-400 mb-3">
          OR
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 mb-1 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mb-2">{errors.email}</p>
        )}

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 mb-1 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        {errors.password && (
          <p className="text-red-500 text-xs mb-2">{errors.password}</p>
        )}

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 mb-1 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs mb-3">{errors.confirmPassword}</p>
        )}

        <button 
          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-black"
        >
          Create Account
        </button>

        <p className="text-xs text-gray-500 mt-4 text-center">
          By creating an account, you agree to the Terms of Service and Privacy Policy
        </p>

        <p className="text-xs text-gray-500 mt-4 text-center">
          Already have an account?{" "}
          <Link 
            to="/" 
            className="hover:underline text-blue-600"
          >
            Log in here
          </Link>
        </p>

      </form>
    </div>
  );
}
