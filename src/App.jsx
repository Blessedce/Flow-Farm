
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp"
import NewPassword from "./components/auth/NewPassword"
import ForgotPassword from "./components/auth/ForgotPassword"
import CheckEmail from "./components/auth/CheckEmail";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/newpassword" element={<NewPassword/>}/>
      <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      <Route path="/checkemail" element={<CheckEmail/>}/>
    </Routes>
  );
}

export default App;
