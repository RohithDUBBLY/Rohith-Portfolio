import { PROFILE_IMG, RESUME_URL } from '../firebase-config'

export default function About() {
  return (
    <div className="p-10 max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <img src={PROFILE_IMG} alt="Profile" className="rounded-xl shadow-lg w-full h-auto" />
      <div>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300 mb-3">
          I'm an ECE student passionate about Blockchain, RPA, IoT, and full-stack development.
          I've built over 30+ projects including automation bots, smart hardware, and dApps.
        </p>
        <ul className="text-sm text-gray-400 mb-3 list-disc list-inside">
          <li>🎓 B.E. ECE @ KGiSL Institute of Technology (CGPA: 7.2)</li>
          <li>🏆 75+ Hackathons | 20 Wins | 25+ Runner-up</li>
          <li>🧠 Tools: UiPath, React, Solidity, Firebase</li>
          <li>📜 Certified in RPA, C, Python (SkillRack)</li>
        </ul>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-green-600 px-4 py-2 rounded hover:bg-green-700"
        >
          View Full Resume
        </a>
      </div>
    </div>
  )
}
