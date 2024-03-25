import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";

const Root = () => {
    return (
        <div>
        <div className="container mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;