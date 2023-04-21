import "./App.css";
import Login from "./Components/login/LoginForm";
import Signup from "./Components/signup/Signup";
import Name from "./Components/register/Name";
import ManagerDashboard from "./Components/dashboard/ManagerDashboard";

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
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/manager-dashboard" element={<ManagerDashboard />} />
          <Route path="/user-name" element={<Name />} />
          
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
