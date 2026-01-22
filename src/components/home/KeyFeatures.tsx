import { keyFeatures } from '../../data/home';

const KeyFeatures = () => {
    return (
        <section className="py-32 bg-slate-950 relative overflow-hidden">
            {/* Structural visual elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-[2rem] overflow-hidden">
                    {keyFeatures.map((feat, index) => (
                        <div
                            key={index}
                            className="group p-10 bg-slate-950 hover:bg-slate-900/50 transition-all duration-700 relative"
                        >
                            {/* Decorative corner glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:bg-white group-hover:border-white transition-all duration-500">
                                    <feat.icon className="w-6 h-6 text-white group-hover:text-slate-950" weight="fill" />
                                </div>
                                <div className="text-xs font-bold text-slate-400 mb-6 flex items-center tracking-wide">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                                    Insight module
                                </div>
                                <h3 className="text-xl font-black text-white mb-4 tracking-tight">{feat.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm font-light tracking-wide">{feat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyFeatures;
