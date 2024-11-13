import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

function AppLayout({ children }) {
  return (
    <>
      {!location.pathname.split("/").includes("seller") && <Navbar />}
      {children}
      {!location.pathname.split("/").includes("seller") && <Footer />}
    </>
  );
}

export default AppLayout;
