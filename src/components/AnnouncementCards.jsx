import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiClock, FiBell } from 'react-icons/fi';
import api, { normalizeCollection } from '../api';

const AnnouncementCards = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await api.get('/announcements');
      const activeAnnouncements = normalizeCollection(response.data, ['announcements'])
        .filter((a) => a.isActive);
      setAnnouncements(activeAnnouncements);
    } catch (error) {
      console.error('Failed to fetch announcements:', error);
    } finally {
      setLoading(false);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Width of card + gap
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
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
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Announcements</h2>
            <p className="text-gray-600">Stay updated with the latest news and updates</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition text-[#0a2a66]"
              aria-label="Scroll left"
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition text-[#0a2a66]"
              aria-label="Scroll right"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {announcements.map((announcement, index) => (
            <motion.div
              key={announcement._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex-none w-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className={`h-2 ${
                announcement.type === 'important' ? 'bg-red-500' : 'bg-blue-500'
              }`} />
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FiBell className={`${
                    announcement.type === 'important' ? 'text-red-500' : 'text-blue-500'
                  }`} />
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${
                    announcement.type === 'important' 
                      ? 'bg-red-100 text-red-600' 
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {announcement.type === 'important' ? 'IMPORTANT' : 'UPDATE'}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {announcement.title}
                </h3>

                {announcement.content && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {announcement.content}
                  </p>
                )}

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-gray-500 text-sm">
                    <FiClock className="mr-1" />
                    {formatDate(announcement.date)}
                  </div>
                  <a
                    href={`/announcements#${announcement._id}`}
                    className="text-[#0a2a66] font-semibold text-sm hover:text-[#721632] transition"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link for Mobile */}
        <div className="text-center mt-8 lg:hidden">
          <a
            href="/announcements"
            className="inline-flex items-center text-[#0a2a66] font-semibold hover:text-[#721632] transition"
          >
            View All Announcements
            <FiChevronRight className="ml-1" />
          </a>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default AnnouncementCards;
