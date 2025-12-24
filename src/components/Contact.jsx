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
    <div className="min-h-screen bg-blue-100 relative overflow-hidden pt-16 pb-10 px-4">
      
      {/* Particules */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-70"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-16 w-1 h-1 bg-cyan-300 rounded-full animate-ping"></div>
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-6xl md:text-6xl text-blue-950 font-extrabold mb-4"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Contact Me
          </h1>
          <p className="text-blue-950 mt-4 text-lg md:text-xl">
            Have a project idea, question, or just want to connect? <br />
            I’d love to hear from you!
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-blue-900/30 backdrop-blur-xl rounded-3xl p-8 md:p-12
                     shadow-2xl shadow-[0_0_40px_rgba(56,189,248,0.15)]
                     space-y-6 border border-blue-950"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* First Name */}
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300 group-focus-within:text-cyan-400 transition-colors" />
              <input
                type="text"
                name="name"
                placeholder="First Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-4
                           bg-blue-950 border border-blue-500
                           rounded-2xl text-white placeholder-blue-300
                           focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
              />
            </div>

            {/* Last Name */}
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300 group-focus-within:text-cyan-400 transition-colors" />
              <input
                type="text"
                name="surname"
                placeholder="Last Name"
                value={formData.surname}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-4
                           bg-blue-950 border border-blue-500
                           rounded-2xl text-white placeholder-blue-300
                           focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300 group-focus-within:text-cyan-400 transition-colors" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-4
                         bg-blue-950 border border-blue-500
                         rounded-2xl text-white placeholder-blue-300
                         focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
            />
          </div>

          {/* Subject */}
          <div className="relative group">
            <MessageCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300 group-focus-within:text-cyan-400 transition-colors" />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-4
                         bg-blue-950 border border-blue-500
                         rounded-2xl text-white placeholder-blue-300
                         focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
            />
          </div>

          {/* Message */}
          <div className="relative group">
            <MessageCircle className="absolute left-4 top-4 w-5 h-5 text-blue-300 group-focus-within:text-cyan-400 transition-colors" />
            <textarea
              name="message"
              placeholder="Your message..."
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-4
                         bg-blue-950 border border-blue-500
                         rounded-2xl text-white placeholder-blue-300
                         focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400
                         transition resize-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full md:w-auto mx-auto flex items-center justify-center gap-3
                       bg-gradient-to-r from-blue-800 to-blue-600
                       hover:from-blue-800 hover:to-cyan-400
                       text-white font-semibold py-4 px-8
                       rounded-2xl shadow-xl
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
