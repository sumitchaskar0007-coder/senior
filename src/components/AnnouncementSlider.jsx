import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiClock } from 'react-icons/fi';
import api, { normalizeCollection } from '../api';

const AnnouncementSlider = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  useEffect(() => {
    if (!isPaused && announcements.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % announcements.length);
      }, 5000); // Change slide every 5 seconds
      return () => clearInterval(timer);
    }
  }, [isPaused, announcements.length]);

  const fetchAnnouncements = async () => {
    try {
      const response = await api.get('/announcements');
      // Filter only active announcements
      const activeAnnouncements = normalizeCollection(response.data, ['announcements'])
        .filter((a) => a.isActive);
      setAnnouncements(activeAnnouncements);
    } catch (error) {
      console.error('Failed to fetch announcements:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % announcements.length);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0a2a66]"></div>
      </div>
    );
  }

  if (announcements.length === 0) {
    return null; // Don't show section if no announcements
  }

  return (
    <section className="py-12 bg-gradient-to-r from-[#0a2a66] to-[#1a3a7a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Latest Announcements</h2>
          <a 
            href="/announcements" 
            className="text-white/90 hover:text-white flex items-center gap-2 transition"
          >
            View All
            <FiChevronRight />
          </a>
        </div>

        <div 
          className="relative bg-white rounded-xl shadow-2xl overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={sliderRef}
        >
          {/* Main Slider */}
          <div className="relative h-48 md:h-40">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between h-full">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-semibold">
                        {announcements[currentIndex].type?.toUpperCase() || 'NEW'}
                      </span>
                      <span className="flex items-center text-gray-500 text-sm">
                        <FiClock className="mr-1" />
                        {formatDate(announcements[currentIndex].date)}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {announcements[currentIndex].title}
                    </h3>
                    {announcements[currentIndex].content && (
                      <p className="text-gray-600 line-clamp-2 md:line-clamp-1">
                        {announcements[currentIndex].content}
                      </p>
                    )}
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <a
                      href={`/announcements#${announcements[currentIndex]._id}`}
                      className="inline-flex items-center px-4 py-2 bg-[#0a2a66] text-white rounded-lg hover:bg-[#721632] transition whitespace-nowrap"
                    >
                      Read More
                      <FiChevronRight className="ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          {announcements.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#0a2a66] p-2 rounded-full shadow-lg transition z-10"
                aria-label="Previous announcement"
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#0a2a66] p-2 rounded-full shadow-lg transition z-10"
                aria-label="Next announcement"
              >
                <FiChevronRight size={20} />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {announcements.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {announcements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition ${
                    index === currentIndex 
                      ? 'bg-[#0a2a66] w-4' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to announcement ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementSlider;
