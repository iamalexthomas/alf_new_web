import logo from "/assets/img/logo.png";
import { Link } from "react-router-dom";
import MainMenu from "./MainMenu";
import SidebarInfo from "./SidebarInfo";
import HeaderSearch from "./HeaderSearch";
import useSubMenuToggle from "../../hooks/useSubMenuToggle";
import useSidebarMenu from "../../hooks/useSidebarMenu";
import useSearchBar from "../../hooks/useSearchBar";
import useSidebarInfo from "../../hooks/useSidebarInfo";
import useStickyMenu from "../../hooks/useStickyMenu";

const HeaderV2 = () => {

    const toggleSubMenu = useSubMenuToggle();
    const { isOpen, openMenu, closeMenu } = useSidebarMenu();
    const { openSearch, searchOpen, searchClose } = useSearchBar();
    const { isInfoOpen, closeInfoBar } = useSidebarInfo();
    const isMenuSticky = useStickyMenu();

    return (
        <>
            <header>
                <nav className={`navbar mobile-sidenav navbar-box navbar-default validnavs navbar-sticky on no-full force-sticky ${isMenuSticky ? "sticked" : ""} ${isOpen ? "navbar-responsive" : ""} ${openSearch ? "pause-sticked" : ""} `}>
                    <HeaderSearch openSearch={searchOpen} searchClose={searchClose} />
                    <div className="container nav-box d-flex justify-content-between align-items-center">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                                <i className="fa fa-bars" />
                            </button>
                            <Link className="navbar-brand" to="/">
                                <img src={logo} className="logo" alt="Logo" />
                            </Link>
                        </div>

                        <div className={`collapse navbar-collapse ${isOpen ? "show collapse-mobile" : "collapse-mobile"}`} id="navbar-menu">
                            <img src={logo} alt="Logo" />
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu}>
                                <i className="fa fa-times" />
                            </button>
                            <MainMenu navbarPlacement="navbar-right" toggleSubMenu={toggleSubMenu} />
                        </div>
                        <SidebarInfo  closeInfoBar={closeInfoBar} isInfoOpen={isInfoOpen} />
                    </div>
                    <div className={`overlay-screen ${isOpen ? "opened" : ""}`} onClick={closeMenu} />
                </nav>

            </header>
        </>
    );
};

export default HeaderV2;