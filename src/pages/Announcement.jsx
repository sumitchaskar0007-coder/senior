import React, { useState, useEffect } from 'react';
import api from '../api';

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await api.get('/announcements');
      // Filter only active announcements for public view
      const activeAnnouncements = response.data.filter(a => a.isActive);
      setAnnouncements(activeAnnouncements);
    } catch (error) {
      console.error('Failed to fetch announcements:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Announcements</h1>
        
        <div className="space-y-6">
          {announcements.map((announcement) => (
            <div
              key={announcement._id}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-2xl font-semibold mb-2">{announcement.title}</h2>
              <p className="text-sm text-gray-500 mb-4">
                {new Date(announcement.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <p className="text-gray-700 whitespace-pre-line">{announcement.content}</p>
            </div>
          ))}
        </div>

        {announcements.length === 0 && (
          <p className="text-center text-gray-500">No announcements available.</p>
        )}
      </div>
    </div>
  );
};

export default Announcement;