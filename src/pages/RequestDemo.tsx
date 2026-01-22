import { useState } from 'react';
import SuccessState from '../components/demo/SuccessState';
import DemoForm from '../components/demo/DemoForm';
import DemoSidebar from '../components/demo/DemoSidebar';
import GlowBackground from '../components/GlowBackground';

const RequestDemo = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo request submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <SuccessState onReset={() => setIsSubmitted(false)} />;
  }

  return (
    <div className="relative w-full overflow-x-hidden pt-20">
      {/* Dark Hero Section */}
      <section className="relative py-32 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0">
          <GlowBackground />
          <div className="absolute inset-0 bg-grid-dark opacity-20" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-900 border border-white/5 text-slate-400 text-xs font-bold mb-10 tracking-wide">
            Enterprise demo request
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tight leading-[0.9]">
            Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-slate-500 italic font-light">future</span>
          </h1>
          <p className="text-xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto tracking-wide">
            See our solutions in action. Schedule a personalized walkthrough of your next institutional digital architecture.
          </p>
        </div>
      </section>

      {/* Light Form Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <GlowBackground variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 items-start">
            <div className="lg:col-span-2">
              <DemoForm
                formData={formData}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            </div>
            <div className="lg:col-span-1">
              <DemoSidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestDemo;