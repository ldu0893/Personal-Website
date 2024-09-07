import generic_profile_icon from "../static/generic-profile-icon.png"
import { Link, Route, Routes } from "react-router-dom"
import Serdes from "./Serdes"
import Ldo from "./Ldo"

const Projects = () => {

  return (
    <>
    <div className="space-y-7">
        <p
        className="font-medium text-5xl text-white text-center">
            Projects
        </p>
        <ul className="text-white font-medium text-xl">
            <li>
                <Link to='./Serdes'>SERDES</Link>
            </li>
            <li>
                <Link to='./Ldo'>LDO</Link>
            </li>
            <li>
                test3
            </li>
        </ul>
    </div>
    </>
  );
}

export default Projects;