import React, { useState, useEffect } from 'react';
import { FiDownload } from 'react-icons/fi';
import api, { normalizeCollection } from '../api';

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await api.get('/notices');
      setNotices(normalizeCollection(response.data, ['notices']));
    } catch (error) {
      console.error('Failed to fetch notices:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (fileUrl, fileName) => {
    window.open(fileUrl, '_blank');
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
        <h1 className="text-4xl font-bold text-center mb-12">Notices</h1>
        
        <div className="space-y-6">
          {notices.map((notice) => (
            <div
              key={notice._id}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-2xl font-semibold mb-2">{notice.title}</h2>
              <p className="text-sm text-gray-500 mb-4">
                {new Date(notice.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <p className="text-gray-700 mb-4 whitespace-pre-line">{notice.content}</p>
              
              {notice.file && (
                <button
                  onClick={() => handleDownload(notice.file, notice.title)}
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <FiDownload className="mr-2" />
                  Download Attachment
                </button>
              )}
            </div>
          ))}
        </div>

        {notices.length === 0 && (
          <p className="text-center text-gray-500">No notices available.</p>
        )}
      </div>
    </div>
  );
};

export default Notice;
