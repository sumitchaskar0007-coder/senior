import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* FIXED HEADER */}
      <Header />

      {/* MAIN CONTENT (OFFSET FOR FIXED HEADER) */}
      <main className="flex-grow pt-[72px] lg:pt-[120px]">
        {children}
      </main>

      {/* FOOTER */}
      <Footer />

      {/* SCROLL TO TOP */}
      <ScrollToTop />
    </div>
  );
};

export default Layout;
