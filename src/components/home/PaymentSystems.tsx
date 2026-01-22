import { Wallet, CheckCircle } from '@phosphor-icons/react';
import { paymentSystemsDetails } from '../../data/home';
import ModernCard from '../ModernCard';
import GlowBackground from '../GlowBackground';

const PaymentSystems = () => {
    return (
        <section className="bg-slate-50 py-32 text-slate-950 relative overflow-hidden border-t border-slate-200">
            {/* Ambient Background Glows */}
            <GlowBackground variant="light" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-20 mb-24">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold mb-6 border border-emerald-200 tracking-wide">
                            Jasiri
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-8 tracking-tight">
                            Jasiri <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 italic font-light leading-normal">lending software</span>
                        </h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                            Accelerate your loan book while crushing NPLs. Jasiri Lending is the rapid operating system built for microfinance and digital banks. It integrates real time precision credit scoring with seamless M-Pesa B2C disbursements.
                        </p>
                    </div>
                    <div className="lg:w-1/2 relative group">
                        <div className="absolute -inset-4 bg-emerald-500/10 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white p-4 shadow-2xl">
                            <img
                                src="/products/jasiri.png"
                                alt="Jasiri Lending Interface"
                                className="w-full h-auto rounded-2xl shadow-sm group-hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {paymentSystemsDetails.map((system, index) => (
                        <div key={index} className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-[2rem] blur opacity-0 group-hover:opacity-100 transition duration-500" />
                            <ModernCard
                                variant="light"
                                className="relative bg-white border-slate-200 hover:border-emerald-500/30 transition-all duration-500 h-full flex flex-col p-10 shadow-sm hover:shadow-2xl"
                            >
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform duration-500 shadow-sm overflow-hidden">
                                        {system.logo ? (
                                            <img
                                                src={system.logo}
                                                alt={`${system.name} logo`}
                                                className="w-12 h-12 object-contain"
                                            />
                                        ) : (
                                            <Wallet weight="light" className="h-8 w-8 text-emerald-600" />
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-slate-950 tracking-tight mb-1">{system.name}</h3>
                                        <div className="text-xs font-bold text-emerald-600/60 tracking-wide">Active network</div>
                                    </div>
                                </div>

                                <p className="text-slate-600 text-lg mb-8 font-light leading-relaxed flex-1">
                                    {system.description}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-slate-100">
                                    {system.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center text-sm text-slate-500 font-bold tracking-wide group/item">
                                            <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center mr-3 group-hover/item:bg-emerald-100 transition-colors">
                                                <CheckCircle weight="fill" className="h-4 w-4 text-emerald-600" />
                                            </div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </ModernCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PaymentSystems;
