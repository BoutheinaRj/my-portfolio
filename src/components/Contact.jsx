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
    setFormData({...formData, [e.target.name]: e.target.value});
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
        setFormData({name:'', surname:'', email:'', subject:'', message:''});
      },
      () => alert('Oops! Something went wrong.')
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-200 to-white relative overflow-hidden pt-16 pb-10 px-4"> {/* Particules et effets de fond */} <div className="absolute inset-0 overflow-hidden pointer-events-none"> <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-70"></div> <div className="absolute top-32 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div> <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div> <div className="absolute top-1/2 right-16 w-1 h-1 bg-cyan-300 rounded-full animate-ping"></div> <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div> </div>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl text-blue-950 font-extrabold mb-4" style={{ fontFamily: "'Jost', sans-serif" }}>
            Contact Me
          </h1>
          <p className="text-blue-950 mt-2">
            Have a project idea, question, or just want to connect? <br/>
            I’d love to hear from you!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white-700 rounded-3xl p-8 md:p-12 shadow-lg space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-cyan-400 transition-colors"/>
              <input
                type="text" name="name" placeholder="First Name"
                value={formData.name} onChange={handleChange}
                className="w-full pl-12 pr-4 py-4 bg-white-700 border border-blue-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
                required
              />
            </div>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-cyan-400 transition-colors"/>
              <input
                type="text" name="surname" placeholder="Last Name"
                value={formData.surname} onChange={handleChange}
                className="w-full pl-12 pr-4 py-4 bg-white-700 border border-blue-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
                required
              />
            </div>
          </div>

          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-cyan-400 transition-colors"/>
            <input
              type="email" name="email" placeholder="Email Address"
              value={formData.email} onChange={handleChange}
              className="w-full pl-12 pr-4 py-4 bg-white-700 border border-blue-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
              required
            />
          </div>

          <div className="relative group">
            <MessageCircle className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-cyan-400 transition-colors"/>
            <input
              type="text" name="subject" placeholder="Subject"
              value={formData.subject} onChange={handleChange}
              className="w-full pl-12 pr-4 py-4 bg-white-700 border border-blue-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
              required
            />
          </div>

          <div className="relative group">
            <MessageCircle className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-cyan-400 transition-colors"/>
            <textarea
              name="message" placeholder="Your message..." rows="6"
              value={formData.message} onChange={handleChange}
              className="w-full pl-12 pr-4 py-4 bg-white-700 border border-blue-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto mx-auto flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            <Send className="w-5 h-5"/>
            Send Message
          </button>
        </form>

       
      </div>
    </div>
  );
}

export default Contact;
