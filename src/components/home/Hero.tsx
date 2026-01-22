import { Link } from 'react-router-dom';
import { Lightning, ArrowRight } from '@phosphor-icons/react';
import GlowBackground from '../GlowBackground';

const Hero = () => {
    return (
        <section className="relative w-full bg-slate-950 min-h-[90vh] flex items-center justify-center pt-20 pb-40 overflow-visible">
            <div className="absolute inset-0">
                <GlowBackground />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-900 border border-white/5 mb-8 backdrop-blur-xl group">
                        <Lightning weight="fill" className="h-4 w-4 text-green-400 mr-2 group-hover:animate-pulse" />
                        <span className="text-slate-400 text-xs font-semibold tracking-wide">Enterprise Operating System</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white mb-8 leading-[1.1]">
                        Institutional <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-slate-500">
                            digital architecture
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto font-light tracking-wide">
                        Engineering the essential systems that power the leading enterprises of Africa. We provide rapid lending operating systems and fully compliant HCM infrastructure.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/demo" className="glow-button px-10 py-5 bg-green-500 hover:bg-green-400 text-black font-bold rounded-full shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center tracking-wider text-sm">
                            Request enterprise demo <ArrowRight weight="bold" className="ml-2 h-4 w-4" />
                        </Link>
                    </div>

                    <div className="mt-16 flex flex-wrap gap-8 text-slate-500 justify-center font-bold text-xs tracking-wide">
                        <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                            <span>Fintech infrastructure</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                            <span>Compliant HCM & payroll</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-3 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                            <span>Asset telemetry</span>
                        </div>
                    </div>
                </div>

                {/* Hero Visual - MacBook Pro Product Showcase (Reduced size: max-w-3xl) */}
                <div className="max-w-3xl mx-auto mt-12 relative group">
                    {/* Ambient Glow behind the MacBook */}
                    <div className="absolute -inset-4 bg-green-500/20 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-1000" />

                    <div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-1000 ease-out animate-float">
                        <img
                            src="/images/macbook.png"
                            alt="Figbud Enterprise Platform on MacBook Pro"
                            className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] relative z-10"
                        />
                        {/* Dashboard Tablet View - Floating Overlay (iPad) */}
                        <img
                            src="/images/ipad.png"
                            alt="Figbud Institutional Dashboard on iPad"
                            className="absolute -bottom-16 -right-20 w-[65%] h-auto drop-shadow-2xl z-20 hover:scale-110 transition-transform duration-500 hidden md:block" // Increased scale and offset for premium feel
                        />
                        <img
                            src="/images/ipad.png"
                            alt="Figbud Institutional Dashboard on iPad"
                            className="w-full h-auto drop-shadow-2xl mt-8 rounded-xl relative z-20 md:hidden border border-white/10" // Stacked on mobile
                        />
                    </div>

                    {/* Reflection / Bottom Glow */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/4 bg-gradient-to-t from-green-500/10 to-transparent blur-2xl rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
