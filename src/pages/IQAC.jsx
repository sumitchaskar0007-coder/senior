import { motion } from "framer-motion";

const IQAC = () => {
  const objectives = [
    "To develop a system for conscious, consistent and catalytic action to improve academic and administrative performance.",
    "To promote institutional functioning towards quality enhancement through internalization of quality culture.",
    "To ensure coordination among various institutional activities and institutionalize best practices.",
    "To provide a sound basis for decision-making to improve institutional functioning.",
    "To act as a dynamic system for quality changes in Higher Education Institutions.",
  ];

  const strategies = [
    "Ensuring timely, efficient and progressive academic, administrative and financial performance.",
    "Relevant and quality academic and research programmes.",
    "Equitable access and affordability of academic programmes.",
    "Optimization and integration of modern teaching–learning methods.",
    "Ensuring credibility of assessment and evaluation processes.",
    "Adequate maintenance and allocation of support services.",
    "Sharing of research findings and networking with institutions in India and abroad.",
  ];

  const functions = [
    "Development and application of quality benchmarks.",
    "Facilitating learner-centric environment and participatory teaching-learning.",
    "Collection and analysis of feedback from all stakeholders.",
    "Dissemination of information on quality parameters.",
    "Organization of workshops, seminars, and quality circles.",
    "Documentation of programmes leading to quality improvement.",
    "Acting as a nodal agency for quality-related activities.",
    "Maintenance of institutional database (MIS).",
    "Conduct of Academic & Administrative Audit (AAA).",
    "Preparation and submission of AQAR as per NAAC guidelines.",
  ];

  const benefits = [
    "Clarity and focus in institutional functioning.",
    "Internalization of quality culture.",
    "Better coordination among institutional activities.",
    "Improved decision-making processes.",
    "Dynamic system for continuous quality enhancement.",
    "Organized documentation and internal communication.",
  ];

  return (
    <div className="min-h-screen bg-secondary">

      {/* HERO */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center"
          >
            Internal Quality Assurance Cell (IQAC)
          </motion.h1>
        </div>
      </section>

      {/* IQAC HOME / ABOUT */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-primary mb-6">IQAC – Home</h2>
            <p className="text-lg text-gray-700 leading-relaxed space-y-4">
              As proposed by the National Assessment and Accreditation Council (NAAC),
              the Internal Quality Assurance Cell (IQAC) has been established in
              <strong> Dr. Sudhakarrao Jadhavar College</strong>. The Cell functions as an
              integral part of the academic and administrative system of the institution.
              <br /><br />
              The College has been assessed in the <strong>Third Cycle of NAAC</strong> and
              accredited with <strong>‘A’ Grade (CGPA 3.70)</strong>. The institution was
              conferred <strong>Autonomous Status in June 2019</strong> by the University Grants Commission.
              <br /><br />
              Post NAAC III assessment, IQAC was reconstituted as per revised NAAC & UGC
              guidelines for autonomous colleges, including representation of students
              and external experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OBJECTIVES (BIG & PROMINENT) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Objectives of IQAC
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {objectives.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-secondary p-6 rounded-lg shadow-md text-lg font-medium"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGIES */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-10">Strategies</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            {strategies.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-3 mt-1">✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FUNCTIONS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Functions of IQAC</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {functions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-secondary p-5 rounded-lg shadow-sm"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-10">Benefits of IQAC</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            {benefits.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-3 mt-1">➤</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

    </div>
  );
};

export default IQAC;
