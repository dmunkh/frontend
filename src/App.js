import Navbar from "./Navbar"
import Company from "./pages/company"
import Home from "./pages/Home"
import Goods from "./pages/goods"
import Login from "./Login"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/goods" element={<Goods />} />          
        </Routes>
      </div>
    </>
  )
}

export default App