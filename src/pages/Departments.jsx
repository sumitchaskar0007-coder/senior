import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const departments = [
  { title: "B.A.", slug: "ba", duration: "3 Years", level: "Undergraduate" },
  { title: "B.Com.", slug: "bcom", duration: "3 Years", level: "Undergraduate" },
  { title: "B.Sc. (Plain)", slug: "bsc", duration: "3 Years", level: "Undergraduate" },
  { title: "B.Sc. (C.A. / C.S.)", slug: "bsc-ca", duration: "3 Years", level: "Undergraduate" },
  { title: "B.Sc. (AI & Machine Learning)", slug: "bsc-ai", duration: "3 Years", level: "Undergraduate" },
  { title: "B.Sc. (Cyber & Digital Science)", slug: "bsc-cyber", duration: "3 Years", level: "Undergraduate" },
  { title: "B.Sc. (Data Science)", slug: "bsc-ds", duration: "3 Years", level: "Undergraduate" },
  { title: "B.Sc. (Fashion Design)", slug: "bsc-fashion", duration: "3 Years", level: "Undergraduate" },
  { title: "BCA", slug: "bca", duration: "3 Years", level: "Undergraduate" },
  { title: "BBA (Plain)", slug: "bba", duration: "3 Years", level: "Undergraduate" },
  { title: "BBA (C.A.)", slug: "bba-ca", duration: "3 Years", level: "Undergraduate" },

  { title: "M.A.", slug: "ma", duration: "2 Years", level: "Post Graduation" },
  { title: "M.Com.", slug: "mcom", duration: "2 Years", level: "Post Graduation" },
  { title: "M.Sc. (C.A. / C.S.)", slug: "msc-ca", duration: "2 Years", level: "Post Graduation" },
  { title: "M.Sc. (Cyber Security)", slug: "msc-cyber", duration: "2 Years", level: "Post Graduation" },
  { title: "M.Sc. (Data Science)", slug: "msc-ds", duration: "2 Years", level: "Post Graduation" },
];

export default function Departments() {
  const [level, setLevel] = useState("Undergraduate");
  const [duration, setDuration] = useState("All");
  const [stream, setStream] = useState("All");

  const streams = ["All", "Science", "Commerce", "Arts"];

  const filtered = departments.filter(
    d => d.level === level && (duration === "All" || d.duration === duration)
  );

  return (
    <section className="bg-[#fafafa] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold text-center text-[#7a0f2b] mb-14"
        >
          Our Academic Programs
        </motion.h1>

        {/* FILTER BAR */}
        <div className="flex flex-wrap justify-center gap-6 mb-14">
          <select
            className="border border-gray-300 rounded-full px-8 py-4 text-lg font-medium"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option>Undergraduate</option>
            <option>Post Graduation</option>
          </select>

          <select
            className="border border-gray-300 rounded-full px-8 py-4 text-lg font-medium"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option value="All">All Durations</option>
            <option value="3 Years">3 Years</option>
            <option value="2 Years">2 Years</option>
          </select>

          <select
            className="border border-gray-300 rounded-full px-8 py-4 text-lg font-medium"
            value={stream}
            onChange={(e) => setStream(e.target.value)}
          >
            {streams.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* PROGRAM CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((dept, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-xl p-10 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold text-[#7a0f2b] mb-5">
                  {dept.title}
                </h2>

                <p className="text-lg text-gray-700">
                  Duration: <strong>{dept.duration}</strong>
                </p>
              </div>

              <Link
                to={`/program/${dept.slug}`}
                className="mt-8 text-3xl font-bold text-black hover:translate-x-2 transition"
              >
                →
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-xl text-gray-500 mt-20">
            No programs found.
          </p>
        )}
      </div>
    </section>
  );
}
