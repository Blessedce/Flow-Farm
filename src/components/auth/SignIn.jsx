import { Link } from "react-router-dom";
import { useState } from "react";
export default function SignIn() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    return(
        <div className="bg-white p-8 rounded-xl shadow-md w-80">
            {/* Title */}
            <h2 className="text-xl font-semibold mb-2">
                Sign In
            </h2>
            <p className="text-sm text-gray-500 mb-4">
                Login by entering your email address and password
            </p>
            {/* Email */}
            <input type="email" placeholder="Email Address" className="w-full border rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-gray-400" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            {/* Password */}
             <input
        type="password"
        placeholder="Password" className="w-full border rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-gray-400"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
        {/* Forgot */}
        <p className="text-xs text-gray-500 mb-4 cursor-pointer hover:underline">
            Forgot Password?
        </p>
        
          {/* Login Button */}
      <button className="w-full bg-gray-800 text-gray py-2 rounded-lg mb-3 hover:bg-black">
        Log in
      </button>
        {/* Divider */}
      <div className="text-center text-xs text-gray-400 mb-3">
        OR
      </div>
      {/* Google */}
      <button className="w-full border py-2 rounded-lg hover:bg-gray-100">
        Sign in with Google
      </button>
       <p className="text-xs text-gray-500 mb-4">
  Don't have an account?{" "}
  <Link 
    to="/signup" 
    className="cursor-pointer hover:underline text-blue-600"
  >
    Sign up here
  </Link>
</p>
        </div>
    )
}