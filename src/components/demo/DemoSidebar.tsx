import { motion } from 'framer-motion';
import { demoStats, demoTestimonials } from '../../data/demo';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const DemoSidebar = () => (
    <div className="space-y-12">
        <div className="relative">
            <motion.h3
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xl font-black text-slate-950 mb-10 tracking-tight uppercase border-b border-slate-100 pb-4"
            >
                Core advantages
            </motion.h3>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-10"
            >
                {demoStats.map((stat, idx) => (
                    <motion.div key={idx} variants={itemVariants} className="flex gap-6 group/item cursor-default">
                        <div className="flex-shrink-0 w-14 h-14 bg-slate-950 rounded-[5px] flex items-center justify-center text-white font-black text-xs group-hover/item:bg-green-600 transition-all duration-500 group-hover/item:shadow-xl group-hover/item:shadow-green-500/20 group-hover/item:scale-110">
                            {stat.value}
                        </div>
                        <div>
                            <h4 className="text-slate-950 font-bold text-sm tracking-tight mb-1 group-hover/item:text-green-600 transition-colors duration-300">{stat.label}</h4>
                            <p className="text-slate-500 text-xs font-light leading-relaxed">{stat.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>

        {demoTestimonials.slice(0, 1).map((t, idx) => (
            <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="bg-slate-50 p-10 rounded-[5px] border border-slate-200 relative overflow-hidden group hover:border-green-200 transition-colors duration-500 hover:shadow-lg hover:shadow-green-500/5"
            >
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl -mr-16 -mt-16"
                />
                <div className="flex items-center gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => (
                        <motion.span
                            key={s}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + (s * 0.1) }}
                            className="text-green-500 text-[10px]"
                        >
                            ★
                        </motion.span>
                    ))}
                </div>
                <p className="text-slate-600 text-sm italic leading-relaxed mb-8 font-light relative z-10">
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
            </motion.div>
        ))}

        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="p-10 rounded-[5px] bg-slate-950 relative overflow-hidden group hover:shadow-2xl hover:shadow-green-900/20 transition-all duration-500"
        >
            <div className="relative z-10">
                <h4 className="text-white/40 font-black text-[10px] uppercase tracking-[0.4em] mb-6">Institution ready</h4>
                <div className="space-y-4">
                    {[
                        { label: "Fintech primary", color: "bg-green-500" },
                        { label: "Global scale", color: "bg-blue-500" },
                        { label: "Military secure", color: "bg-emerald-500" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 + (i * 0.1) }}
                            className="flex items-center gap-3"
                        >
                            <div className={`w-1.5 h-1.5 rounded-full ${item.color} shadow-[0_0_10px_rgba(34,197,94,0.5)]`} />
                            <span className="text-white font-light text-[11px] tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity duration-300">{item.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"
            />
        </motion.div>
    </div>
);

export default DemoSidebar;
