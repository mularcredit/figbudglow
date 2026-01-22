import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import GlowBackground from '../components/GlowBackground';
import { ziraProContent } from '../data/zirapro';

const ZiraPro = () => {
    return (
        <div className="relative w-full overflow-x-hidden font-sans bg-slate-50">
            {/* Global Background Layer */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
                <GlowBackground />
            </div>

            {/* Hero Section - Elevated Light */}
            <section className="relative min-h-[90vh] flex items-center pt-12 pb-12 overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] opacity-40" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-[10px] font-bold mb-6 uppercase tracking-widest"
                            >
                                {ziraProContent.hero.badge}
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-[1.1]"
                            >
                                Elegant <span className="text-blue-600">Enterprise</span> Intelligence
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-slate-500 max-w-xl mb-10 leading-relaxed font-light"
                            >
                                {ziraProContent.hero.description}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-wrap gap-4"
                            >
                                <Link to="/demo" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all flex items-center group shadow-lg shadow-blue-500/20">
                                    Schedule Demo <ArrowRight weight="bold" className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/contact" className="px-8 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-lg transition-all border border-slate-200">
                                    Contact Sales
                                </Link>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 relative group"
                        >
                            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-blue-500/5">
                                <img
                                    src="/products/zira.png"
                                    alt="Zira HR Dashboard"
                                    className="w-full h-auto object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />
                            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full" />
                        </motion.div>
                    </div>
                </div>


            </section>

            {/* Strategic Overview - High Contrast Dark */}
            <section className="py-32 relative z-10 bg-slate-950 border-y border-white/5">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-xs font-bold text-blue-400 mb-8 uppercase tracking-[0.3em]">Strategic Context</h2>
                        <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-normal italic font-serif max-w-3xl mx-auto">
                            "{ziraProContent.executiveSummary.content}"
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats - Refined Light */}
            <section className="py-24 relative z-10 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {ziraProContent.stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center group"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tighter group-hover:text-blue-600 transition-colors">{stat.value}</div>
                                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pain Points - Dramatic Dark */}
            <section className="py-32 relative z-10 bg-slate-950 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.05),transparent)]" />
                <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">The Productivity Paradox</h2>
                            <p className="text-slate-400 text-lg font-light leading-relaxed">Addressing the gap between technological investment and organizational efficiency.</p>
                        </div>
                        <div className="hidden md:block h-px flex-1 bg-white/10 mx-12 mb-4" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ziraProContent.painPoints.map((point, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/5 p-10 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-500 group"
                            >
                                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors uppercase tracking-tight">{point.title}</h3>
                                <ul className="space-y-4 mb-8">
                                    {point.points.map((p, i) => (
                                        <li key={i} className="flex items-start text-slate-400 text-[14px]">
                                            <span className="text-red-500 mr-2 mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-6 border-t border-white/5">
                                    <p className="text-xs text-slate-500 font-medium uppercase tracking-widest mb-2">Structural Impact</p>
                                    <p className="text-sm text-slate-300 font-medium">{point.impact}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platform Capabilities - Clean White */}
            <section className="py-32 relative z-10 bg-white border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Enterprise Orchestration</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">A unified ecosystem engineered for complex organizational workflows.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {ziraProContent.features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="mb-8 inline-flex p-4 rounded-xl bg-slate-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <feature.icon className="w-8 h-8" weight="light" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{feature.title}</h3>
                                <p className="text-slate-500 text-sm mb-8 leading-relaxed font-light">{feature.description}</p>
                                <ul className="space-y-4">
                                    {feature.details.map((detail, i) => (
                                        <li key={i} className="flex items-center text-[13px] font-medium text-slate-700">
                                            <CheckCircle weight="fill" className="w-5 h-5 text-blue-500 mr-4 opacity-40" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modules - Statement Dark */}
            <section className="py-32 relative z-10 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {ziraProContent.modules.map((module, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white/5 p-12 rounded-[2rem] border border-white/10"
                            >
                                <h3 className="text-3xl font-bold text-white mb-10 tracking-tight">{module.category}</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                                    {module.items.map((item, i) => (
                                        <div key={i} className="flex items-center text-slate-400 font-medium text-sm group">
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA - Brand Intensity */}
            <section className="relative py-32 bg-blue-600 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 mix-blend-overlay" />
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">Synchronize your enterprise.</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/demo" className="px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:shadow-2xl transition-all uppercase text-xs tracking-widest">
                            Request Private Beta
                        </Link>
                        <Link to="/contact" className="px-10 py-4 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all uppercase text-xs tracking-widest">
                            Talk to Strategy
                        </Link>
                    </div>
                    <p className="mt-12 text-white/60 text-[10px] font-bold uppercase tracking-[0.3em]">Redefining the modern workforce ecosystem</p>
                </div>
            </section>
        </div>
    );
};

export default ZiraPro;

