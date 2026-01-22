import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import GlowBackground from '../components/GlowBackground';
import { jasiriContent } from '../data/jasiri';

const JasiriLending = () => {
    return (
        <div className="relative w-full overflow-x-hidden font-sans bg-slate-950">
            {/* Global Background Layer */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
                <GlowBackground />
            </div>

            {/* Hero Section - Elevated Dark */}
            <section className="relative min-h-[90vh] flex items-center pt-12 pb-12 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-20" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold mb-6 uppercase tracking-widest"
                            >
                                {jasiriContent.hero.badge}
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]"
                            >
                                Modern <span className="text-emerald-400">Lending</span> Infrastructure
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed font-light"
                            >
                                {jasiriContent.hero.description}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-wrap gap-4"
                            >
                                <Link to="/demo" className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-lg transition-all flex items-center group shadow-lg shadow-emerald-500/20">
                                    Schedule Demo <ArrowRight weight="bold" className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/contact" className="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg transition-all border border-white/10">
                                    Contact Sales
                                </Link>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-emerald-500/10">
                                <img
                                    src="/products/jasiri.png"
                                    alt="Jasiri Dashboard"
                                    className="w-full h-auto object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full" />
                            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />
                        </motion.div>
                    </div>
                </div>


            </section>

            {/* Executive Summary - Elegant Light */}
            <section className="py-32 relative z-10 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-xs font-bold text-emerald-600 mb-8 uppercase tracking-[0.3em]">The Vision</h2>
                        <p className="text-lg md:text-xl text-slate-800 leading-relaxed font-normal italic font-serif max-w-3xl mx-auto">
                            "{jasiriContent.executiveSummary.content}"
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats - Refined Dark */}
            <section className="py-24 relative z-10 bg-slate-900 overflow-hidden border-y border-white/5">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent)]" />
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {jasiriContent.stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center group"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tighter group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{stat.value}</div>
                                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Challenges - Clean Light */}
            <section className="py-32 relative z-10 bg-slate-50">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Industry Pain points and our solutions</h2>
                            <p className="text-slate-500 text-lg font-light leading-relaxed">Identifying and eliminating the structural bottlenecks in credit markets.</p>
                        </div>
                        <div className="hidden md:block h-px flex-1 bg-slate-200 mx-12 mb-4" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {jasiriContent.painPoints.map((point, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
                            >
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                                    <span className="w-1.5 h-6 bg-red-500 rounded-full mr-4" />
                                    {point.title}
                                </h3>
                                <ul className="space-y-4 mb-8">
                                    {point.points.map((p, i) => (
                                        <li key={i} className="flex items-start text-slate-600 text-[15px]">
                                            <span className="text-red-500/40 mr-3 text-lg leading-none">×</span>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-6 border-t border-slate-100">
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">Systemic Risk</p>
                                    <p className="text-sm text-slate-700 font-semibold">{point.impact}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Features - Minimal Dark */}
            <section className="py-32 relative z-10 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built for High Volume</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">Industrial strength lending infrastructure engineered for scale.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        {jasiriContent.features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className="mb-6 inline-flex p-3 rounded-lg bg-emerald-500/5 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
                                    <feature.icon className="w-6 h-6" weight="light" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{feature.title}</h3>
                                <p className="text-slate-400 text-sm mb-6 leading-relaxed font-light">{feature.description}</p>
                                <ul className="space-y-3">
                                    {feature.details.map((detail, i) => (
                                        <li key={i} className="flex items-center text-xs text-slate-300 hover:text-emerald-400 transition-colors">
                                            <div className="w-1 h-1 bg-emerald-500 rounded-full mr-3 opacity-40" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA - Statement Section */}
            <section className="relative py-32 bg-emerald-600 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 mix-blend-overlay" />
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">Scale your portfolio with precision.</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/demo" className="px-10 py-4 bg-slate-900 text-white font-bold rounded-lg hover:shadow-2xl transition-all uppercase text-xs tracking-widest">
                            Request Infrastructure Access
                        </Link>
                        <Link to="/contact" className="px-10 py-4 border border-slate-900/20 text-slate-900 font-bold rounded-lg hover:bg-white/10 transition-all uppercase text-xs tracking-widest">
                            Talk to Architecture
                        </Link>
                    </div>
                    <p className="mt-12 text-slate-900/60 text-[10px] font-bold uppercase tracking-[0.3em]">Built for the modern financial institution</p>
                </div>
            </section>
        </div>
    );
};

export default JasiriLending;


