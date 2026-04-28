import { motion } from "motion/react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
 const formDatas = new FormData();
    formDatas.append("name", formData.name);
    formDatas.append("email", formData.email);
    formDatas.append("subject", formData.subject);
    formDatas.append("message", formData.message);
    formDatas.append("access_key", "21421d62-bb72-4877-8951-636dfc04d3a3");
       const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDatas,
    });
    if(response.ok){
      setIsSubmitting(false);
    setSubmitted(true); 
    } else {
      console.error("Form submission failed");
    }
    
    
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative min-h-screen bg-[#121212] py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl text-white/90 mb-6 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-3xl text-white/90 mb-8 tracking-tight">
                Get in Touch
              </h3>
              <p className="text-white/60 leading-relaxed mb-12">
                Whether you're looking for a vocalist for your next project, need production expertise, or want to discuss a live performance, I'm here to make it happen.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "hello@arianova.com",
                  href: "mailto:hello@arianova.com",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+1 (555) 123-4567",
                  href: "tel:+15551234567",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Los Angeles, CA",
                  href: null,
                },
              ].map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors duration-300">
                    <contact.icon className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <div className="text-white/40 text-sm mb-1">{contact.label}</div>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-white/80 hover:text-white transition-colors duration-300"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <div className="text-white/80">{contact.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl bg-green-500/10 border border-green-500/20"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-300 text-sm tracking-wide">
                Available for Projects
              </span>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white/60 text-sm tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-white/30 focus:outline-none transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-white/60 text-sm tracking-wide">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-white/30 focus:outline-none transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-white/60 text-sm tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-white/30 focus:outline-none transition-colors duration-300"
                  placeholder="Collaboration Opportunity"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-white/60 text-sm tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-white/30 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || submitted}
                className="group relative w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative px-8 py-5 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-xl border border-white/20 overflow-hidden">
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30"
                    initial={{ x: "-100%" }}
                    animate={isSubmitting ? { x: ["0%", "100%"] } : {}}
                    transition={{
                      duration: 1,
                      repeat: isSubmitting ? Infinity : 0,
                    }}
                  />

                  {/* Button Content */}
                  <div className="relative flex items-center justify-center gap-3">
                    {submitted ? (
                      <span className="text-white tracking-[0.1em] uppercase">
                        Message Sent! ✓
                      </span>
                    ) : isSubmitting ? (
                      <span className="text-white tracking-[0.1em] uppercase">
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send className="w-5 h-5 text-white" />
                        <span className="text-white tracking-[0.1em] uppercase">
                          Send Message
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
