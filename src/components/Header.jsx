import { NavLink } from "react-router-dom";
import Search from "./Search";
import LanguageSwich from "./LanguageSwich";

const navClass = "mr-4 font-bold py-2 px-4 rounded min-w-[100px] text-center";

function getNavClasses({ isActive }) {
    return isActive ? `${navClass} nav-active` : navClass;
}

function Header() {
    return (
        <header className="py-5 px-3 flex justify-between bg-gray-900">
            <div>Logo</div>
            <Search />
            <nav className="flex">
                <NavLink className={getNavClasses} to="/">Home</NavLink>
                <NavLink className={getNavClasses} to="/moves">Moves</NavLink>
                <NavLink className={getNavClasses} to="/tv">Tv</NavLink>
                <LanguageSwich />
            </nav>
        </header>
    );
}

export default Header;
