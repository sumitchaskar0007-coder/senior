import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Departments", path: "/departments" },
    { name: "Admissions", path: "/admissions" },
    { name: "Facilities", path: "/facilities" },
    { name: "Student Corner", path: "/student-corner" },
    { name: "IQAC", path: "/iqac" },
    { name: "NAAC", path: "/naac" },
   // { name: "NIRF", path: "/nirf" },
    { name: "Research", path: "/research" },
    { name: "Alumni", path: "/alumni" },
    { name: "Contact", path: "/contact" },
   { name: "MahaDBT Scholarship", path: "https://mahadbt.maharashtra.gov.in/login/login", external: true }
  ];

  const moreLinks = [
    { name: "Blogs", path: "/blogs" },
    { name: "Careers", path: "/careers" },
    { name: "Gallery", path: "/gallery" },
    { name: "Notice", path: "/notices" },
  ];

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed w-full top-0 z-50 transition ${
          isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur"
        }`}
      >
        {/* TOP BAR */}
        <div className="max-w-7xl mx-auto flex items-center px-4 py-3 gap-3">
          <Link to="/">
            <img
              src="/images/logo/jadhavar_logo.png"
              className="h-10 md:h-14"
            />
          </Link>

          <div className="flex-1">
            <h1 className="text-sm sm:text-lg md:text-2xl font-bold text-[#0a2a66]">
              Dr. Sudhakarrao Jadhavar Arts, Commerce & Science College
            </h1>
            <p className="hidden md:block text-xs text-gray-600">
              NAAC Accredited | Affiliated to Savitribai Phule Pune University
            </p>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:block bg-[#0a2a66]">
          <ul className="flex justify-center flex-wrap">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`px-4 py-3 block text-sm ${
                    location.pathname === link.path
                      ? "bg-[#143f8f] text-white"
                      : "text-white hover:bg-[#143f8f]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* MORE */}
            <li className="relative">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="px-4 py-3 text-white hover:bg-[#143f8f]"
              >
                More ▾
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute bg-white shadow-lg w-40"
                  >
                    {moreLinks.map((item) => (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          onClick={() => setMoreOpen(false)}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          </ul>
        </nav>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed right-0 top-0 z-50 h-full w-[85%] bg-white p-5 overflow-y-auto"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="text-xl mb-5"
              >
                ✕
              </button>

              {[...navLinks, ...moreLinks].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 border-b"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
