import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route to="/" element={<Dashboard />} />
    //     <Route to="/login" element={<Login />} />
    //   </Routes>
    // </BrowserRouter>
    // <Login />
    <Dashboard />
  );
}

export default App;
