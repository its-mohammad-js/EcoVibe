import Navbar from "./Navbar";
import Footer from "./Footer";

function AppLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default AppLayout;
