import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Root = () => {
    return (
        <div >
           <div className="max-w-6xl mx-auto">
           <NavBar></NavBar>
           <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Root;