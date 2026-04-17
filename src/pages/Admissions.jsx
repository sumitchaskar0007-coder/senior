import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { 
  Calendar, 
  Download, 
  FileText, 
  Award, 
  CheckCircle, 
  DollarSign,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Shield,
  Percent,
  Bookmark,
  X,
  Loader2,
  AlertCircle,
  User,
  BookOpen,
  Home,
  Users,
  Copy,
  CreditCard,
  Clock
} from 'lucide-react';

// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const ApplicationFormModal = ({ isOpen, onClose, onSubmit, type }) => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    alternatePhone: '',
    dateOfBirth: '',
    gender: 'Male',
    bloodGroup: '',
    nationality: 'Indian',
    religion: '',
    category: 'General',
    subCategory: '',
    
    // Address Information
    addressLine1: '',
    addressLine2: '',
    city: '',
    district: '',
    state: '',
    pincode: '',
    country: 'India',
    
    // Academic Information
    course: 'BA',
    year: '2026',
    semester: '1',
    subjects: ['', '', '', '', '', '', '', ''],
    
    // Previous Education
    sscSchool: '',
    sscYear: '',
    sscPercentage: '',
    sscBoard: '',
    hscSchool: '',
    hscYear: '',
    hscPercentage: '',
    hscBoard: '',
    graduationCollege: '',
    graduationYear: '',
    graduationPercentage: '',
    graduationUniversity: '',
    graduationDegree: '',
    pgCollege: '',
    pgYear: '',
    pgPercentage: '',
    pgUniversity: '',
    pgDegree: '',
    
    // Additional Information
    fatherName: '',
    fatherOccupation: '',
    fatherPhone: '',
    motherName: '',
    motherOccupation: '',
    motherPhone: '',
    guardianName: '',
    guardianRelation: '',
    guardianPhone: '',
    
    // Document Related
    aadharNumber: '',
    panNumber: '',
    passportNumber: '',
    
    // How did you hear
    howDidYouHear: 'Website',
    referralSource: '',
    
    // Declaration
    declarationAccepted: false,
    signature: '',
    date: new Date().toISOString().split('T')[0],
    place: '',
    
    // Form Type
    formType: 'admission'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [documentsList, setDocumentsList] = useState([
    { name: 'Graduation/PG Certificate', copies: 3, attested: true, submitted: false },
    { name: '10th Std Mark Sheet', copies: 3, attested: true, submitted: false },
    { name: '12th Std Mark Sheet', copies: 3, attested: true, submitted: false },
    { name: 'Leaving/Transfer Certificate', copies: 3, attested: true, submitted: false },
    { name: 'Migration Certificate', copies: 3, attested: true, submitted: false },
    { name: 'GAP Affidavit', copies: 3, attested: true, submitted: false },
    { name: 'Passport Size Photographs', copies: 4, attested: false, submitted: false },
    { name: 'Caste Certificate', copies: 2, attested: true, submitted: false },
    { name: 'Income Proof', copies: 2, attested: true, submitted: false },
    { name: 'Marriage/Name Change Certificate', copies: 2, attested: true, submitted: false },
    { name: 'Aadhar Card', copies: 1, attested: true, submitted: false }
  ]);

  const [feeSchedule, setFeeSchedule] = useState({
    totalFees: '',
    registrationFee: '',
    registrationDate: '',
    firstInstallment: '',
    firstInstallmentDate: '',
    secondInstallment: '',
    secondInstallmentDate: '',
    thirdInstallment: '',
    thirdInstallmentDate: '',
    fourthInstallment: '',
    fourthInstallmentDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setSubmitError(null);
  };

  const handleSubjectChange = (index, value) => {
    const updatedSubjects = [...formData.subjects];
    updatedSubjects[index] = value;
    setFormData(prev => ({
      ...prev,
      subjects: updatedSubjects
    }));
  };

  const handleDocumentToggle = (index) => {
    const updatedDocs = [...documentsList];
    updatedDocs[index].submitted = !updatedDocs[index].submitted;
    setDocumentsList(updatedDocs);
  };

  const handleFeeChange = (field, value) => {
    setFeeSchedule(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const submitData = {
        ...formData,
        documents: documentsList,
        feeSchedule: feeSchedule,
        submittedAt: new Date().toISOString()
      };

      const response = await axios.post(`${API_BASE_URL}/api/admissions`, submitData, {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 10000
      });

      if (response.data.success) {
        onSubmit(formData);
        setIsSubmitted(true);
      }
    } catch (error) {
      setSubmitError(
        error.response?.data?.error || 
        error.message || 
        'Failed to submit. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setSubmitError(null);
    onClose();
    setCurrentStep(1);
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  if (!isOpen) return null;

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl max-w-2xl w-full mx-auto max-h-[90vh] overflow-y-auto"
        >
          <div className="p-8 text-center">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Application Submitted Successfully!
            </h3>
            <p className="text-gray-600 mb-6">
              Your application has been received. Please note the following important information:
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6 text-left">
              <h4 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2">
                <Clock className="h-5 w-5" /> Important Reminders:
              </h4>
              <ul className="space-y-2 text-yellow-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Attendance below 75% in theory lectures and 100% in practicals will result in detention from examinations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>All documents must be submitted in original with attested copies as per the checklist</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Late fees will be charged if fees are not paid as per the schedule</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Keep minimum 8-10 attested copies of mark sheets and certificates</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6 text-left">
              <h4 className="font-semibold text-blue-800 mb-3">Documents to Submit:</h4>
              <div className="grid grid-cols-2 gap-2">
                {documentsList.map((doc, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-blue-700">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{doc.name} ({doc.copies} copies{doc.attested ? ', attested' : ''})</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleClose}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Close Window
              </button>
              <button
                onClick={() => {
                  window.print();
                }}
                className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
              >
                <Download className="h-5 w-5" />
                Download Application Copy
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl max-w-4xl w-full mx-auto my-8"
      >
        <div className="sticky top-0 bg-white z-10 rounded-t-2xl border-b">
          <div className="flex justify-between items-center p-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Admission Application Form
              </h3>
              <p className="text-sm text-red-600 mt-1 font-medium">
                * Please fill in CAPITAL LETTERS only * Write name as per 12th Mark Sheet
              </p>
            </div>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Progress Steps */}
          <div className="px-6 pb-4">
            <div className="flex justify-between items-center">
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                    currentStep >= step 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step}
                  </div>
                  {step < 5 && (
                    <div className={`w-12 h-1 mx-2 ${
                      currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-600">
              <span>Personal</span>
              <span>Address</span>
              <span>Education</span>
              <span>Documents</span>
              <span>Declaration</span>
            </div>
          </div>
        </div>

        {submitError && (
          <div className="mx-6 mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
            <p className="text-red-700 text-sm">{submitError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-6 max-h-[70vh] overflow-y-auto">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-blue-50 p-4 rounded-xl mb-6">
                <h4 className="font-semibold text-blue-800 flex items-center gap-2">
                  <User className="h-5 w-5" /> Personal Details
                </h4>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                    placeholder="FIRST NAME"
                    style={{ textTransform: 'uppercase' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    name="middleName"
                    value={formData.middleName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                    placeholder="MIDDLE NAME"
                    style={{ textTransform: 'uppercase' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                    placeholder="LAST NAME"
                    style={{ textTransform: 'uppercase' }}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                    placeholder="+91 9876543210"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Alternate Phone
                  </label>
                  <input
                    type="tel"
                    name="alternatePhone"
                    value={formData.alternatePhone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Blood Group
                  </label>
                  <select
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nationality
                  </label>
                  <input
                    type="text"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                    placeholder="INDIAN"
                    style={{ textTransform: 'uppercase' }}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Religion
                  </label>
                  <input
                    type="text"
                    name="religion"
                    value={formData.religion}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                    placeholder="RELIGION"
                    style={{ textTransform: 'uppercase' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="General">General</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                    <option value="OBC">OBC</option>
                    <option value="EWS">EWS</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sub-Category
                  </label>
                  <input
                    type="text"
                    name="subCategory"
                    value={formData.subCategory}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                    placeholder="SUB-CATEGORY"
                    style={{ textTransform: 'uppercase' }}
                  />
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl mt-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" /> Course Details
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Course *
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="BA">Bachelor of Arts (B.A)</option>
                      <option value="BCOM">Bachelor of Commerce (B.Com)</option>
                      <option value="BSC">B.Sc (Plain)</option>
                      <option value="BSC-CA">B.Sc (Computer Applications)</option>
                      <option value="BSC-AI">B.Sc (AI & Machine Learning)</option>
                      <option value="BSC-CYBER">B.Sc (Cyber & Digital Science)</option>
                      <option value="BSC-DS">B.Sc (Data Science)</option>
                      <option value="BCA">Bachelor of Computer Applications (BCA)</option>
                      <option value="BBA">Bachelor of Business Administration (BBA)</option>
                      <option value="MA">Master of Arts (M.A)</option>
                      <option value="MCOM">Master of Commerce (M.Com)</option>
                      <option value="MSC-CA">M.Sc (Computer Applications)</option>
                      <option value="MSC-CYBER">M.Sc (Cyber Security)</option>
                      <option value="MSC-DS">M.Sc (Data Science)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Academic Year *
                    </label>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="2026">2026-27</option>
                      <option value="2025">2025-26</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Semester
                    </label>
                    <select
                      name="semester"
                      value={formData.semester}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="1">Semester 1</option>
                      <option value="2">Semester 2</option>
                      <option value="3">Semester 3</option>
                      <option value="4">Semester 4</option>
                      <option value="5">Semester 5</option>
                      <option value="6">Semester 6</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-4">Subjects Offered (8 Subjects)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
                    <div key={index}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Subject {index + 1}
                      </label>
                      <input
                        type="text"
                        value={formData.subjects[index]}
                        onChange={(e) => handleSubjectChange(index, e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                        placeholder={`SUBJECT ${index + 1}`}
                        style={{ textTransform: 'uppercase' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Address Information */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-blue-50 p-4 rounded-xl mb-6">
                <h4 className="font-semibold text-blue-800 flex items-center gap-2">
                  <Home className="h-5 w-5" /> Address Details
                </h4>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address Line 1 *
                </label>
                <input
                  type="text"
                  name="addressLine1"
                  value={formData.addressLine1}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                  placeholder="HOUSE/FLAT NO., BUILDING NAME"
                  style={{ textTransform: 'uppercase' }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address Line 2
                </label>
                <input
                  type="text"
                  name="addressLine2"
                  value={formData.addressLine2}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                  placeholder="STREET, AREA, LANDMARK"
                  style={{ textTransform: 'uppercase' }}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                    placeholder="CITY"
                    style={{ textTransform: 'uppercase' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    District *
                  </label>
                  <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                    placeholder="DISTRICT"
                    style={{ textTransform: 'uppercase' }}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State *
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                    placeholder="STATE"
                    style={{ textTransform: 'uppercase' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                    placeholder="PINCODE"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                    placeholder="INDIA"
                    style={{ textTransform: 'uppercase' }}
                  />
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl mt-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5" /> Parent/Guardian Information
                </h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h5 className="font-medium text-gray-700">Father's Details</h5>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Father's Name
                      </label>
                      <input
                        type="text"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                        placeholder="FATHER'S NAME"
                        style={{ textTransform: 'uppercase' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Occupation
                      </label>
                      <input
                        type="text"
                        name="fatherOccupation"
                        value={formData.fatherOccupation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                        placeholder="OCCUPATION"
                        style={{ textTransform: 'uppercase' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="fatherPhone"
                        value={formData.fatherPhone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h5 className="font-medium text-gray-700">Mother's Details</h5>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mother's Name
                      </label>
                      <input
                        type="text"
                        name="motherName"
                        value={formData.motherName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                        placeholder="MOTHER'S NAME"
                        style={{ textTransform: 'uppercase' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Occupation
                      </label>
                      <input
                        type="text"
                        name="motherOccupation"
                        value={formData.motherOccupation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                        placeholder="OCCUPATION"
                        style={{ textTransform: 'uppercase' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="motherPhone"
                        value={formData.motherPhone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h5 className="font-medium text-gray-700 mb-3">Guardian (if applicable)</h5>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Guardian Name
                      </label>
                      <input
                        type="text"
                        name="guardianName"
                        value={formData.guardianName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                        placeholder="GUARDIAN NAME"
                        style={{ textTransform: 'uppercase' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Relation
                      </label>
                      <input
                        type="text"
                        name="guardianRelation"
                        value={formData.guardianRelation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                        placeholder="RELATION"
                        style={{ textTransform: 'uppercase' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="guardianPhone"
                        value={formData.guardianPhone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Educational Information */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-blue-50 p-4 rounded-xl mb-6">
                <h4 className="font-semibold text-blue-800 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" /> Educational Qualifications
                </h4>
              </div>

              {/* SSC Details */}
              <div className="bg-gray-50 p-4 rounded-xl">
                <h5 className="font-semibold text-gray-900 mb-4">SSC / 10th Standard</h5>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      School Name
                    </label>
                    <input
                      type="text"
                      name="sscSchool"
                      value={formData.sscSchool}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                      placeholder="SCHOOL NAME"
                      style={{ textTransform: 'uppercase' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Year of Passing
                    </label>
                    <input
                      type="text"
                      name="sscYear"
                      value={formData.sscYear}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                      placeholder="YYYY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Percentage
                    </label>
                    <input
                      type="text"
                      name="sscPercentage"
                      value={formData.sscPercentage}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                      placeholder="%"
                    />
                  </div>
                  <div className="md:col-span-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Board
                    </label>
                    <input
                      type="text"
                      name="sscBoard"
                      value={formData.sscBoard}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                      placeholder="BOARD NAME"
                      style={{ textTransform: 'uppercase' }}
                    />
                  </div>
                </div>
              </div>

              {/* HSC Details */}
              <div className="bg-gray-50 p-4 rounded-xl">
                <h5 className="font-semibold text-gray-900 mb-4">HSC / 12th Standard</h5>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      College/School Name
                    </label>
                    <input
                      type="text"
                      name="hscSchool"
                      value={formData.hscSchool}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                      placeholder="COLLEGE NAME"
                      style={{ textTransform: 'uppercase' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Year of Passing
                    </label>
                    <input
                      type="text"
                      name="hscYear"
                      value={formData.hscYear}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                      placeholder="YYYY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Percentage
                    </label>
                    <input
                      type="text"
                      name="hscPercentage"
                      value={formData.hscPercentage}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                      placeholder="%"
                    />
                  </div>
                  <div className="md:col-span-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Board
                    </label>
                    <input
                      type="text"
                      name="hscBoard"
                      value={formData.hscBoard}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                      placeholder="BOARD NAME"
                      style={{ textTransform: 'uppercase' }}
                    />
                  </div>
                </div>
              </div>

              {/* Graduation Details */}
              <div className="bg-gray-50 p-4 rounded-xl">
                <h5 className="font-semibold text-gray-900 mb-4">Graduation Details</h5>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      College/University Name
                    </label>
                    <input
                      type="text"
                      name="graduationCollege"
                      value={formData.graduationCollege}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                      placeholder="COLLEGE/UNIVERSITY NAME"
                      style={{ textTransform: 'uppercase' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Year of Passing
                    </label>
                    <input
                      type="text"
                      name="graduationYear"
                      value={formData.graduationYear}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                      placeholder="YYYY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Percentage/CGPA
                    </label>
                    <input
                      type="text"
                      name="graduationPercentage"
                      value={formData.graduationPercentage}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                      placeholder="% or CGPA"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Degree
                    </label>
                    <input
                      type="text"
                      name="graduationDegree"
                      value={formData.graduationDegree}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                      placeholder="DEGREE NAME"
                      style={{ textTransform: 'uppercase' }}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      University
                    </label>
                    <input
                      type="text"
                      name="graduationUniversity"
                      value={formData.graduationUniversity}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                      placeholder="UNIVERSITY NAME"
                      style={{ textTransform: 'uppercase' }}
                    />
                  </div>
                </div>
              </div>

              {/* PG Details (Optional) */}
              <div className="bg-gray-50 p-4 rounded-xl">
                <h5 className="font-semibold text-gray-900 mb-4">Post Graduation (if applicable)</h5>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      College/University Name
                    </label>
                    <input
                      type="text"
                      name="pgCollege"
                      value={formData.pgCollege}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                      placeholder="COLLEGE/UNIVERSITY NAME"
                      style={{ textTransform: 'uppercase' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Year of Passing
                    </label>
                    <input
                      type="text"
                      name="pgYear"
                      value={formData.pgYear}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                      placeholder="YYYY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Percentage/CGPA
                    </label>
                    <input
                      type="text"
                      name="pgPercentage"
                      value={formData.pgPercentage}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                      placeholder="% or CGPA"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Degree
                    </label>
                    <input
                      type="text"
                      name="pgDegree"
                      value={formData.pgDegree}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                      placeholder="DEGREE NAME"
                      style={{ textTransform: 'uppercase' }}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      University
                    </label>
                    <input
                      type="text"
                      name="pgUniversity"
                      value={formData.pgUniversity}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                      placeholder="UNIVERSITY NAME"
                      style={{ textTransform: 'uppercase' }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4: Documents & Fee Schedule */}
          {currentStep === 4 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-blue-50 p-4 rounded-xl mb-6">
                <h4 className="font-semibold text-blue-800 flex items-center gap-2">
                  <Copy className="h-5 w-5" /> Documents to be Submitted
                </h4>
                <p className="text-sm text-blue-600 mt-1">
                  Please keep minimum 8-10 attested copies of mark sheets and certificates before submitting
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Document Name</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Copies</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Attested</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Submitted</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {documentsList.map((doc, index) => (
                      <tr key={index}>
                        <td className="px-4 py-3 text-sm">{doc.name}</td>
                        <td className="px-4 py-3 text-center text-sm">{doc.copies}</td>
                        <td className="px-4 py-3 text-center text-sm">
                          {doc.attested ? 'Yes' : 'No'}
                        </td>
                        <td className="px-4 py-3 text-center">
                          <input
                            type="checkbox"
                            checked={doc.submitted}
                            onChange={() => handleDocumentToggle(index)}
                            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-green-50 p-4 rounded-xl mt-6">
                <h4 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <CreditCard className="h-5 w-5" /> Fee Payment Schedule
                </h4>
                <p className="text-sm text-green-600 mb-4">
                  Late Fees will be charged if the fees are not paid as per the given schedule.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Total Fees (Rs.)
                    </label>
                    <input
                      type="text"
                      value={feeSchedule.totalFees}
                      onChange={(e) => handleFeeChange('totalFees', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500"
                      placeholder="Total Amount"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Registration Fee (Rs.)
                    </label>
                    <input
                      type="text"
                      value={feeSchedule.registrationFee}
                      onChange={(e) => handleFeeChange('registrationFee', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500"
                      placeholder="Registration Amount"
                    />
                  </div>
                </div>

                <div className="mt-4 space-y-4">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Installment {num} Amount (Rs.)
                        </label>
                        <input
                          type="text"
                          value={feeSchedule[`${['first', 'second', 'third', 'fourth'][num-1]}Installment`]}
                          onChange={(e) => handleFeeChange(`${['first', 'second', 'third', 'fourth'][num-1]}Installment`, e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500"
                          placeholder={`Installment ${num} Amount`}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Due Date
                        </label>
                        <input
                          type="date"
                          value={feeSchedule[`${['first', 'second', 'third', 'fourth'][num-1]}InstallmentDate`]}
                          onChange={(e) => handleFeeChange(`${['first', 'second', 'third', 'fourth'][num-1]}InstallmentDate`, e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-xl">
                <h4 className="font-semibold text-yellow-800 mb-3">Identity Documents</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Aadhar Number
                    </label>
                    <input
                      type="text"
                      name="aadharNumber"
                      value={formData.aadharNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                      placeholder="XXXX XXXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      PAN Number
                    </label>
                    <input
                      type="text"
                      name="panNumber"
                      value={formData.panNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                      placeholder="ABCDE1234F"
                      style={{ textTransform: 'uppercase' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Passport Number
                    </label>
                    <input
                      type="text"
                      name="passportNumber"
                      value={formData.passportNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                      placeholder="PASSPORT NUMBER"
                      style={{ textTransform: 'uppercase' }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 5: Declaration & Submit */}
          {currentStep === 5 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-blue-50 p-4 rounded-xl mb-6">
                <h4 className="font-semibold text-blue-800">Declaration & Undertaking</h4>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h5 className="font-semibold text-red-800 mb-3">Important Rules & Regulations</h5>
                <ol className="list-decimal list-inside space-y-3 text-red-700">
                  <li>I have been informed that if my attendance is below 75% in theory lectures and 100% in practicals, I will be detained from appearing for the examination of the semester and will have to repeat the study in same year during the next year.</li>
                  <li>I will attend the class as to satisfy the requirement of attendance as per the Rule & Regulation of Savitribai Phule University of Pune; else will be eligible to be detained.</li>
                  <li>I have received list of documents to be submitted & fees schedule. I am aware that the documents are to be submitted before the deadline.</li>
                </ol>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h5 className="font-semibold text-yellow-800 mb-3">Fee Schedule Reminder</h5>
                <ul className="space-y-2 text-yellow-700">
                  <li>• Total Fees: Rs. {feeSchedule.totalFees || '_____'}</li>
                  <li>• Registration Fee: Rs. {feeSchedule.registrationFee || '_____'}</li>
                  <li>• First Installment: Rs. {feeSchedule.firstInstallment || '_____'} by {feeSchedule.firstInstallmentDate || '____/____/____'}</li>
                  <li>• Second Installment: Rs. {feeSchedule.secondInstallment || '_____'} by {feeSchedule.secondInstallmentDate || '____/____/____'}</li>
                  <li>• Third Installment: Rs. {feeSchedule.thirdInstallment || '_____'} by {feeSchedule.thirdInstallmentDate || '____/____/____'}</li>
                  <li>• Fourth Installment: Rs. {feeSchedule.fourthInstallment || '_____'} by {feeSchedule.fourthInstallmentDate || '____/____/____'}</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="declarationAccepted"
                    checked={formData.declarationAccepted}
                    onChange={(e) => setFormData(prev => ({ ...prev, declarationAccepted: e.target.checked }))}
                    required
                    className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700">
                    I hereby declare that the information provided in this application is true and correct to the best of my knowledge. I agree to abide by all the rules and regulations of the college and university.
                  </span>
                </label>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Place *
                  </label>
                  <input
                    type="text"
                    name="place"
                    value={formData.place}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 uppercase"
                    placeholder="PLACE"
                    style={{ textTransform: 'uppercase' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                    readOnly
                  />
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="font-medium text-gray-700 mb-2">Signature of Student</p>
                    <div className="border-b-2 border-gray-400 h-12"></div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 mb-2">Signature of Parent</p>
                    <div className="border-b-2 border-gray-400 h-12"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                Previous
              </button>
            )}
            {currentStep < 5 ? (
              <button
                type="button"
                onClick={nextStep}
                className="ml-auto px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting || !formData.declarationAccepted}
                className="ml-auto px-8 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            )}
          </div>

          <p className="text-xs text-gray-500 mt-4 text-center">
            * Incomplete form will be rejected * Please fill in CAPITAL LETTERS * Write name as per 12th Mark Sheet
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default function Admissions() {
  const [openSections, setOpenSections] = useState({
    admissionProcess: true,
    documentsRequired: false,
    feeStructure: false,
    scholarships: false,
    rules: false
  });

  const [showApplicationModal, setShowApplicationModal] = useState(false);

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleApplyNowClick = () => {
    setShowApplicationModal(true);
  };

  const handleCloseModal = () => {
    setShowApplicationModal(false);
  };

  const handleSubmitApplication = (formData) => {
    console.log('Application submitted:', formData);
    handleCloseModal();
  };

  const admissionCards = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Admissions Now Open",
      description: "Apply for UG & PG Programs in Arts, Commerce & Science for 2026-27 session",
      cta: "Apply Now",
      onClick: handleApplyNowClick,
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Download Prospectus",
      description: "Complete admission guide with fee structure & eligibility criteria",
      cta: "Download PDF",
      onClick: () => window.open('/assets/prospectus.pdf', '_blank'),
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Download Application Form",
      description: "Download the offline application form for manual submission",
      cta: "Download Form",
      onClick: () => window.open('/assets/application-form.pdf', '_blank'),
      color: "from-purple-500 to-purple-600"
    }
  ];

  const documentsList = [
    "Graduation/PG Certificate - 3 Attested Copies",
    "10th Std Mark Sheet - 3 Attested Copies",
    "12th Std Mark Sheet - 3 Attested Copies",
    "Leaving/Transfer Certificate - Original + 3 Attested Copies",
    "Migration Certificate - Original + 3 Attested Copies",
    "GAP Affidavit - Original + 3 Attested Copies",
    "4 Passport Size Photographs",
    "Caste Certificate & Income Proof - 2 Attested Copies",
    "Marriage/Name Change Certificate - 2 Attested Copies",
    "Aadhar Card - 1 Attested Copy"
  ];

  const feeSchedule = [
    { installment: "At Registration", amount: "Rs. _____", dueDate: "At the time of registration" },
    { installment: "First Installment", amount: "Rs. _____", dueDate: "___/___/___" },
    { installment: "Second Installment", amount: "Rs. _____", dueDate: "___/___/___" },
    { installment: "Third Installment", amount: "Rs. _____", dueDate: "___/___/___" },
    { installment: "Fourth Installment", amount: "Rs. _____", dueDate: "___/___/___" }
  ];

  const rulesRegulations = [
    {
      title: "Attendance Requirements",
      points: [
        "Minimum 75% attendance mandatory in theory lectures",
        "100% attendance required in practicals",
        "Failure to meet attendance requirements will result in detention from examinations",
        "Detained students must repeat the same year of study"
      ]
    },
    {
      title: "Document Submission",
      points: [
        "All documents must be submitted before the deadline",
        "Keep minimum 8-10 attested copies of mark sheets and certificates",
        "Self-attested copies will not be accepted",
        "Original documents required for verification"
      ]
    },
    {
      title: "Fee Payment Rules",
      points: [
        "Late fees will be charged if fees not paid as per schedule",
        "Fee payment schedule must be strictly followed",
        "Registration fee payable at the time of admission",
        "Installment dates must be adhered to"
      ]
    }
  ];

  return (
    <>
      {/* Application Form Modal */}
      <ApplicationFormModal 
        isOpen={showApplicationModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmitApplication}
        type="admission"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium">Savitribai Phule Pune University Affiliated</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Admissions 2026-27 at <span className="text-yellow-300">Jadhavar College</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Arts, Commerce & Science Programs - Start Your Academic Journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleApplyNowClick}
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Apply Now
              </button>
              <button 
                onClick={() => window.open('/assets/prospectus.pdf', '_blank')}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105"
              >
                Download Prospectus
              </button>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Quick Action Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {admissionCards.map((card, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${card.color} p-6 text-white`}>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold">{card.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{card.description}</p>
                  <button 
                    onClick={card.onClick}
                    className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    {card.cta}
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Instructions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-red-50 border-2 border-red-200 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
              <AlertCircle className="h-6 w-6" />
              Important Instructions
            </h2>
            <ul className="space-y-3 text-red-700">
              <li className="flex items-start gap-3">
                <span className="font-bold">1.</span>
                <span>To be filled by the applicant in his/her own handwriting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold">2.</span>
                <span>Please fill the form in CAPITAL LETTERS only</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold">3.</span>
                <span>Incomplete form will be rejected</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold">4.</span>
                <span>Write name as per 12th Mark Sheet</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div 
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => toggleSection('documentsRequired')}
            >
              <div className="p-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Documents to be Submitted</h3>
                </div>
                {openSections.documentsRequired ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              </div>
              
              {openSections.documentsRequired && (
                <div className="px-6 pb-6">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                    <p className="text-yellow-800 text-sm">
                      <strong>Note:</strong> Please keep minimum 8-10 attested copies of mark sheets and certificates before submitting them to the admin office.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {documentsList.map((doc, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Fee Schedule Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div 
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => toggleSection('feeStructure')}
            >
              <div className="p-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Fee Payment Schedule</h3>
                </div>
                {openSections.feeStructure ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              </div>
              
              {openSections.feeStructure && (
                <div className="px-6 pb-6">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                    <p className="text-green-800 text-sm">
                      <strong>Note:</strong> Late Fees will be charged if the fees are not paid as per the given schedule.
                    </p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        <tr>
                          <th className="px-6 py-4 text-left">Installment</th>
                          <th className="px-6 py-4 text-left">Amount</th>
                          <th className="px-6 py-4 text-left">Due Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {feeSchedule.map((fee, i) => (
                          <tr key={i} className="border-b">
                            <td className="px-6 py-4 font-medium">{fee.installment}</td>
                            <td className="px-6 py-4">{fee.amount}</td>
                            <td className="px-6 py-4">{fee.dueDate}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Regulations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div 
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => toggleSection('rules')}
            >
              <div className="p-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Rules & Regulations</h3>
                </div>
                {openSections.rules ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              </div>
              
              {openSections.rules && (
                <div className="px-6 pb-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    {rulesRegulations.map((rule, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <Bookmark className="h-5 w-5 text-blue-600" />
                          {rule.title}
                        </h4>
                        <ul className="space-y-2">
                          {rule.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <span className="text-blue-600 font-bold">•</span>
                              <span className="text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-6">
                    <p className="text-red-800 text-center font-medium">
                      I have been informed that if my attendance is below 75% in theory lectures and 100% in practicals, 
                      I will be detained from appearing for the examination and will have to repeat the study in same year.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Begin Your Academic Journey with Us
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join Jadhavar College for Excellence in Arts, Commerce & Science Education
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={handleApplyNowClick}
                className="bg-white text-blue-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Apply Now
              </button>
              <button 
                onClick={() => window.open('/assets/prospectus.pdf', '_blank')}
                className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105"
              >
                Download Prospectus
              </button>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
              <div className="flex items-center gap-4">
                <Phone className="h-8 w-8 text-yellow-300" />
                <div>
                  <h4 className="font-semibold">Admission Helpline</h4>
                  <p className="text-blue-100">+91-02025-XXXXX</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-8 w-8 text-yellow-300" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-blue-100">admissions@jadhavar.edu.in</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-8 w-8 text-yellow-300" />
                <div>
                  <h4 className="font-semibold">Office Hours</h4>
                  <p className="text-blue-100">Mon-Sat: 9:30 AM - 5:30 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}