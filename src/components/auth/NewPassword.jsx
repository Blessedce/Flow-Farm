export default function NewPassword() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-80">

      <h2 className="text-xl font-semibold mb-4">
        New Password
      </h2>

      <p className="text-xs text-gray-500 mb-4 cursor-pointer hover:underline">
        Your new password must be different from previously used one, and must have atleast 8 characters
      </p>

      <input
        type="password"
        placeholder="New password"
        className="w-full border rounded-lg px-3 py-2 mb-3"
      />

      <input
        
        type="password"
        placeholder="Confirm password"
        className="w-full border rounded-lg px-3 py-2 mb-4"
      />

      <button className="w-full bg-gray-800 text-white py-2 rounded-lg">
        Reset Password
      </button>

    </div>

    
  );
}
