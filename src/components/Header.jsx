import Search from "./Search";
import LanguageSwich from "./LanguageSwich";
import { useMediaQuery } from "@mui/material";
import Sidebar from "./Sidebar";
import { FiX } from "react-icons/fi";
import { TiThMenu } from "react-icons/ti";
import Menu from "./Menu";
import useSidebar from "../hooks/useSidebar";

function Header() {
    const matches = useMediaQuery('(min-width:768px)');
    const [isOpenSidebar, toggleOpenSidebar] = useSidebar();

    return (
        <header className="py-5 px-3 flex justify-between bg-gray-900">
            {
                matches ?
                    null :
                    <button onClick={toggleOpenSidebar} className="py-2 px-3 border border-orange-600 rounded">
                        <TiThMenu />
                    </button>
            }
            <Search className="flex flex-grow px-4" />
            {
                matches ?
                    <Menu /> :
                    <Sidebar
                        isOpen={isOpenSidebar}
                        type='left'
                        className={'border-r py-4 px-6 bg-gray-800 z-50 w-[320px]'}
                        closeIcon={<FiX size={24} />}
                        toggleOpenSidebar={toggleOpenSidebar}
                    >
                        <Menu />
                    </Sidebar>
            }
            <LanguageSwich />
        </header>
    );
}

export default Header;
