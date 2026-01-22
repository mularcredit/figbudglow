import { integrations } from '../../data/home';

const IntegrationsRibbon = () => {
    return (
        <section className="relative z-10 py-12 bg-slate-950 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 opacity-30 hover:opacity-100 transition-opacity duration-1000">
                    <div className="text-xs font-bold text-white tracking-wide whitespace-nowrap border-r border-white/10 pr-12 hidden lg:block">
                        Institutional <br /> partners
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
                        {integrations.map((item, i) => (
                            <div key={i} className="flex items-center gap-4 group grayscale hover:grayscale-0 transition-all duration-500">
                                {item.logo ? (
                                    <img
                                        src={item.logo}
                                        alt={`${item.name} logo`}
                                        className="h-6 w-auto object-contain opacity-50 group-hover:opacity-100 transition-all duration-500"
                                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                    />
                                ) : (
                                    <div className="text-xs font-bold text-slate-500 group-hover:text-white tracking-wide transition-colors">
                                        {item.name}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </section>
    );
};

export default IntegrationsRibbon;
