import { motion } from "framer-motion";

const Facilities = () => {
  const facilities = [
    {
      name: "Library",
      icon: "📚",
      description:
        "College library with textbooks, reference books, and quiet reading space for students.",
      image:
        "https://images.pexels.com/photos/8419263/pexels-photo-8419263.jpeg",
    },
    {
      name: "Laboratories",
      icon: "🔬",
      description:
        "Basic science laboratories where students perform practical experiments.",
      image:
        "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg",
    },
    {
      name: "Computer Lab",
      icon: "💻",
      description:
        "Computer lab with internet facility for learning computer skills and completing assignments.",
      image:
        "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    },
    {
      name: "Canteen",
      icon: "🍽️",
      description:
        "College canteen serving tea, snacks, and affordable meals for students.",
      image:
        "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
    },
    {
      name: "Sports Ground",
      icon: "⚽",
      description:
        "Open ground where students can play cricket, football, and other outdoor games.",
      image:
        "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg",
    },
    {
      name: "Hostel",
      icon: "🏠",
      description:
        "Simple hostel facility for students coming from nearby villages.",
      image:
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    },
    {
      name: "Wi-Fi Campus",
      icon: "📶",
      description:
        "Wi-Fi facility available in campus for accessing online study resources.",
      image:
        "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
    },
    {
      name: "Transport",
      icon: "🚌",
      description:
        "College bus service for students coming from nearby villages and towns.",
      image:
        "https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero */}
      <section className="bg-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center"
          >
            College Facilities
          </motion.h1>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-3 left-3 text-3xl bg-white rounded-full px-3 py-2">
                    {facility.icon}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">
                    {facility.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {facility.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Facilities;