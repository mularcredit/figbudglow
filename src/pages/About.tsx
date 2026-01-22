import { Target, Eye, Medal, Users, Lightbulb, Shield } from '@phosphor-icons/react';
import GlowBackground from '../components/GlowBackground';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Empowering businesses through innovative software solutions and automation expertise.'
    },
    {
      icon: Eye,
      title: 'Visionary',
      description: 'Leading digital transformation across Kenya with integrated enterprise systems.'
    },
    {
      icon: Medal,
      title: 'Excellence',
      description: 'Delivering high-quality, scalable solutions that exceed client expectations.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Building lasting partnerships through personalized service and ongoing support.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously evolving our technology to meet emerging business needs.'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Providing secure, dependable systems with 99% uptime guarantee.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white border-b border-slate-100 relative overflow-hidden">
        <GlowBackground variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-6">
              Who We Are
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              About Figbud Global
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Located at St. George's House, Parliament Road, 1st Floor Room 104, we are Kenya's
              leading provider of integrated enterprise software solutions, specializing
              in automation and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 relative z-10 overflow-hidden">
        <GlowBackground variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] border border-slate-300 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:border-green-500/20 transition-all duration-300">
              <div className="inline-flex p-4 rounded-2xl mb-8 bg-blue-50 text-blue-500">
                <Target className="h-8 w-8" weight="light" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                To empower businesses across Kenya and beyond with comprehensive software
                solutions that streamline operations, enhance productivity, and drive sustainable
                growth through innovative technology and expert consulting services.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] border border-slate-300 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:border-green-500/20 transition-all duration-300">
              <div className="inline-flex p-4 rounded-2xl mb-8 bg-green-50 text-green-500">
                <Eye className="h-8 w-8" weight="light" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                To become the leading provider of integrated enterprise solutions in East
                Africa, recognized for our automation expertise, seamless API integrations,
                and commitment to transforming how businesses operate in the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - Clean Grid */}
      <section className="py-24 bg-rainbow-light border-y border-slate-100 relative overflow-hidden">
        <GlowBackground variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our approach to
              serving our clients and building lasting relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-green-500/20 hover:-translate-y-1 transition-all duration-500 group ring-1 ring-black/[0.03]"
              >
                <value.icon className="h-16 w-16 text-slate-400 mb-8 p-4 bg-slate-50 rounded-2xl group-hover:text-green-500 group-hover:bg-green-50 group-hover:scale-110 transition-all duration-500 shadow-inner" weight="light" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-green-600 transition-colors uppercase">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Compliance Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <GlowBackground variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-20">
            <div className="text-[10px] font-black text-green-500 uppercase tracking-[0.3em] mb-4">Governance</div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-6 tracking-tight">Institutional compliance</h2>
            <p className="text-xl text-slate-500 font-light max-w-2xl">Rigorous adherence to Kenyan and global enterprise standards to ensure operational integrity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Data Sovereignty",
                obligation: "Adherence to the Kenya Data Protection Act (2019) and ODPC regulations.",
                adherence: "End-to-end AES-256 encryption at rest and TLS 1.3 in transit. Data processing is confined to secure, sovereign-aligned cloud environments."
              },
              {
                title: "Statutory Reporting",
                obligation: "Alignment with KRA iTax, NSSF Act 2013, and NHIF (SHIF) transition protocols.",
                adherence: "Automated real-time calculation engines validated against current KRA P10 scales and NSSF Tier I/II contribution ceilings."
              },
              {
                title: "Financial Security",
                obligation: "Safaricom M-Pesa B2C/C2B security standards and CBK digital provider guidelines.",
                adherence: "Hardened API gateways with certificate pinning, OAuth 2.0 authentication, and automated audit trails for every transaction."
              },
              {
                title: "Information Governance",
                obligation: "SOC-2 aligned internal control frameworks and ISO 27001 mapping.",
                adherence: "Mandatory Multi-Factor Authentication (MFA), role-based access control (RBAC), and continuous vulnerability monitoring."
              }
            ].map((item, idx) => (
              <div key={idx} className="group p-10 bg-slate-50 border border-slate-200 rounded-[2rem] hover:bg-white hover:border-green-500/30 hover:shadow-2xl transition-all duration-700">
                <h3 className="text-2xl font-black text-slate-950 mb-8 tracking-tight">{item.title}</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Compliance Obligation</div>
                    <p className="text-sm text-slate-600 font-light leading-relaxed">{item.obligation}</p>
                  </div>
                  <div className="pt-6 border-t border-slate-200/50">
                    <div className="text-[10px] font-black text-green-500 uppercase tracking-widest mb-2">Institutional Adherence</div>
                    <p className="text-sm text-slate-700 font-medium leading-relaxed">{item.adherence}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart - Dark Section for Contrast */}
      <section className="py-32 bg-slate-950 text-white relative z-10 rounded-t-[3rem] -mt-12 mx-2 md:mx-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-900 to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our unique approach to enterprise software development makes us the preferred partner.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-12">
              {[
                { title: "Integrated Ecosystem Approach", icon: Shield, desc: "We provide comprehensive systems that work together seamlessly, eliminating data silos.", color: "bg-green-500" },
                { title: "Automation Expertise", icon: Lightbulb, desc: "Deep expertise in workflow automation and API integrations to reduce manual processes.", color: "bg-blue-500" },
                { title: "Local Market Understanding", icon: Target, desc: "Native integrations for M-Pesa, KRA, NSSF, and NHIF specifically for Kenyan business.", color: "bg-purple-500" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.color} bg-opacity-20 text-white border border-white/10`}>
                    <item.icon className="h-6 w-6" weight="light" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-900/60 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-8">Why Choose Figbud Global?</h3>
              <ul className="space-y-6">
                {[
                  "End-to-end enterprise solutions",
                  "Proven track record with 50+ clients",
                  "24/7 professional support",
                  "Scalable solutions that grow with you",
                  "Expert consulting and digital transformation"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                    <span className="text-gray-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;