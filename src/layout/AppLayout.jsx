import Navbar from "./Navbar";
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
