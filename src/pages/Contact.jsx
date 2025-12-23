import { useState } from "react";
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.send(
      'service_zcae0ev',
      'template_hglqv5t',
      formData,
      '_6lU5IstjPMaHUlVq'
    ).then(
      (result) => {
        console.log(result.text);
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.error(error.text);
        setStatus("❌ Failed to send message.");
      }
    );
  };

  return (
    <div className="p-10 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-2 rounded bg-gray-800 text-white"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-2 rounded bg-gray-800 text-white"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-2 rounded bg-gray-800 text-white"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
          Send
        </button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}
