import { allServices } from '../../data/home';
import GlowBackground from '../GlowBackground';

const EnterpriseSuite = () => {
    return (
        <section className="relative py-48 bg-white overflow-hidden">
            {/* Structural visual elements */}
            <GlowBackground variant="light" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20 mb-32">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-xs font-bold mb-10 tracking-wide">
                            Human capital management
                        </div>
                        <h2 className="text-6xl md:text-8xl font-black text-slate-950 mb-10 tracking-[0.02em] leading-[0.9]">
                            Zira <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-slate-700 to-slate-500 italic font-light">HR</span>
                        </h2>
                        <p className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 tracking-wide">
                            Eliminate statutory risk and operational friction. Zira HR is the robust HCM infrastructure built specifically for the complexities of the African labor market. It delivers total precision in payroll, tax, and employee lifecycle management.
                        </p>
                    </div>
                    <div className="lg:w-1/2 relative group">
                        <div className="absolute -inset-4 bg-blue-500/15 rounded-[2rem] blur-3xl opacity-100 transition-opacity duration-1000" />
                        <div className="relative rounded-3xl overflow-hidden border border-slate-300 bg-white p-4 shadow-2xl text-slate-950">
                            <img
                                src="/products/zira.png"
                                alt="Zira HR Dashboard"
                                className="w-full h-auto rounded-2xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-1000"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allServices.map((service, i) => (
                        <div key={i} className="group relative flex flex-col bg-white p-10 rounded-[2.5rem] border border-slate-300 transition-all duration-700 shadow-xl hover:-translate-y-2 hover:shadow-2xl hover:border-green-500/30">
                            <div className="flex items-center justify-between mb-12">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-green-500 border border-green-500 transition-all duration-500 shadow-lg shadow-green-500/20`}>
                                    <service.icon className="w-6 h-6 text-white" weight="fill" />
                                </div>
                                <div className="h-px flex-1 bg-slate-200 mx-6" />
                                <span className="text-xs font-bold text-slate-400 tracking-wide">Module {i + 1}</span>
                            </div>

                            <h3 className="text-2xl font-black text-green-600 mb-6 tracking-tight group-hover:text-slate-950 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-slate-600 text-sm leading-relaxed mb-10 font-light tracking-wide">
                                {service.description}
                            </p>

                            <div className="space-y-4 mb-12 flex-1">
                                {service.features.slice(0, 3).map((f, idx) => (
                                    <div key={idx} className="flex items-center text-xs font-bold text-slate-500 tracking-wide group/item">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3 transition-colors" />
                                        {f}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EnterpriseSuite;
