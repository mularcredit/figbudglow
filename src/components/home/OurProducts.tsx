import { ArrowRight, CheckCircle, Shield, Lightning, DeviceMobile } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const OurProducts = () => {
    const products = [
        {
            name: 'Zira HR',
            tagline: 'HR & Payroll',
            description: 'Comprehensive human capital management designed for modern teams, with automated payroll and compliance.',
            icon: Lightning,
            color: 'from-blue-500 to-indigo-600',
            features: ['Automated Payroll', 'Leave Management', 'Statutory Compliance']
        },
        {
            name: 'Jasiri Lending',
            tagline: 'Lending Software',
            description: 'Next-generation lending platform for microfinance and banks, featuring precision credit scoring.',
            icon: Shield,
            color: 'from-emerald-500 to-teal-600',
            features: ['Automated Scoring', 'Loan Origination', 'Risk Management']
        },
        {
            name: 'Strideli',
            tagline: 'Smart Tracker',
            description: 'Real-time asset telemetry and intelligent monitoring for fleet management and asset security.',
            icon: DeviceMobile,
            color: 'from-blue-400 to-cyan-500',
            features: ['Live GPS Tracking', 'Anti-theft Alerts', 'Fleet Analytics']
        }
    ];

    return (
        <section className="relative py-32 bg-slate-950 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-grid-dark opacity-10" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-semibold uppercase tracking-widest mb-4">
                        Innovative Solutions
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500 italic font-light">products</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, i) => (
                        <div key={i} className="group relative">
                            <div className={`absolute -inset-px bg-gradient-to-br ${product.color} rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />

                            <div className="relative h-full bg-slate-900/80 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 lg:p-10 flex flex-col transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                    <product.icon weight="fill" className="w-7 h-7 text-white" />
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-sm font-bold text-emerald-400 tracking-[0.2em] mb-2">{product.name}</h3>
                                    <h4 className="text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all">{product.tagline}</h4>
                                    <p className="text-slate-400 text-lg leading-relaxed font-medium">
                                        {product.description}
                                    </p>
                                </div>

                                <div className="space-y-4 mb-10 flex-1">
                                    {product.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center text-sm font-medium text-slate-300">
                                            <div className={`w-5 h-5 rounded-full bg-white/5 flex items-center justify-center mr-3 border border-white/10 group-hover:border-emerald-500/30 transition-colors`}>
                                                <CheckCircle weight="fill" className="w-3.5 h-3.5 text-emerald-400" />
                                            </div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <Link to="/demo" className="inline-flex items-center group/btn text-sm font-bold text-white tracking-widest uppercase py-4 px-8 bg-white/5 border border-white/10 rounded-xl hover:bg-white hover:text-slate-950 transition-all duration-300">
                                    Explore {product.name.split(' ')[0]} <ArrowRight className="ml-3 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurProducts;
