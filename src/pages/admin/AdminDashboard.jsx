import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FiImage, 
  FiBell, 
  FiFileText, 
  FiBriefcase, 
  FiEdit, 
  FiLogOut 
} from 'react-icons/fi';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    toast.success('Logged out successfully');
    navigate('/admin/login');
  };

  const menuItems = [
    { title: 'Gallery', icon: FiImage, path: '/admin/gallery', color: 'bg-purple-500' },
    { title: 'Announcements', icon: FiBell, path: '/admin/announcements', color: 'bg-blue-500' },
    { title: 'Notices', icon: FiFileText, path: '/admin/notices', color: 'bg-green-500' },
    { title: 'Careers', icon: FiBriefcase, path: '/admin/careers', color: 'bg-yellow-500' },
    { title: 'Blogs', icon: FiEdit, path: '/admin/blogs', color: 'bg-red-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user.username}</span>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-700 hover:text-red-600"
              >
                <FiLogOut className="mr-1" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block group"
            >
              <div className={`${item.color} rounded-lg shadow-lg p-6 text-white hover:opacity-90 transition`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">Manage {item.title}</p>
                  </div>
                  <item.icon className="text-4xl opacity-75" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;