import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";

import Login from "./components/Login";
import Register from "./components/Register";
import ShoeList from "./components/ShoeList";
import About from "./components/About";
function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shoelist" element={<ShoeList />} />
        </Routes>
      {
        // !hideHeaderPaths.includes(pathname) &&  <Footer />
      }
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
