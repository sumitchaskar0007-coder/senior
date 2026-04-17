import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AnnouncementSlider from '../components/AnnouncementSlider';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ FIX 1: ADD THIS STATE
  const [activeTab, setActiveTab] = useState("UG");

  const stats = [
    { label: 'Years of Excellence', value: '80+' },
    { label: 'Faculty Members', value: '150+' },
    { label: 'Courses Offered', value: '25+' },
    { label: 'Students', value: '5000+' },
    { label: 'Alumni', value: '50,000+' },
  ];

  const UG_PROGRAMS = [
    { title: "B.A.", duration: "3 Years", image: "/images/department/ba.jpg" },
    { title: "B.Com.", duration: "3 Years", image: "/images/BCom.jpg" },
    { title: "B.Sc. (Plain)", duration: "3 Years", image: "/images/department/bsc_p.jpg" },
    { title: "B.Sc. (C.A. / C.S.)", duration: "3 Years", image: "/images/department/bsc_ca.jpg" },
    { title: "B.Sc. (AI & Machine Learning)", duration: "3 Years", image: "/images/department/machine.jpg" },
    { title: "B.Sc. (Cyber & Digital Science)", duration: "3 Years", image: "/images/department/cyber.jpg" },
    { title: "B.Sc. (Data Science)", duration: "3 Years", image: "/images/department/data_science.jpg" },
    { title: "B.Sc. (Fashion Design)", duration: "3 Years", image: "/images/department/fashion.jpg" },
    { title: "BCA", duration: "3 Years", image: "/images/department/BCA.jpg" },
    { title: "BBA (Plain)", duration: "3 Years", image: "/images/department/bba_plain.jpg" },
    { title: "BBA (C.A.)", duration: "3 Years", image: "/images/department/bba.jpg" },
  ];

  const PG_PROGRAMS = [
    { title: "M.A.", duration: "2 Years", image: "/images/department/ma.jpg" },
    { title: "M.Com.", duration: "2 Years", image: "/images/department/mcom.jpg" },
    { title: "M.Sc. (C.A. / C.S.)", duration: "2 Years", image: "/images/department/msc.jpg" },
    { title: "M.Sc. (Cyber Security)", duration: "2 Years", image: "/images/department/cyber.jpg" },
    { title: "M.Sc. (Data Science)", duration: "2 Years", image: "/images/department/data_science.jpg" },
  ];

  // ✅ FIX 2: ADD THIS VARIABLE
  const programs = activeTab === "UG" ? UG_PROGRAMS : PG_PROGRAMS;

  const quickLinks2 = [
    { name: 'UGC', link: 'https://www.ugc.gov.in' },
    { name: 'NAAC', link: 'https://www.naac.gov.in' },
    { name: 'Swayam', link: 'https://swayam.gov.in' },
    { name: 'AICTE', link: 'https://www.aicte-india.org' },
    { name: 'SPPU', link: 'https://www.unipune.ac.in' },
    { name: 'Maha DBT', link: 'https://mahadbt.maharashtra.gov.in' },
    { name: 'MPSC', link: 'https://www.mpsc.gov.in' },
  ];

  const announcements = [
    {
      title: 'Provisional Merit List BBA/BBA(CA) 2025-26',
      date: '2025-01-15',
      type: 'important',
    },
    {
      title: 'Final Merit List BBA/BBA(CA) 2025-26',
      date: '2025-01-20',
      type: 'important',
    },
    {
      title: 'CET Syllabus 2024-25',
      date: '2024-12-01',
      type: 'info',
    },
  ];

  const newsEvents = [
    {
      title: 'युवा महोत्सव २०२४-२५',
      description: 'Annual Youth Festival celebration',
      date: '2024-12-10',
    },
  ];

  const campusImages = [
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
    'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800',
    'https://images.unsplash.com/photo-1562774053-701939374585?w=800',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % campusImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [campusImages.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative bg-[#f7eeee] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#0a2a66] font-semibold mb-4 text-lg">
              Admissions Open for 2025–26
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Dr. Sudhakarrao Jadhavar <br />
              Arts, Commerce & Science College
            </h1>

            <p className="text-gray-700 text-lg mb-8">
              Affiliated to Savitribai Phule Pune University – Approved by AICTE New Delhi
            </p>

            {/* FEATURE CARDS */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                "Industry-Ready Curriculum",
                "Expert Faculty & Global Exposure",
                "Strong Placement Network",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-center text-center text-sm font-medium text-gray-800"
                >
                  {item}
                </div>
              ))}
            </div>

            <Link
              to="/admissions"
              className="inline-block bg-[#0a2a66] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#721632] transition"
            >
              Apply Now
            </Link>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* COLOR BLOCK */}
            <div className="absolute right-6 top-12 w-[75%] h-[90%] bg-[#0a2a66] rounded-2xl hidden lg:block"></div>

            {/* STUDENT IMAGE */}
            <img
              src="/images/girl_home.png"
              alt="Student"
              className="relative z-10 max-h-[520px] object-contain"
            />
          </motion.div>

        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* LEFT TITLE */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-[#0a2a66] text-4xl">🏆</div>
              </div>

              <h2 className="text-4xl font-serif font-semibold text-gray-900 leading-tight">
                Awards & <br /> Achievements
              </h2>
            </div>

            {/* RIGHT CARDS */}
            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* CARD 1 */}
              <Link
                to="/student-corner"
                className="group bg-[#0a2a66] text-white p-8 min-h-[300px] flex flex-col justify-between transition hover:shadow-xl"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Best Placement <br /> Among Educational Institutions
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    Pune, Maharashtra <br />
                    (By Brands Academy)
                  </p>
                </div>
                <span className="text-2xl group-hover:translate-x-1 transition">→</span>
              </Link>

              {/* CARD 2 */}
              <Link
                to="/student-corner"
                className="group bg-[#f7931e] text-white p-8 min-h-[300px] flex flex-col justify-between transition hover:shadow-xl"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Best College Rankings 2025
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    Ranked Among India’s Top Institutions by MDRA <br />
                    Featured in India Today
                  </p>
                </div>
                <span className="text-2xl group-hover:translate-x-1 transition">→</span>
              </Link>

              {/* CARD 3 */}
              <Link
                to="/student-corner"
                className="group bg-[#0a2a66] text-white p-8 min-h-[300px] flex flex-col justify-between transition hover:shadow-xl"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Best Educationist Award
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    International Institute of <br />
                    Education & Management, <br />
                    New Delhi
                  </p>
                </div>
                <span className="text-2xl group-hover:translate-x-1 transition">→</span>
              </Link>

              {/* CARD 4 */}
              <Link
                to="/student-corner"
                className="group bg-[#f7931e] text-white p-8 min-h-[300px] flex flex-col justify-between transition hover:shadow-xl"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    University Level <br /> Best College Award
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    Savitribai Phule Pune University <br />
                    for Student Development Activities
                  </p>
                </div>
                <span className="text-2xl group-hover:translate-x-1 transition">→</span>
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
            <AnnouncementSlider />


      <section className="bg-[#f7eeee] py-20">
        <div className="max-w-7xl mx-auto px-4">

          {/* HEADER */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Explore Our Academic Programs
              </h2>
              <p className="text-gray-600">
                Empowering students with future-ready Undergraduate and Postgraduate courses
              </p>
            </div>

            {/* TABS */}
            <div className="flex border border-[#8b1d3a] rounded-md overflow-hidden">
              <button
                onClick={() => setActiveTab("UG")}
                className={`px-6 py-2 text-sm font-semibold transition ${activeTab === "UG"
                  ? "bg-[#8b1d3a] text-white"
                  : "text-[#8b1d3a] bg-white"
                  }`}
              >
                Undergraduate Programs
              </button>
              <button
                onClick={() => setActiveTab("PG")}
                className={`px-6 py-2 text-sm font-semibold transition ${activeTab === "PG"
                  ? "bg-[#8b1d3a] text-white"
                  : "text-[#8b1d3a] bg-white"
                  }`}
              >
                Postgraduate Programs
              </button>
            </div>
          </div>

          {/* PROGRAM CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {p.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
                    <span className="text-[#8b1d3a]">⏱</span>
                    Program Duration: {p.duration}
                  </p>

                  <Link
                    to="/admissions"
                    className="inline-flex items-center gap-2 bg-[#8b1d3a] text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-[#6f152e] transition"
                  >
                    Enroll Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* Quick Links II */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Important Links</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4"
          >
            {quickLinks2.map((link, index) => (
              <motion.a
                key={index}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="p-4 bg-white rounded-lg hover:bg-primary hover:text-white transition cursor-pointer text-center shadow-md"
              >
                <div className="text-sm font-medium">{link.name}</div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Announcements</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {announcements.map((announcement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-lg shadow-md ${announcement.type === 'important'
                  ? 'bg-red-50 border-l-4 border-red-500'
                  : 'bg-blue-50 border-l-4 border-blue-500'
                  }`}
              >
                <h3 className="font-semibold mb-2">{announcement.title}</h3>
                <p className="text-sm text-gray-600">{announcement.date}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Downloads
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* FEES */}
            <motion.a
              href="/images/download/fees.pdf"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-blue-600 text-white p-6 rounded-lg shadow text-center font-semibold"
            >
              📄 Download Fees Structure
            </motion.a>

            {/* FRP */}
            <motion.a
              href="/images/download/frp.pdf"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-green-600 text-white p-6 rounded-lg shadow text-center font-semibold"
            >
              📄 Download FRP Proposal
            </motion.a>
          </div>

          <div className="flex justify-center mt-10">
            <motion.a
              href="/images/pdf/ProspectAndPamplet.pdf"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg shadow font-semibold"
            >
              📄 Download Prospectus
            </motion.a>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">News & Events</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {newsEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-md mb-4"
              >
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2">{event.description}</p>
                <p className="text-sm text-gray-500">{event.date}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Explore Life At MIT ACSC */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Explore Life At <br />
              <span className="text-[#0a2a66] font-bold">Jadhavar</span>
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8">
              Whether you're leading initiatives in the Student Council, collaborating
              through peer and faculty mentoring, discovering passions in student clubs,
              or gaining a global perspective via exchange programs – life at
              <strong> Dr. Sudhakarrao Jadhavar Arts, Commerce & Science College</strong>
              is dynamic and inclusive.
              <br /><br />
              From campus festivals to community outreach, every moment shapes your
              journey beyond academics and prepares you for leadership, innovation,
              and service to society.
            </p>

            <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-3">
              Life on Campus
            </h3>

            <p className="text-gray-700 leading-relaxed">
              A place where tradition meets technology — smart classrooms, innovation
              hubs, lush green spaces, and a culture that inspires students to think big
              and live meaningfully under the vision of the Jadhavar education legacy.
            </p>
          </motion.div>

          {/* RIGHT IMAGE GRID */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* IMAGE 1 */}
            <img
              src="/images/department/library.jpg"
              alt="Library"
              className="rounded-lg object-cover w-full h-56"
            />

            {/* IMAGE 2 */}
            <img
              src="/images/department/achievement.jpg"
              alt="Student Achievement"
              className="rounded-lg object-cover w-full h-56"
            />

            {/* IMAGE 3 */}
            <img
              src="/images/department/events.jpg"
              alt="Cultural Event"
              className="rounded-lg object-cover w-full h-56"
            />

            {/* IMAGE 4 */}
            <img
              src="/images/department/college1.jpg"
              alt="Campus Festival"
              className="rounded-lg object-cover w-full h-56"
            />
          </motion.div>

        </div>
      </section>

      {/* Campus Image Slider */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Campus Gallery</h2>
          <div className="relative max-w-5xl mx-auto h-96 rounded-lg overflow-hidden shadow-xl">
            {campusImages.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Campus ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: currentSlide === index ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
              />
            ))}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {campusImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

