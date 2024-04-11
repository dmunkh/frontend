import Navbar from "./Navbar";
import Company from "./pages/company";
import Home from "./pages/Home";
import Goods from "./pages/goods";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";

function App() {
  console.log(sessionStorage.getItem("username"));
  return (
    <>
      {sessionStorage.getItem("username") && <Navbar />}

      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/goods" element={<Goods />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
