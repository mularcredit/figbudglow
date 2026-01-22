import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowRight, CheckCircle, CaretDown, CaretUp } from '@phosphor-icons/react';
import { activeOpportunities } from '../../data/home';
import GlowBackground from '../GlowBackground';

const ExclusiveOpportunities = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section className="relative py-32 bg-slate-900 overflow-hidden">
            <GlowBackground />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-24">
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight">
                        Our <span className="text-slate-500 italic font-light lowercase">products</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activeOpportunities.map((item, i) => (
                        <div
                            key={i}
                            className={`group glow-card relative flex flex-col bg-slate-950/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-green-500/30 transition-all duration-500 ring-1 ring-white/5 ${expandedIndex === i ? 'h-auto' : 'hover:-translate-y-1'}`}
                        >
                            {/* Blurred Background Image Layer */}
                            <div className="absolute inset-0 opacity-[0.15] pointer-events-none group-hover:opacity-30 transition-opacity duration-700">
                                <img
                                    src={item.image}
                                    alt=""
                                    className="w-full h-full object-cover blur-[80px] scale-150"
                                />
                            </div>

                            {/* Image Section - Flush Fit */}
                            <div className="relative h-64 overflow-hidden z-10 shrink-0">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* Badge */}
                                <div className="absolute top-6 right-6 bg-green-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-xl tracking-wider backdrop-blur-xl shadow-xl border border-white/20">
                                    {item.badge}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="flex-1 p-8 flex flex-col z-10">
                                <h3 className="text-3xl font-black text-white mb-6 leading-tight group-hover:text-green-400 transition-colors">
                                    {item.title}
                                </h3>

                                <div className="relative mb-8">
                                    <p className={`text-slate-400 text-[15px] leading-relaxed font-light transition-all duration-500 ${expandedIndex === i ? '' : 'line-clamp-2'}`}>
                                        {item.excerpt}
                                    </p>
                                    <button
                                        onClick={() => toggleExpand(i)}
                                        className="mt-4 flex items-center gap-2 text-xs font-bold text-green-500 tracking-wide hover:text-green-400 transition-colors"
                                    >
                                        {expandedIndex === i ? (
                                            <>Read less <CaretUp weight="bold" className="w-3 h-3" /></>
                                        ) : (
                                            <>Read more <CaretDown weight="bold" className="w-3 h-3" /></>
                                        )}
                                    </button>
                                </div>

                                <div className="mt-auto pt-8 border-t border-white/10 flex items-center justify-between">
                                    <div className="flex items-center text-xs font-medium text-green-400/90 tracking-wider bg-white/5 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10">
                                        <CheckCircle weight="fill" className="mr-3 h-5 w-5" />
                                        Limited access
                                    </div>
                                    <Link
                                        to="/demo"
                                        className="flex items-center text-xs font-bold text-blue-400 transition-all hover:text-blue-300 tracking-wide"
                                    >
                                        Claim access <ArrowRight weight="light" className="ml-3 h-5 w-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-12 md:hidden gap-4">
                    <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white">
                        <ArrowRight weight="light" className="h-6 w-6 rotate-180" />
                    </button>
                    <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white">
                        <ArrowRight weight="light" className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ExclusiveOpportunities;
