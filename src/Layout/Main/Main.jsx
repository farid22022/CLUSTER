import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import './Main.css'
import { Outlet, useLocation } from "react-router-dom";



const Main = () => {
    const location = useLocation();
    const noNavBarFooter = /login|signup/.test(location.pathname);
    return (
        <div className={`main-container } transition-all duration-1000 border-2`}>
            { noNavBarFooter || <NavBar/>}
            <Outlet />
            { noNavBarFooter || <Footer />}
        </div>
    );
};

export default Main;
