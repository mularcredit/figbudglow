import { demoStats, demoTestimonials } from '../../data/demo';

const DemoSidebar = () => (
    <div className="space-y-12">
        <div className="relative">
            <h3 className="text-xl font-black text-slate-950 mb-10 tracking-tight uppercase border-b border-slate-100 pb-4">
                Core advantages
            </h3>
            <div className="space-y-10">
                {demoStats.map((stat, idx) => (
                    <div key={idx} className="flex gap-6 group/item">
                        <div className="flex-shrink-0 w-14 h-14 bg-slate-950 rounded-[5px] flex items-center justify-center text-white font-black text-xs group-hover/item:bg-green-600 transition-all duration-500 group-hover/item:shadow-xl group-hover/item:shadow-green-500/20">
                            {stat.value}
                        </div>
                        <div>
                            <h4 className="text-slate-950 font-bold text-sm tracking-tight mb-1">{stat.label}</h4>
                            <p className="text-slate-500 text-xs font-light leading-relaxed">{stat.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {demoTestimonials.slice(0, 1).map((t, idx) => (
            <div key={idx} className="bg-slate-50 p-10 rounded-[5px] border border-slate-200 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl -mr-16 -mt-16" />
                <div className="flex items-center gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s} className="text-green-500 text-[10px]">★</span>
                    ))}
                </div>
                <p className="text-slate-600 text-sm italic leading-relaxed mb-8 font-light">
                    "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-950 rounded-[5px] flex items-center justify-center font-black text-white text-[10px]">
                        {t.author.charAt(0)}
                    </div>
                    <div>
                        <h4 className="text-slate-950 font-bold text-xs tracking-tight">{t.author}</h4>
                        <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">{t.position}</p>
                    </div>
                </div>
            </div>
        ))}

        <div className="p-10 rounded-[5px] bg-slate-950 relative overflow-hidden group">
            <div className="relative z-10">
                <h4 className="text-white/40 font-black text-[10px] uppercase tracking-[0.4em] mb-6">Institution ready</h4>
                <div className="space-y-4">
                    {[
                        { label: "Fintech primary", color: "bg-green-500" },
                        { label: "Global scale", color: "bg-blue-500" },
                        { label: "Military secure", color: "bg-emerald-500" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                            <span className="text-white font-light text-[11px] tracking-widest uppercase opacity-80">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-green-500/10 rounded-full blur-3xl" />
        </div>
    </div>
);

export default DemoSidebar;
