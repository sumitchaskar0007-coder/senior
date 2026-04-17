import { motion } from 'framer-motion';

const Administration = () => {
  const managementCommittee = [
    { name: 'Krishiratna Anil G. Meher', position: 'Chairman', initials: 'AGM' },
    { name: 'Dr. Anand Kulkarni', position: 'Principal', initials: 'AK' },
    { name: 'Vice Principal', position: 'Vice Principal', initials: 'VP' },
  ];

  const administrativeStaff = [
    { name: 'Staff Member 1', position: 'Administrative Officer', initials: 'SM1' },
    { name: 'Staff Member 2', position: 'Accountant', initials: 'SM2' },
    { name: 'Staff Member 3', position: 'Office Superintendent', initials: 'SM3' },
  ];

  const milestones = [
    { year: '1944', event: 'Gramonnati Mandal established' },
    { year: '1950', event: 'College foundation laid' },
    { year: '2000', event: 'Renamed to Dr. Sudhakarrao Jadhavar College' },
    { year: '2010', event: 'NAAC Accreditation received' },
    { year: '2020', event: 'AICTE Approval obtained' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center"
          >
            Administration
          </motion.h1>
        </div>
      </section>

      {/* Management Committee */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Management Committee</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {managementCommittee.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition"
              >
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Administrative Staff */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Administrative Staff</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {administrativeStaff.map((staff, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {staff.initials}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">{staff.name}</h3>
                <p className="text-gray-600 text-center">{staff.position}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Institutional Milestones</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-primary"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10 flex-shrink-0">
                    {milestone.year}
                  </div>
                  <div className={`flex-1 ${index % 2 === 0 ? 'ml-6 md:mr-6' : 'mr-6 md:ml-6'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <p className="text-lg font-semibold">{milestone.event}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Organogram Download */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Organizational Structure</h2>
            <p className="text-gray-600 mb-6">
              Download our organizational chart to understand the administrative structure of the college.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition shadow-lg">
              Download Organogram PDF
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Administration;

