import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div>
      <nav>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/board">Board</NavLink>
      </nav>
      <Routes>
        <Route to="/board" element={<Dashboard />} />
        <Route to="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
