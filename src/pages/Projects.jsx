export default function Projects() {
  const projects = [
    {
      title: "Payroll Automation with UiPath RPA",
      desc: "Automated salary processing using UiPath Apps and Python engine. Integrated with Firebase for secure data handling.",
      tech: ["UiPath", "Python", "Firebase"],
      img: "/projects/payroll.png",
    },
    {
      title: "IoT Waste Segregation System",
      desc: "Smart IoT system using Arduino and sensors to classify waste. Designed for real-time automation in smart cities.",
      tech: ["Arduino", "Sensors", "IoT"],
      img: "/projects/iot.png",
    },
    {
      title: "MedVaultX – Blockchain Health Records",
      desc: "Decentralized healthcare system using Solidity, React, and IPFS. Enables secure and private access to medical data.",
      tech: ["React", "Solidity", "Blockchain", "IPFS"],
      img: "/projects/medvaultx.png",
    }
  ];

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-5 rounded-lg shadow hover:scale-105 transition"
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="h-32 w-full object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-sm text-gray-300 mb-3">{proj.desc}</p>
            <div className="flex gap-2 flex-wrap text-xs">
              {proj.tech.map((t, i) => (
                <span key={i} className="bg-blue-700 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
