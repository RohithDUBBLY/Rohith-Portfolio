import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";  // for redirect

const domains = [
  { name: "Blockchain", image: "https://cdn-icons-png.flaticon.com/512/5995/5995357.png" },
  { name: "RPA UiPath", image: "https://cdn-icons-png.flaticon.com/512/1828/1828490.png" },
  { name: "Web Dev", image: "https://cdn-icons-png.flaticon.com/512/919/919827.png" },
  { name: "App Dev", image: "https://cdn-icons-png.flaticon.com/512/906/906324.png" }
];

export default function Freelance() {
  const [domain, setDomain] = useState(null);
  const [form, setForm] = useState({ name: "", contact: "", description: "" });
  const [status, setStatus] = useState("");
  const formRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_zcae0ev",    // replace with your EmailJS Service ID
        "template_hglqv5t",   // replace with your EmailJS Template ID
        {
          name: form.name,
          email: form.contact,        // if you want contact as email use here
          message: `Domain: ${domain}\nDescription: ${form.description}`,
        },
        "_6lU5IstjPMaHUlVq"     // replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("✅ Message sent:", result.text);
          setStatus("✅ Submitted!");
          setForm({ name: "", contact: "", description: "" });

          // Redirect to home after 2 sec
          setTimeout(() => {
            navigate("/");
          }, 2000);
        },
        (error) => {
          console.error("❌ Error:", error.text);
          setStatus("❌ Failed to send. Try again.");
        }
      );
  };

  return (
    <div className="p-10 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">I am open to Freelance Projects</h2>
      <p className="text-gray-300 mb-6">Choose your domain and submit your project details</p>

      {!domain ? (
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {domains.map((d) => (
            <motion.div
              key={d.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDomain(d.name)}
              className="cursor-pointer bg-gray-800 p-4 rounded shadow"
            >
              <img src={d.image} alt={d.name} className="w-16 h-16 mx-auto mb-2" />
              <p>{d.name}</p>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-4 mt-6 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h3 className="text-xl mb-2">Selected Domain: <strong>{domain}</strong></h3>
          <input
            className="w-full p-2 rounded bg-gray-800 text-white"
            placeholder="Client Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            className="w-full p-2 rounded bg-gray-800 text-white"
            placeholder="Contact Email / Number"
            value={form.contact}
            onChange={(e) => setForm({ ...form, contact: e.target.value })}
            required
          />
          <textarea
            className="w-full p-2 rounded bg-gray-800 text-white"
            placeholder="Project Description"
            rows={4}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />
          <div className="flex gap-4">
            <button type="submit" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
              Submit Project
            </button>
            <button type="button" onClick={() => setDomain(null)} className="text-sm underline text-red-400">
              Back to domain selection
            </button>
          </div>
          {status && <p className="mt-3">{status}</p>}
        </motion.form>
      )}
    </div>
  );
}
