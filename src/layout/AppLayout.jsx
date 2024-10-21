import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default AppLayout;
