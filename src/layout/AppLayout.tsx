import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects"
import Navbar from "../components/navbar"

const AppLayout = () => {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Test' element={<h1 className="text-3xl font-bold underline">test</h1>}/>
        <Route path='/Projects' element={<Projects />} />
    </Routes>
    </>
  );
}

export default AppLayout;