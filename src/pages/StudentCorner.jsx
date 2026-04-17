import { motion } from "framer-motion";
import { useState } from "react";

const StudentCorner = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const downloads = [
    { name: "Academic Calendar", icon: "📅", color: "bg-blue-600" },
    { name: "Examination Timetable", icon: "📝", color: "bg-green-600" },
   
    { name: "Results", icon: "📊", color: "bg-orange-600" },
    { name: "Syllabus", icon: "📘", color: "bg-indigo-600" },
    { name: "Admission Form", icon: "🧾", color: "bg-pink-600" },
  ];

  const notices = [
    "Semester Examination Form Submission Deadline – 25 March 2026",
    "Scholarship Application Last Date – 15 April 2026",
    "Annual Cultural Festival Registration Open",
    "Internal Assessment Schedule Released",
  ];

  const supportServices = [
    {
      title: "Academic Guidance",
      description:
        "Mentoring and academic counseling for better performance and career planning.",
      icon: "🎓",
    },
    {
      title: "Career & Placement Support",
      description:
        "Career guidance, internships, resume building, and placement assistance.",
      icon: "💼",
    },
    {
      title: "Library & Digital Resources",
      description:
        "Access to journals, e-books, research databases, and study materials.",
      icon: "📚",
    },
    {
      title: "Student Grievance Cell",
      description:
        "A transparent platform for resolving academic and administrative issues.",
      icon: "🛡️",
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400",
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400",
    "https://images.unsplash.com/photo-1562774053-701939374585?w=400",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400",
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
            Student Corner
          </motion.h1>
          <p className="text-center mt-4 text-lg text-white/90">
            Everything you need for academic success, student services, and campus life.
          </p>
        </div>
      </section>

      {/* DOWNLOADS */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Important Downloads</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {downloads.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`${item.color} text-white p-6 rounded-xl shadow-lg cursor-pointer flex flex-col items-center`}
              >
                <span className="text-4xl mb-3">{item.icon}</span>
                <span className="font-semibold text-lg">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTICE BOARD */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="section-title text-center mb-10">Notice Board</h2>

          <div className="space-y-4">
            {notices.map((notice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-secondary p-4 rounded-lg shadow flex items-center gap-3"
              >
                <span className="text-xl">📢</span>
                <p className="font-medium text-gray-700">{notice}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT SERVICES */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Student Support Services</h2>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {supportServices.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHOLARSHIPS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="section-title mb-6">Scholarships</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Students can apply for government and private scholarships through the
            Maharashtra Direct Benefit Transfer (MahaDBT) portal based on eligibility criteria.
          </p>
          <a
            href="https://mahadbt.maharashtra.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Visit MahaDBT Portal
          </a>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Campus Gallery</h2>

          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(image)}
                className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={image}
                  alt="Campus"
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default StudentCorner;
