import { Link, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Projects from "../pages/Projects"
import Navbar from "../components/navbar"
import Serdes from "../pages/Serdes"
import Ldo from "../pages/Ldo"

const AppLayout = () => {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Projects/serdes' element={<Serdes />} />
        <Route path='/Projects/Ldo' element={<Ldo />} />
    </Routes>
    </>
  );
}

export default AppLayout;