import { NavLink } from "react-router-dom";
const navClass = "mr-4 font-bold py-2 px-4 rounded min-w-[100px] text-center";

function getNavClasses({ isActive }) {
    return isActive ? `${navClass} nav-active` : navClass;
}

function Menu() {
    return (
        <nav className="flex flex-col mt-10 md:flex-row md:m-0">
            <NavLink className={getNavClasses} to="/course-5-final-example/">Home</NavLink>
            <NavLink className={getNavClasses} to="/course-5-final-example/moves">Moves</NavLink>
            <NavLink className={getNavClasses} to="/course-5-final-example/tv">Tv</NavLink>
        </nav>
    );
}

export default Menu;
