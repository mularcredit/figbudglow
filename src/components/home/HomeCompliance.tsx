import GlowBackground from '../GlowBackground';
import { ShieldCheck, Files, Bank, Lock } from '@phosphor-icons/react';

const HomeCompliance = () => {
    const standards = [
        {
            icon: ShieldCheck,
            title: "Data Sovereignty",
            desc: "Fully compliant with Kenya Data Protection Act 2019."
        },
        {
            icon: Files,
            title: "Statutory Precision",
            desc: "Native alignment with KRA iTax & NSSF Act 2013."
        },
        {
            icon: Bank,
            title: "Financial Security",
            desc: "CBK & Safaricom institutional bridge protocols."
        },
        {
            icon: Lock,
            title: "Information Governance",
            desc: "SOC-2 and ISO 27001 internal control mapping."
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
            <GlowBackground variant="light" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="text-[10px] font-black text-green-500 uppercase tracking-[0.3em] mb-4">Quality Assurance</div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">Institutional compliance</h2>
                    </div>
                    <p className="text-slate-500 font-light text-sm max-w-xs md:text-right">
                        Rigorous adherence to Kenyan and international enterprise standards ensuring total operational integrity.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {standards.map((item, idx) => (
                        <div key={idx} className="group p-8 bg-slate-50 border border-slate-200 rounded-3xl hover:bg-white hover:border-green-500/30 hover:shadow-xl transition-all duration-500">
                            <div className="w-12 h-12 rounded-xl bg-green-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-green-500/10 transition-transform group-hover:scale-110">
                                <item.icon weight="fill" className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-black text-slate-950 mb-3 tracking-tight">{item.title}</h3>
                            <p className="text-slate-500 text-xs font-light leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeCompliance;
