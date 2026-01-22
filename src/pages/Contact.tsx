import { useState } from 'react';
import { MapPin, Phone, Envelope, Clock, PaperPlaneRight, CheckCircle } from '@phosphor-icons/react';
import GlowBackground from '../components/GlowBackground';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="relative w-full overflow-x-hidden pt-20">
      {/* Dark Hero Section */}
      <section className="relative py-40 bg-slate-950 overflow-hidden">
        {/* Ambient background effects */}
        <div className="absolute inset-0">
          <GlowBackground />
          <div className="absolute inset-0 bg-grid-dark opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-green-500/5 to-transparent blur-[120px]" />
        </div>

        {/* Floating background elements */}
        <div className="absolute top-20 right-[10%] w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-float opacity-50" />
        <div className="absolute bottom-20 left-[10%] w-48 h-48 bg-green-500/10 rounded-full blur-3xl animate-float-delayed opacity-50" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white font-black text-[10px] uppercase tracking-[0.4em] mb-12 backdrop-blur-xl">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
            Global Response Network
          </div>

          <h1 className="text-7xl md:text-9xl font-black text-white mb-12 tracking-tight leading-[0.85]">
            Initiate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-green-400 to-slate-500 animate-gradient-x italic font-light">contact</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-3xl mx-auto tracking-wide mb-12">
            Establish a high-bandwidth connection with our institutional architecture team. We are ready to deploy your next-generation digital infrastructure.
          </p>

          <div className="flex justify-center gap-12 text-white/20">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent self-center" />
            <div className="text-[10px] font-black tracking-[0.5em] uppercase">Status: Awaiting Signal</div>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent self-center" />
          </div>
        </div>
      </section>

      {/* Light Contact Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <GlowBackground variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            {/* Contact Info */}
            <div className="space-y-16">
              <div>
                <h2 className="text-4xl font-black text-slate-950 mb-8 tracking-tight">Institutional support</h2>
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                  Our specialists are available for technical consultation and bespoke enterprise architecture planning.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-10">
                {[
                  { icon: MapPin, title: "Our Office", detail: "St. George's House, Parliament Road, 1st Floor Room 104, Nairobi, Kenya", color: "text-blue-600", bg: "bg-blue-50" },
                  { icon: Phone, title: "Call Us", detail: "0700594586", color: "text-emerald-600", bg: "bg-emerald-50" },
                  { icon: Envelope, title: "Email", detail: "automations@figbudglobal.online", color: "text-purple-600", bg: "bg-purple-50" },
                  { icon: Clock, title: "Hours", detail: "Monday - Friday: 8AM - 6PM Saturday: 9AM - 1PM", color: "text-orange-600", bg: "bg-orange-50" }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg} mb-6 border border-slate-100 group-hover:scale-110 transition-transform`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} weight="fill" />
                    </div>
                    <h3 className="text-lg font-black text-slate-950 mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Card */}
            <div className="relative group">
              {/* Decorative backgrounds */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative bg-white p-10 lg:p-12 rounded-[5px] border border-slate-200 shadow-xl transition-all duration-700 overflow-hidden">
                {/* Internal Glow on hover */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                <div className="relative z-10">
                  <h2 className="text-2xl font-black text-slate-950 mb-10 tracking-tight">Send us a message</h2>
                  {isSubmitted ? (
                    <div className="text-center py-20 animate-in fade-in zoom-in duration-700">
                      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-500/20">
                        <CheckCircle weight="fill" className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                      <p className="text-slate-500">
                        Thank you for reaching out. We've received your inquiry and will get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-10 text-green-600 font-bold text-sm uppercase tracking-widest hover:text-green-700 transition-colors"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="group/field relative">
                        <div className="text-[10px] font-light text-slate-500 uppercase tracking-widest mb-3 px-1 group-focus-within/field:text-green-600 transition-colors">Full Name</div>
                        <input
                          type="text" name="name" required placeholder="Enter your full name"
                          className="w-full bg-transparent border border-slate-200 p-4 rounded-[5px] text-slate-950 font-light placeholder:text-slate-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="group/field relative">
                        <div className="text-[10px] font-light text-slate-500 uppercase tracking-widest mb-3 px-1 group-focus-within/field:text-green-600 transition-colors">Email Address</div>
                        <input
                          type="email" name="email" required placeholder="email@example.com"
                          className="w-full bg-transparent border border-slate-200 p-4 rounded-[5px] text-slate-950 font-light placeholder:text-slate-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="group/field relative">
                        <div className="text-[10px] font-light text-slate-500 uppercase tracking-widest mb-3 px-1 group-focus-within/field:text-green-600 transition-colors">Message</div>
                        <textarea
                          name="message" required rows={4} placeholder="How can we help you?"
                          className="w-full bg-transparent border border-slate-200 p-4 rounded-[5px] text-slate-950 font-light placeholder:text-slate-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300 resize-none"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="pt-4">
                        <button className="relative w-full overflow-hidden rounded-[5px] bg-slate-950 hover:bg-green-600 text-white transition-colors duration-300 py-5">
                          <span className="relative z-10 flex items-center justify-center gap-3 font-black text-xs tracking-widest uppercase">
                            Send Message <PaperPlaneRight weight="fill" className="w-4 h-4" />
                          </span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark FAQ Section */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Technical queries</h2>
            <p className="text-xl text-slate-500 font-light">Frictionless deployment insights</p>
          </div>

          <div className="space-y-6">
            {[
              { q: "How long does it take to implement a solution?", a: "Implementation time varies by solution complexity. Simple systems can be deployed in 2-4 weeks, while comprehensive enterprise solutions may take 8-12 weeks." },
              { q: "Do you provide training and ongoing support?", a: "Yes! We provide comprehensive training for your team and offer 24/7 technical support. Our support packages include system maintenance and updates." },
              { q: "Can you integrate with our existing systems?", a: "Absolutely. Our solutions are designed for seamless integration with existing business systems via custom API bridges." }
            ].map((faq, i) => (
              <div key={i} className="group bg-slate-900/40 p-8 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all duration-500">
                <h3 className="text-xl font-black text-white mb-4 tracking-tight group-hover:text-green-400 transition-colors">{faq.q}</h3>
                <p className="text-slate-500 font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;