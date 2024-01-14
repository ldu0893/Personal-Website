import generic_profile_icon from "../static/generic-profile-icon.png"
import { Link, Route, Routes } from "react-router-dom";
import Serdes from "./serdes"

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
                <Link to='./serdes'>SERDES</Link>
            </li>
            <li>
                test2
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