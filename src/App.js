import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Details from "./components/Details";
import Login from "./components/Login";
import Register from "./components/Register";
import ShoeList from "./components/ShoeList";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details" element={<Details />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shoelist" element={<ShoeList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
