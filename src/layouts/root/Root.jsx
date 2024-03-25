import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;