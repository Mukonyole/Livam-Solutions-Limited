import Header from "./Header";
import Footer from "./Footer";
import Chatbot from "./Chatbot";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Chatbot />
    </>
  );
}

export default Layout;