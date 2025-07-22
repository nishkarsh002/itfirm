import React, { useState } from "react";

export default function CareerForm({ isOpen, onClose, role }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    file: null,
    message: "",
  });

  const handleChange = (e) => {
  const { name, value, files } = e.target;
  if (name === "file") {
    setFormData((prev) => ({ ...prev, file: files[0] }));
  } else {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();

     const payload = new FormData();
  payload.append("name", formData.name);
  payload.append("email", formData.email);
  payload.append("number", formData.number);
  payload.append("message", formData.message);
  payload.append("role", role?.title);
  payload.append("file", formData.file);

    try {
      const res = await fetch("https://itfirm-8uc6.onrender.com/send-email", {
        method: "POST",
        body: payload, 
      });

      const data = await res.json();
      if (data.success) {
        alert("Application sent successfully!");
        onClose();
      } else {
        alert("Failed to send application.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred.");
    }
  };


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white w-[90%] max-w-lg p-6 rounded-xl shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-gray-600 hover:text-black"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4">
          Apply for: {role?.title}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="number"
            name="number"
            placeholder="Your Number"
            value={formData.number}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="file"
            name="file"
            placeholder="Your resume's drive link"
            // value={formData.file}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <div className="flex flex-col">
            <label className="py-2 rounded font-semibold">Why you're a good fit:</label>
            <textarea
              name="message"
              placeholder="Describe Yourself"
              value={formData.message}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>

      </div>
    </div>
  );
}
