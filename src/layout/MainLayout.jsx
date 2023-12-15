import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/navbar";
import Footer from "../components/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <div className="h-[10vh]">
      <Navbar/>
      </div>
      <div className="min-h-[85vh] max-w-[1520px] mx-auto">
      <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
