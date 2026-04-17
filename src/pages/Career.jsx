import React, { useState, useEffect } from 'react';
import api from '../api';

const Career = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCareer, setSelectedCareer] = useState(null);

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      const response = await api.get('/careers/active');
      setCareers(response.data);
    } catch (error) {
      console.error('Failed to fetch careers:', error);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (career) => {
    setSelectedCareer(career);
  };

  const closeModal = () => {
    setSelectedCareer(null);
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
        <h1 className="text-4xl font-bold text-center mb-12">Career Opportunities</h1>
        
        <div className="space-y-6">
          {careers.map((career) => (
            <div
              key={career._id}
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition"
              onClick={() => openModal(career)}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-semibold">{career.title}</h2>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                  {career.department}
                </span>
              </div>
              
              <p className="text-gray-700 mb-4 line-clamp-3">{career.description}</p>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                {career.location && (
                  <span>📍 {career.location}</span>
                )}
                {career.deadline && (
                  <span>📅 Deadline: {new Date(career.deadline).toLocaleDateString()}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {careers.length === 0 && (
          <p className="text-center text-gray-500">No career opportunities available at the moment.</p>
        )}
      </div>

      {/* Modal */}
      {selectedCareer && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold mb-2">{selectedCareer.title}</h2>
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                {selectedCareer.department}
              </span>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-700">{selectedCareer.description}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedCareer.requirements.map((req, index) => (
                    <li key={index} className="text-gray-700">{req}</li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                {selectedCareer.location && (
                  <div>
                    <span className="font-semibold">Location:</span> {selectedCareer.location}
                  </div>
                )}
                {selectedCareer.deadline && (
                  <div>
                    <span className="font-semibold">Application Deadline:</span>{' '}
                    {new Date(selectedCareer.deadline).toLocaleDateString()}
                  </div>
                )}
              </div>
            </div>
            
            <button
              onClick={closeModal}
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;