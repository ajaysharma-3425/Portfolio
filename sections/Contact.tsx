"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 max-w-xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-10 text-center">Contact Me</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          required
          placeholder="Name"
          className="w-full p-3 bg-black border border-white/20 rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          required
          type="email"
          placeholder="Email"
          className="w-full p-3 bg-black border border-white/20 rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          required
          placeholder="Message"
          className="w-full p-3 bg-black border border-white/20 rounded"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button className="bg-white text-black px-6 py-3 rounded w-full">
          Send Message
        </button>
      </form>
    </section>
  );
}
