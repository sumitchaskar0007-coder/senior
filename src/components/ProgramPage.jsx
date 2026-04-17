import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function ProgramPage({ data }) {
    const navigate = useNavigate();

    const {
        title,
        heroImage,
        description,
        overview,
        eligibility,
        applyLink,
        programInfo,
        specializations,
        stats,
        campusImage,
    } = data;

    return (
        <div className="w-full bg-white">

            {/* ================= BACK BUTTON ================= */}
            <div className="max-w-7xl mx-auto px-6 pt-6">
                <button
                    onClick={() => navigate(-1)}
                    className="text-lg font-semibold text-gray-700 hover:text-black flex items-center gap-2"
                >
                    ← Back to Programs
                </button>
            </div>

            {/* ================= HERO ================= */}
            <section
                className="relative h-[560px] bg-cover bg-center flex items-center mt-4"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl font-extrabold mb-6"
                    >
                        {title}
                    </motion.h1>

                    <p className="max-w-3xl text-xl text-gray-200 mb-8">
                        {description}
                    </p>

                    <div className="flex gap-4">
                        <Link
                            to="/admissions"
                            className="bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-500 transition"
                        >
                            Apply Now →
                        </Link>

                        {applyLink && (
                            <a
                                href={applyLink}
                                target="_blank"
                                rel="noreferrer"
                                className="border border-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition"
                            >
                                Online Form
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* ================= OVERVIEW ================= */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-14">
                <div className="lg:col-span-2">
                    <h2 className="text-4xl font-bold mb-8 text-[#7a0f2b]">
                        Programme Overview
                    </h2>

                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        {overview}
                    </p>

                    <h3 className="text-3xl font-semibold mb-4">
                        Eligibility Criteria
                    </h3>

                    <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
                        {eligibility.map((e, i) => (
                            <li key={i}>{e}</li>
                        ))}
                    </ul>
                </div>

                {/* INFO CARD */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-sky-50 p-10 rounded-2xl shadow-lg h-fit"
                >
                    <h4 className="text-xl font-semibold mb-4">
                        Programme Details
                    </h4>

                    <p className="text-2xl font-bold text-[#7a0f2b] mb-6">
                        {programInfo.name}
                    </p>

                    <ul className="space-y-4 text-lg text-gray-700">
                        <li><strong>Duration:</strong> {programInfo.duration}</li>
                        <li><strong>Affiliation:</strong> {programInfo.affiliation}</li>
                        <li><strong>Approval:</strong> {programInfo.approval}</li>
                    </ul>
                </motion.div>
            </section>

            {/* ================= SPECIALIZATIONS ================= */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-14">

                    <div className="lg:col-span-2">
                        <h2 className="text-4xl font-bold mb-10 text-[#7a0f2b]">
                            Specializations & Career Paths
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {specializations.map((s, i) => (
                                <div
                                    key={i}
                                    className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-lg font-medium"
                                >
                                    {s}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* STATS */}
                    <div className="grid grid-cols-2 gap-6">
                        {stats.map((s, i) => (
                            <div
                                key={i}
                                className="bg-white p-8 rounded-2xl text-center shadow-lg"
                            >
                                <div className="text-4xl font-extrabold text-[#7a0f2b]">
                                    {s.value}
                                </div>
                                <div className="text-gray-600 mt-2 text-base">
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= WHY CHOOSE THIS PROGRAM ================= */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold text-center mb-14 text-[#7a0f2b]">
                    Why Choose This Program?
                </h2>

                <div className="grid md:grid-cols-3 gap-10 text-center">
                    {[
                        "Industry-oriented curriculum",
                        "Experienced faculty members",
                        "Hands-on projects & internships",
                        "Career guidance & placement support",
                        "Modern campus infrastructure",
                        "Holistic student development",
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white p-8 rounded-2xl shadow-lg text-lg font-medium"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= CAMPUS ================= */}
            <section className="bg-[#7a0f2b] text-white py-24">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">
                            Campus Overview
                        </h2>

                        <p className="text-xl text-gray-100 leading-relaxed">
                            Our campus offers modern classrooms, advanced laboratories,
                            creative studios, libraries, and a vibrant learning environment
                            that supports academic excellence and personal growth.
                        </p>
                    </div>

                    <img
                        src={campusImage}
                        alt="Campus"
                        className="rounded-3xl shadow-2xl"
                    />
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="bg-gray-100 py-20 text-center">
                <h2 className="text-4xl font-bold mb-6">
                    Start Your Academic Journey Today
                </h2>

                <p className="text-xl text-gray-700 mb-10">
                    Admissions are open. Apply now and shape your future with us.
                </p>

                <Link
                    to="/admissions"
                    className="inline-block bg-[#7a0f2b] text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-black transition"
                >
                    Apply for Admission →
                </Link>
            </section>
        </div>
    );
}
