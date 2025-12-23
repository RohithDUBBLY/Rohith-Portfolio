import { RESUME_URL } from '../firebase-config'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="p-10 flex flex-col items-center justify-center text-center min-h-[80vh]">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Rohith R
      </motion.h1>
      <motion.p
        className="text-xl text-gray-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        I build Blockchain apps, automate with RPA, and create digital solutions.
      </motion.p>
      <motion.a
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Download Resume
      </motion.a>
    </div>
  )
}
