import "./App.css";
import Login from "./Components/login/LoginForm";
import OtpVerify from "./Components/login/OtpVerify";
import Name from "./Components/register/Name";

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/verifyOtp" element={<OtpVerify />} />
          <Route path="/user-name" element={<Name />} />
          
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
