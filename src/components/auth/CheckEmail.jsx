import { Link } from "react-router-dom";
export default function CheckEmail() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full text-center">

      <h2 className="text-xl font-semibold mb-4">
        Check your email
      </h2>

      <p className="text-gray-500 mb-6">
        Password recovery instructions sent.
      </p>

        <div>
            <p className="text-xs text-gray-500 mb-4 cursor-pointer hover:underline">Didn't recieve the email? Check the spam folder or try to Re-send the message</p>
        </div>
      <Link to="/">
  <button className="w-full bg-gray-800 text-white py-2 rounded-lg">
    Go back to Sign In
  </button>
</Link>

    </div>
  );
}
