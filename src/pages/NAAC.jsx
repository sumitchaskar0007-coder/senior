import { motion } from "framer-motion";

const NAAC = () => {
  const criteria = [
    { name: "Curricular Aspects", score: 85, color: "bg-blue-600" },
    { name: "Teaching–Learning & Evaluation", score: 88, color: "bg-green-600" },
    { name: "Research, Innovation & Extension", score: 75, color: "bg-purple-600" },
    { name: "Infrastructure & Learning Resources", score: 82, color: "bg-orange-600" },
    { name: "Student Support & Progression", score: 90, color: "bg-pink-600" },
    { name: "Governance, Leadership & Management", score: 87, color: "bg-indigo-600" },
    { name: "Institutional Values & Best Practices", score: 83, color: "bg-teal-600" },
  ];

  return (
    <div className="min-h-screen bg-secondary">

      {/* HERO */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center"
          >
            NAAC Accreditation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-center mt-4 text-blue-100"
          >
            National Assessment and Accreditation Council (NAAC)
          </motion.p>
        </div>
      </section>

      {/* GRADE STATUS */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              Accredited with NAAC – Grade “B”
            </h2>

            <div className="text-7xl font-extrabold text-primary mb-4">
              B
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The institution has been successfully accredited by the National Assessment and
              Accreditation Council (NAAC) with <strong>Grade “B”</strong>, reflecting a strong
              commitment towards quality education, infrastructure development, student support,
              governance, and continuous institutional improvement.
            </p>

            <p className="text-gray-600">
              NAAC accreditation assures students, parents, and stakeholders about the quality
              standards followed in teaching-learning processes, academic governance, research,
              and campus facilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHAT B GRADE MEANS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-10">
            What NAAC B Grade Represents
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Quality Education",
                desc: "Well-structured curriculum, effective teaching methods, and continuous evaluation systems.",
                icon: "🎓",
              },
              {
                title: "Infrastructure Growth",
                desc: "Modern classrooms, laboratories, library resources, digital learning facilities, and campus amenities.",
                icon: "🏫",
              },
              {
                title: "Student Development",
                desc: "Strong focus on academic excellence, extracurricular activities, career guidance, and skill development.",
                icon: "🚀",
              },
              {
                title: "Governance & Management",
                desc: "Transparent administration, policy-driven management, and continuous quality enhancement.",
                icon: "⚙️",
              },
              {
                title: "Research & Innovation",
                desc: "Encouragement for faculty and students to participate in research, innovation, and community outreach.",
                icon: "🔬",
              },
              {
                title: "Continuous Improvement",
                desc: "Regular audits, feedback systems, and institutional planning for sustainable growth.",
                icon: "📈",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-secondary rounded-xl p-6 shadow-md text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CRITERIA SCORES */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            NAAC Criteria Performance Overview
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {criteria.map((criterion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="font-semibold mb-3">{criterion.name}</h3>

                <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${criterion.score}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className={`${criterion.color} h-4 rounded-full`}
                  />
                </div>

                <p className="text-sm font-semibold text-gray-700">
                  Performance Score: {criterion.score}%
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10">
            NAAC Documents
          </h2>

          <div className="space-y-4">
            {[
              "NAAC Accreditation Certificate",
              "Self Study Report (SSR)",
              "Peer Team Visit Report",
            ].map((doc, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-secondary p-5 rounded-lg shadow-md flex justify-between items-center cursor-pointer"
              >
                <span className="font-semibold">{doc}</span>
                <span className="text-primary font-semibold">📥 Download</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default NAAC;
