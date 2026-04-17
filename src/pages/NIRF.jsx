import { motion } from 'framer-motion';

const NIRF = () => {
  const rankings = [
    { year: 2024, rank: 125, category: 'Overall' },
    { year: 2023, rank: 132, category: 'Overall' },
    { year: 2022, rank: 145, category: 'Overall' },
  ];

  const parameters = [
    { name: 'Teaching, Learning & Resources', weight: 30, score: 85 },
    { name: 'Research and Professional Practice', weight: 30, score: 78 },
    { name: 'Graduation Outcomes', weight: 20, score: 88 },
    { name: 'Outreach and Inclusivity', weight: 10, score: 82 },
    { name: 'Perception', weight: 10, score: 75 },
  ];

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
            NIRF Ranking
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center mt-4 text-blue-100"
          >
            National Institutional Ranking Framework
          </motion.p>
        </div>
      </section>

      {/* Current Ranking */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">NIRF Ranking 2024</h2>
            <div className="text-7xl font-bold text-primary mb-4">#125</div>
            <p className="text-xl text-gray-700 mb-6">Overall Category</p>
            <p className="text-gray-600">Among Top Colleges in India</p>
          </motion.div>
        </div>
      </section>

      {/* Ranking History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ranking History</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {rankings.map((ranking, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-secondary p-6 rounded-lg shadow-md flex items-center justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold">NIRF {ranking.year}</h3>
                  <p className="text-gray-600">{ranking.category} Category</p>
                </div>
                <div className="text-4xl font-bold text-primary">#{ranking.rank}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parameters */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">NIRF Parameters</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {parameters.map((param, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold">{param.name}</h3>
                  <div className="text-right">
                    <span className="text-primary font-bold">{param.score}%</span>
                    <span className="text-gray-500 text-sm ml-2">(Weight: {param.weight}%)</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${param.score}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="bg-primary h-4 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">NIRF Reports</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[2024, 2023, 2022].map((year) => (
              <motion.button
                key={year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="w-full bg-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition flex items-center justify-between"
              >
                <span className="font-semibold">NIRF Data Submission {year}</span>
                <span className="text-primary">📥 Download PDF</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NIRF;

