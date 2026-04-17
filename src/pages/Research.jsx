import { motion } from "framer-motion";

const Research = () => {

  /* ================= CONTENT DATA ================= */

  const objectives = [
    "To promote a strong research culture among faculty and students.",
    "To encourage innovation, creativity, and critical thinking.",
    "To support interdisciplinary research and collaborative projects.",
    "To publish quality research papers in national and international journals.",
    "To organize seminars, workshops, FDPs, and conferences.",
    "To strengthen industry–academia collaboration and consultancy services.",
  ];

  const researchAreas = [
    { name: "Computer Science & IT", projects: 28, publications: 85 },
    { name: "Commerce & Management", projects: 22, publications: 64 },
    { name: "Science & Technology", projects: 30, publications: 92 },
    { name: "Arts & Humanities", projects: 18, publications: 46 },
  ];

  const campusProjects = [
    {
      title: "Smart Digital Campus System",
      description:
        "Development of a centralized ERP system for student records, attendance, examinations, and digital notice boards.",
    },
    {
      title: "Green Energy & Solar Power Project",
      description:
        "Installation of solar panels across campus to promote renewable energy and reduce carbon footprint.",
    },
    {
      title: "Research Innovation Lab",
      description:
        "A fully equipped laboratory for student innovation, prototype development, and startup incubation.",
    },
    {
      title: "E-Library & Digital Learning Platform",
      description:
        "Online access to journals, e-books, research databases, and virtual classrooms.",
    },
  ];

  const publications = [
    {
      title: "Artificial Intelligence Applications in Education",
      authors: "Dr. A. Kulkarni, Prof. N. Deshmukh",
      journal: "International Journal of Computer Science",
      year: 2024,
    },
    {
      title: "Financial Market Trends in Emerging India",
      authors: "Dr. S. Patil",
      journal: "Indian Journal of Commerce",
      year: 2023,
    },
    {
      title: "Sustainable Energy Solutions for Educational Campuses",
      authors: "Research Team – Science Dept.",
      journal: "Green Technology Journal",
      year: 2024,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Research & Development Cell
          </motion.h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            Dr. Sudhakarrao Jadhavar Arts, Commerce & Science College is committed
            to excellence in research, innovation, and academic development.
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-10 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-700">
              About Research at Our College
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Research & Development Cell at Dr. Sudhakarrao Jadhavar Arts,
              Commerce & Science College plays a vital role in nurturing research
              culture among faculty and students. The institution actively
              promotes quality research, innovation, entrepreneurship, and
              interdisciplinary collaboration.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our campus supports modern infrastructure including innovation
              labs, digital classrooms, e-library facilities, and industry
              partnerships to encourage applied research and real-world problem
              solving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= OBJECTIVES ================= */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Research Objectives
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {objectives.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-lg shadow-md border"
              >
                ✅ {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RESEARCH AREAS ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Research Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-6 rounded-lg shadow-lg text-center"
              >
                <h3 className="font-bold text-lg mb-3">{area.name}</h3>
                <p className="text-sm text-gray-600">
                  Projects: <b>{area.projects}</b>
                </p>
                <p className="text-sm text-gray-600">
                  Publications: <b>{area.publications}</b>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAMPUS PROJECTS ================= */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Campus Development & Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {campusProjects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-8 rounded-xl shadow-lg border"
              >
                <h3 className="font-bold text-lg mb-3 text-blue-700">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PUBLICATIONS ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Recent Publications
          </h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-6 rounded-lg shadow border"
              >
                <h3 className="font-bold mb-1">{pub.title}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  Authors: {pub.authors}
                </p>
                <p className="text-sm text-gray-500">
                  {pub.journal} ({pub.year})
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Research;
