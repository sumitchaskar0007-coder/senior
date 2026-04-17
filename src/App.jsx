import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import GalleryAdmin from './pages/admin/GalleryAdmin';
import AnnouncementAdmin from './pages/admin/AnnouncementAdmin';
import NoticeAdmin from './pages/admin/NoticeAdmin';
import CareerAdmin from './pages/admin/CareerAdmin';
import BlogAdmin from './pages/admin/BlogAdmin';

// Public Pages
import Gallery from './pages/Gallery';
import Announcement from './pages/Announcement';
import Notice from './pages/Notice';
import Career from './pages/Career';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';

// Components
import ProtectedRoute from './components/ProtectedRoute';
import Layout from "./components/Layout";
import ScrollToTopOnRoute from "./components/ScrollToTopOnRoute";

/* ===== PAGES ===== */
import Home from "./pages/Home";
import About from "./pages/About";
import Administration from "./pages/Administration";
import Departments from "./pages/Departments";
import Admissions from "./pages/Admissions";
import Facilities from "./pages/Facilities";
import StudentCorner from "./pages/StudentCorner";
import IQAC from "./pages/IQAC";
import NAAC from "./pages/NAAC";
import NIRF from "./pages/NIRF";
import Research from "./pages/Research";
import Alumni from "./pages/Alumni";
import Contact from "./pages/Contact";

/* ⭐ ADD THIS IMPORT (MAIN FIX) */
import ProgramRoute from "./pages/ProgramRoute";

function App() {
  return (
    <Router basename="/">
      <ScrollToTopOnRoute />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/student-corner" element={<StudentCorner />} />
          <Route path="/iqac" element={<IQAC />} />
          <Route path="/naac" element={<NAAC />} />
          <Route path="/nirf" element={<NIRF />} />
          <Route path="/research" element={<Research />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/contact" element={<Contact />} />

          {/* ⭐ DYNAMIC PROGRAM ROUTE */}
          <Route path="/program/:slug" element={<ProgramRoute />} />
          <Route path="/" element={<Gallery />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/announcements" element={<Announcement />} />
        <Route path="/notices" element={<Notice />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/blogs" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogDetails />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/gallery"
          element={
            <ProtectedRoute>
              <GalleryAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/announcements"
          element={
            <ProtectedRoute>
              <AnnouncementAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/notices"
          element={
            <ProtectedRoute>
              <NoticeAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/careers"
          element={
            <ProtectedRoute>
              <CareerAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/blogs"
          element={
            <ProtectedRoute>
              <BlogAdmin />
            </ProtectedRoute>
          }
        />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
