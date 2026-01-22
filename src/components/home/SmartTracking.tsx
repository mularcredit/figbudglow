import { NavigationArrow, ShieldCheck, CarProfile, MapPin, AppStoreLogo, GooglePlayLogo } from '@phosphor-icons/react';

const SmartTracking = () => {
    return (
        <section className="py-48 bg-slate-950 relative overflow-hidden">
            {/* Ambient Background matching typical tracking interface dark modes */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-24">
                    {/* Content Side */}
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-900 border border-white/5 text-slate-400 text-xs font-bold mb-10 tracking-wide">
                            Global telemetry
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-10 leading-[0.9] tracking-tighter">
                            Strideli <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">smart tracker</span>
                        </h2>
                        <p className="text-xl text-slate-500 mb-12 leading-relaxed font-light tracking-wide">
                            Stop fuel siphoning and asset misuse before it happens. Strideli provides institutional grade telemetry that transforms your fleet from a cost center into a data led operation. Gain real time visibility and remote immobilisation at the edge.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden mb-12">
                            {[
                                { icon: NavigationArrow, text: "Precision GPS" },
                                { icon: ShieldCheck, text: "Active security" },
                                { icon: CarProfile, text: "Fleet intelligence" },
                                { icon: MapPin, text: "Smart fencing" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center text-slate-400 font-black text-xs tracking-wide p-6 bg-slate-950 hover:bg-slate-900 transition-colors group">
                                    <item.icon weight="fill" className="text-blue-500 mr-4 h-5 w-5 group-hover:scale-110 transition-transform" />
                                    {item.text}
                                </div>
                            ))}
                        </div>

                        {/* App Platform Icons */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 pt-10 border-t border-white/5">
                            <span className="text-slate-600 text-xs font-bold tracking-wide">Ecosystem access</span>
                            <div className="flex gap-6">
                                <div className="group/icon flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-white transition-all cursor-pointer">
                                    <AppStoreLogo weight="fill" className="w-5 h-5 text-white" />
                                    <span className="text-white text-xs font-bold tracking-wide">App Store</span>
                                </div>
                                <div className="group/icon flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-white transition-all cursor-pointer">
                                    <GooglePlayLogo weight="fill" className="w-5 h-5 text-white" />
                                    <span className="text-white text-xs font-bold tracking-wide">Play Store</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="lg:w-1/2 relative">
                        {/* Decorative background glows */}
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[160px] animate-pulse" />

                        <div className="relative group">
                            <div className="relative p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-slate-950/40" />
                                <div className="relative rounded-2xl overflow-hidden group/img">
                                    <img
                                        src="/stride.png"
                                        alt="Strideli Fleet Intelligence Dashboard"
                                        className="w-full h-auto transition-all duration-1000 group-hover:scale-105"
                                        style={{
                                            maskImage: 'radial-gradient(120% 120% at 20% 20%, black 40%, transparent 95%)',
                                            WebkitMaskImage: 'radial-gradient(120% 120% at 20% 20%, black 40%, transparent 95%)',
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-transparent to-transparent opacity-60" />

                                    {/* Animated scanning line */}
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 animate-[scan_4s_ease-in-out_infinite]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SmartTracking;
