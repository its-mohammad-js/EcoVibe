import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

function AppLayout({ children }) {
  return (
    <>
      {/* {location.pathname !== "/EcoVibe/messages" && <Navbar />} */}
      {children}
      {/* {location.pathname !== "/EcoVibe/messages" && <Footer />} */}
    </>
  );
}

export default AppLayout;
