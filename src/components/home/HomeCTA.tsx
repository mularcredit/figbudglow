import { Link } from 'react-router-dom';

const HomeCTA = () => {
    return (
        <section className="relative py-48 bg-slate-950 text-white overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] opacity-40" />
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] opacity-30 animate-pulse" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-900 border border-white/5 text-slate-400 text-xs font-bold mb-12 tracking-wide">
                    Establish your legacy
                </div>
                <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter leading-[0.9]">
                    Scale without <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-slate-600">compromise</span>
                </h2>
                <p className="text-xl text-slate-500 mb-16 font-light max-w-2xl mx-auto tracking-wide">
                    Future proof your institutional infrastructure. Join the sophisticated enterprises scaling on the high availability architecture of Figbud. This platform is designed for the next decade of institutional digital operations.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                    <Link to="/demo" className="group relative px-12 py-5 bg-white text-slate-950 font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
                        <span className="relative z-10 text-sm tracking-widest">Request enterprise access</span>
                    </Link>
                    <Link to="/contact" className="text-slate-400 hover:text-white font-bold text-sm tracking-widest transition-all">
                        Talk to a specialist
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </section>
    );
};

export default HomeCTA;
