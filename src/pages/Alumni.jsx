import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Calendar, Award, BookOpen, Heart, Briefcase } from 'lucide-react';

const Alumni = () => {
  const [formData, setFormData] = useState({
    name: '',
    batch: '',
    course: '',
    profession: '',
    email: '',
    message: '',
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const alumniImages = [
    {
      url: '/images/alumni/alumni1.jpg',
      title: 'Alumni Reunion 2024',
      description: 'Celebrating the legacy of Jadhavar College alumni'
    },
    {
      url: '/images/alumni/alumni2.jpg',
      title: 'Alumni Reunion 2023',
      description: 'Connecting with fellow alumni from different batches'
    },
    {
      url: '/images/alumni/alumni3.jpg',
      title: 'Alumni Reunion 2022',
      description: 'Sharing experiences and building lasting relationships'
    }
  ];

  const alumniBenefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Networking Opportunities',
      description: 'Connect with fellow alumni across various industries and build valuable professional relationships.'
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: 'Exclusive Events',
      description: 'Attend alumni reunions, seminars, workshops, and special events organized throughout the year.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Career Support',
      description: 'Access to job opportunities, career counseling, and professional development resources.'
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Library Access',
      description: 'Continued access to college library resources and research materials for lifelong learning.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Community Support',
      description: 'Be part of a supportive community that gives back to society through various charitable initiatives.'
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'Mentorship Programs',
      description: 'Share your expertise and guide current students in their academic and career journeys.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % alumniImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + alumniImages.length) % alumniImages.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for registering! We will contact you soon.');
    setFormData({
      name: '',
      batch: '',
      course: '',
      profession: '',
      email: '',
      message: '',
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            Jadhavar College Alumni Network
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center text-blue-100"
          >
            Connecting Past, Present, and Future Leaders
          </motion.p>
        </div>
      </section>

      {/* Alumni Gallery Slider */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Alumni Moments</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {alumniImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0 relative">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-96 object-cover"
                      onError={(e) => {
                        e.target.src = '/images/placeholder-alumni.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                      <p className="text-lg text-gray-200">{image.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {alumniImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Join Our Alumni Network?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {alumniBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-primary mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Registration Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Alumni Registration</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-secondary p-8 rounded-lg shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Batch *</label>
                  <input
                    type="text"
                    name="batch"
                    value={formData.batch}
                    onChange={handleChange}
                    required
                    placeholder="e.g., 2010"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Course *</label>
                  <input
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Current Profession *</label>
                  <input
                    type="text"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
              >
                Submit Registration
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;

