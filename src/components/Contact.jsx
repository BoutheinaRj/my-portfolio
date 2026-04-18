import React, { useState } from 'react';
import { Send, Mail, User, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_813peei',
      'template_ymvkc67',
      formData,
      'kB3NxMzZxwXIQ6CIY'
    ).then(
      () => {
        alert('Your message has been sent successfully!');
        setFormData({ name: '', surname: '', email: '', subject: '', message: '' });
      },
      () => alert('Oops! Something went wrong.')
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden pt-20 pb-14 px-4 bg-gradient-to-br from-blue-300 via-blue-100 to-blue-100">
      
      {/* Particules */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-24 w-80 h-80 bg-cyan-200/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1
            className="text-5xl md:text-6xl text-slate-900 font-extrabold mb-4 tracking-tight"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Contact Me
          </h1>
          <p className="text-slate-600 mt-4 text-lg md:text-xl leading-relaxed">
            Have a project idea, question, or just want to connect? <br />
            I’d love to hear from you!
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-10
                     shadow-[0_20px_60px_rgba(15,23,42,0.12)]
                     space-y-6 border border-white"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* First Name */}
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <input
                type="text"
                name="name"
                placeholder="First Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-4
                           bg-slate-50 border border-slate-200
                           rounded-2xl text-slate-800 placeholder-slate-400
                           focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
              />
            </div>

            {/* Last Name */}
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <input
                type="text"
                name="surname"
                placeholder="Last Name"
                value={formData.surname}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-4
                           bg-slate-50 border border-slate-200
                           rounded-2xl text-slate-800 placeholder-slate-400
                           focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-4
                         bg-slate-50 border border-slate-200
                         rounded-2xl text-slate-800 placeholder-slate-400
                         focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
            />
          </div>

          {/* Subject */}
          <div className="relative group">
            <MessageCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-4
                         bg-slate-50 border border-slate-200
                         rounded-2xl text-slate-800 placeholder-slate-400
                         focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
            />
          </div>

          {/* Message */}
          <div className="relative group">
            <MessageCircle className="absolute left-4 top-4 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
            <textarea
              name="message"
              placeholder="Your message..."
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-4
                         bg-slate-50 border border-slate-200
                         rounded-2xl text-slate-800 placeholder-slate-400
                         focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
                         transition resize-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full md:w-auto mx-auto flex items-center justify-center gap-3
                       bg-gradient-to-r from-slate-900 to-blue-700
                       hover:from-slate-800 hover:to-blue-600
                       text-white font-semibold py-4 px-8
                       rounded-2xl shadow-lg
                       transform hover:scale-105 transition-all"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
}

export default Contact;
