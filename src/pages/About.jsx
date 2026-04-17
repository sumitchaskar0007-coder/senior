import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <div className="min-h-screen bg-secondary">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            About Our Institution
          </motion.h1>
          <p className="mt-4 text-blue-100 max-w-3xl mx-auto">
            A premier institution committed to academic excellence, values, and holistic development
          </p>
        </div>
      </section>

      {/* ================= HISTORY ================= */}
     

      {/* ================= VISION & MISSION ================= */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be a center of excellence producing ethical, innovative, and responsible
              graduates equipped with knowledge, skills, and values to contribute meaningfully
              to society.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To deliver quality higher education through innovative teaching, research,
              co-curricular activities, and community engagement while nurturing leadership,
              integrity, and lifelong learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= ACADEMIC STREAMS ================= */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Academic Streams
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Arts",
                desc: "Programs in humanities and social sciences that develop creativity, communication skills, ethics, and critical thinking.",
              },
              {
                title: "Commerce",
                desc: "Commerce education focusing on accounting, finance, economics, business management, and entrepreneurship.",
              },
              {
                title: "Science",
                desc: "Science programs with strong laboratory exposure, analytical learning, and research orientation.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20 px-4">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Leadership Team
          </h2>

          <div className="space-y-14">

            {/* ================= PRESIDENT ================= */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8 md:p-12 text-center">

                {/* IMAGE – TOP CENTER */}
                <div className="relative mx-auto mb-6 w-fit">
                  {/* Soft glow */}
                  <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl"></div>

                  <div className="relative p-2 rounded-full bg-white shadow-2xl">
                    <img
                      src="/images/owner.jpeg"
                      alt="President"
                      className="w-48 h-48 rounded-full object-cover border-4 border-white"
                    />
                  </div>
                </div>

                {/* NAME */}
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Prin. Dr. Sudhakarrao Jadhavar
                </h3>

                {/* QUALIFICATIONS */}
                <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-6">
                  M.Com, M.A., L.L.M., M.P.M., D.T.L., D.L.L.&L.W., G.D.C.&A., Ph.D.
                </p>

                <div className="border-t pt-6 max-w-4xl mx-auto">
                  <h4 className="font-bold text-gray-900 mb-4">
                    Leadership Credentials
                  </h4>

                  <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700 mb-6 text-left max-w-3xl mx-auto">
                    <li>✓ Member – Management Council, Savitribai Phule Pune University</li>
                    <li>✓ Former Dean – Commerce Department, SPPU</li>
                    <li>✓ General Secretary – Principals Forum, SPPU</li>
                    <li>✓ Member – Maharashtra Nursing Council</li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed mb-4 max-w-3xl mx-auto">
                    <strong>“Education for strength, wisdom and intellect”</strong> — with
                    this vision, Jadhavar International School (CBSE) has emerged as a
                    knowledge hub providing value-based education that nurtures disciplined,
                    confident and capable young minds.
                  </p>

                  <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    Situated in a rural region, the institution empowers students to become
                    nation builders through strong academics, character development and
                    opportunities for holistic growth.
                  </p>

                  {/* BOOKS */}
                  <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-5 max-w-3xl mx-auto text-left">
                    <h4 className="font-bold text-gray-900 mb-3">
                      Books & Writings
                    </h4>

                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>
                        <a
                          href="/images/pdf/KrantiveerMarathi.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary hover:underline"
                        >
                          📘 Autobiography (Marathi)
                        </a>
                      </li>
                      <li>
                        <a
                          href="/images/pdf/KrantiveerHindi.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary hover:underline"
                        >
                          📘 Autobiography (Hindi)
                        </a>
                      </li>
                      <li>
                        <a
                          href="/images/pdf/KrantiveerEnglish.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary hover:underline"
                        >
                          📘 Autobiography (English)
                        </a>
                      </li>
                      <li>
                        <a
                          href="/images/pdf/Manvi_Jivanache_shilpkar.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold hover:text-primary hover:underline"
                        >
                          📕 यशाचे शिल्पकार : संघर्षातून शिखराकडे
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>


            {/* ================= SECRETARY ================= */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8 md:p-12 text-center">

                {/* IMAGE */}
                <div className="relative mx-auto mb-6 w-fit">
                  <div className="absolute inset-0 rounded-full bg-green-500/30 blur-xl"></div>

                  <div className="relative p-2 rounded-full bg-white shadow-2xl">
                    <img
                      src="/images/Shardul_jadhavar.jpeg"
                      alt="Secretary"
                      className="w-48 h-48 rounded-full object-cover border-4 border-white"
                    />
                  </div>
                </div>

                {/* NAME */}
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Adv. Shardul Sudhakarrao Jadhavar
                </h3>

                {/* QUALIFICATIONS */}
                <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-6">
                  M.B.A., P.G.D.H.R.M., B.Com., D.H.R.&L., D.C.L., D.CP.L., APCL, DIPL,
                  CMED, D.LL&L.W., L.L.M.
                </p>

                <div className="border-t pt-6 max-w-4xl mx-auto">
                  <p className="text-gray-700 leading-relaxed mb-4 max-w-3xl mx-auto">
                    Education today is rapidly transforming, making it challenging for
                    students to choose the right path. Our aim is to develop not just
                    knowledgeable individuals, but responsible, confident and compassionate
                    citizens.
                  </p>

                  <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    At Jadhavar Institutes, we follow a student-centric approach with
                    mentoring, counseling, NSS activities, mental health workshops,
                    placements and career guidance to ensure holistic development.
                  </p>
                </div>

              </div>
            </div>


            {/* ================= TREASURER ================= */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8 md:p-12 text-center">

                {/* IMAGE */}
                <div className="relative mx-auto mb-6 w-fit">
                  <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-xl"></div>

                  <div className="relative p-2 rounded-full bg-white shadow-2xl">
                    <img
                      src="/images/surekha_jadhavar.jpeg"
                      alt="Treasurer"
                      className="w-48 h-48 rounded-full object-cover border-4 border-white"
                    />
                  </div>
                </div>

                {/* NAME */}
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Mrs. Surekha Sudhakarrao Jadhavar
                </h3>

                <div className="border-t pt-6 max-w-4xl mx-auto">
                  <p className="text-gray-700 leading-relaxed mb-4 max-w-3xl mx-auto">
                    Mrs. Surekha S. Jadhavar is an inspirational force behind the
                    institution, bringing together students, parents and staff while
                    preserving cultural and traditional values.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
                    As Head of the Women’s Cell, she ensures safety, empowerment and
                    support for women while strengthening the institution’s social
                    responsibility initiatives.
                  </p>

                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 max-w-3xl mx-auto text-left">
                    <p className="text-sm text-gray-700">
                      <strong>Notable Initiative:</strong> Patriotic Raksha Bandhan
                      celebrations with soldiers at Leh–Ladakh borders, reflecting
                      deep national commitment.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>


        </div>
      </section >

      {/* ================= FACILITIES ================= */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            State-of-the-Art Facilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Library & Digital Resources",
              "Modern Laboratories",
              "Computer & IT Labs",
              "Seminar & Conference Halls",
              "Sports & Recreation",
              "Cafeteria & Health Center",
              "Hostel Facilities",
              "Transportation Services",
              "Wi-Fi Enabled Campus",
            ].map((facility, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <p className="font-semibold text-gray-800">{facility}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Begin Your Academic Journey With Us
          </h2>
          <p className="text-blue-100 mb-6">
            Discover opportunities in Arts, Commerce & Science
          </p>
          <Link
            to="/admissions"
            className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition"
          >
            View Admissions
          </Link>
        </div>
      </section>

    </div>
  );
}
