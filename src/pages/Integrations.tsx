import { Shield, Lightning, ArrowRight, CreditCard, Buildings, Users, ShareNetwork } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import GlowBackground from '../components/GlowBackground';

const Integrations = () => {
  const integrations = [
    {
      name: 'M-Pesa industrial bridge',
      description: 'Direct core integration with Safaricom M-Pesa including STK Push and B2C automated disbursements.',
      features: ['Real-time callbacks', 'B2C payroll automation', 'STK Push integration', 'KYC data validation'],
      icon: CreditCard,
      color: 'green'
    },
    {
      name: 'Statutory compliance engine',
      description: 'Automated direct link to KRA iTax, NSSF, and NHIF for seamless statutory report generation.',
      features: ['KRA P10 generation', 'NSSF portal sync', 'NHIF automated returns', 'Direct VAT filings'],
      icon: Buildings,
      color: 'blue'
    },
    {
      name: 'Interbank settlement gateway',
      description: 'Connect to Pesalink and other interbank networks for instant real-time gross settlement (RTGS).',
      features: ['Pesalink 2.0 readiness', 'Direct RTGS bridge', 'Liquidity monitoring', 'Bulk bank disbursements'],
      icon: ShareNetwork,
      color: 'purple'
    },
    {
      name: 'Institutional identity bridge',
      description: 'Secure IPRS and credit bureau (CRB) integrations for real-time identity and credit verification.',
      features: ['IPRS person validation', 'CRB dynamic scoring', 'E-Citizen wallet sync', 'Phone number aging'],
      icon: Users,
      color: 'orange'
    }
  ];

  const benefits = [
    'Total elimination of manual data entry errors',
    '99.9% operational uptime on all core API routes',
    'Automatic alignment with Kenyan labor and tax laws',
    'Encryption standard: AES-256 military grade',
    'Real-time executive visibility on data velocity',
    'Sub-second settlement confirmation latency'
  ];

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
            The Figbud Ecosystem
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tight leading-[0.9]">
            Institutional <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-slate-500 italic font-light">interconnectivity</span>
          </h1>
          <p className="text-xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto tracking-wide">
            Connect your core business systems with Kenya's primary financial and statutory networks through a single, unified industrial bridge.
          </p>
        </div>
      </section>

      {/* Light Integrations Grid */}
      <section className="py-32 bg-white relative overflow-hidden">
        <GlowBackground variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black text-slate-950 mb-6 tracking-tight">Standardized gateways</h2>
            <p className="text-slate-500 font-light tracking-wide max-w-2xl mx-auto">Native connectors built to maintain institutional memory and operational integrity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {integrations.map((integration, index) => (
              <div key={index} className="group relative bg-white p-12 rounded-[2.5rem] border border-slate-300 transition-all duration-700 shadow-xl hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex items-center justify-between mb-12">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-green-500 text-white shadow-xl shadow-green-500/20">
                    <integration.icon className="h-8 w-8" weight="fill" />
                  </div>
                  <div className="h-px flex-1 bg-slate-100 mx-8" />
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Gateway v{index + 1}</span>
                </div>
                <h3 className="text-2xl font-black text-green-600 mb-6 tracking-tight group-hover:text-slate-950 transition-colors">
                  {integration.name}
                </h3>
                <p className="text-slate-600 font-light mb-10 leading-relaxed tracking-wide">
                  {integration.description}
                </p>
                <div className="space-y-4">
                  {integration.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-xs font-black text-slate-500 tracking-wide">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Benefits Section */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="text-[10px] font-black text-green-500 uppercase tracking-[0.3em] mb-8">Performance audit</div>
              <h2 className="text-5xl font-black text-white mb-10 tracking-tight leading-[1.1]">
                Engineered for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 italic font-light">total precision</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex flex-col gap-3 group">
                    <div className="w-8 h-1 bg-green-500/30 group-hover:bg-green-500 transition-colors" />
                    <span className="text-slate-400 text-sm font-light leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-green-500/10 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative bg-slate-900/50 backdrop-blur-xl p-12 rounded-[2.5rem] border border-white/10 shadow-2xl">
                <h3 className="text-xl font-black text-white mb-10 tracking-[0.1em] uppercase border-b border-white/5 pb-4">Deployment Manifest</h3>
                <div className="space-y-10">
                  {[
                    { step: '01', title: 'System audit', desc: 'Comprehensive assessment of legacy architecture.' },
                    { step: '02', title: 'Route config', desc: 'Hardened API endpoint mapping and security.' },
                    { step: '03', title: 'Stress test', desc: 'Simulated institutional volume validation.' },
                    { step: '04', title: 'Deployment', desc: 'Atomic cutover with total data parity.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="text-xs font-black text-green-500 font-mono pt-1">{item.step}</div>
                      <div>
                        <h4 className="text-white font-black text-sm mb-1">{item.title}</h4>
                        <p className="text-slate-500 text-xs font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Light Technical Specs */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <GlowBackground variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-950 mb-6 tracking-tight text-center">Protocol standards</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: 'Hardened Security', items: ['AES-256 Encryption', 'OAuth 2.0 Auth', 'IP Whitelisting', 'Biometric Sign-off'] },
              { icon: Lightning, title: 'Industrial Velocity', items: ['Sub-second latency', '99.9% Uptime SLA', 'Auto-failover clusters', 'Scalable throughput'] },
              { icon: ShareNetwork, title: 'Network Mesh', items: ['Multi-region sync', 'Event-driven webhooks', 'Legacy bridge support', 'GraphQL/REST API'] }
            ].map((spec, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500">
                <spec.icon className="h-10 w-10 text-green-500 mb-8" weight="fill" />
                <h3 className="text-xl font-black text-slate-950 mb-6 tracking-tight">{spec.title}</h3>
                <ul className="space-y-3">
                  {spec.items.map((item, idx) => (
                    <li key={idx} className="text-slate-500 text-xs font-light tracking-wide flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-slate-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Dark CTA */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-green-500/5 blur-[120px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tight leading-[0.9]">
            Initiate <span className="italic font-light text-slate-500">convergence</span>
          </h2>
          <p className="text-xl text-slate-500 font-light mb-12 max-w-2xl mx-auto">
            Connect with our integration specialists to begin your institutional digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/demo" className="px-10 py-5 bg-green-500 text-black font-black text-xs uppercase tracking-[0.2em] rounded-full shadow-2xl shadow-green-500/20 hover:bg-green-400 transition-all active:scale-95 flex items-center justify-center gap-3">
              Request Demo Access <ArrowRight weight="bold" className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-[0.2em] rounded-full hover:bg-white/10 transition-all flex items-center justify-center">
              Contact Specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integrations;