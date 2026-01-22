import {
    CaretDown,
    PaperPlaneRight
} from '@phosphor-icons/react';
import { demoServices, demoTimeSlots } from '../../data/demo';

interface DemoFormProps {
    formData: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | any>) => void;
    onSubmit: (e: React.FormEvent) => void;
}

const DemoForm = ({ formData, onChange, onSubmit }: DemoFormProps) => (
    <div className="relative group">
        {/* Decorative backgrounds */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative bg-white p-10 lg:p-14 rounded-[5px] border border-slate-200 shadow-xl transition-all duration-700 overflow-hidden">
            {/* Internal Glow on hover */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

            <div className="relative z-10">
                <div className="flex justify-between items-center mb-12">
                    <div className="text-[10px] font-black text-slate-400 tracking-[0.3em] uppercase">Deployment Request</div>
                    <div className="flex items-center gap-3">
                        <div className="text-[9px] font-bold text-green-500 uppercase tracking-widest">System Ready</div>
                        <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)] animate-pulse" />
                        </div>
                    </div>
                </div>

                <div className="mb-14">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-950 mb-4 tracking-tight">Request a demo access</h2>
                    <p className="text-slate-500 font-light text-lg">Enter your details to schedule a personalized walkthrough of our ecosystem.</p>
                </div>

                <form onSubmit={onSubmit} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="group/field relative">
                            <label className="text-[10px] font-light text-slate-500 uppercase tracking-widest mb-3 px-1 block group-focus-within/field:text-green-600 transition-colors">First Name</label>
                            <input
                                type="text" name="firstName" required placeholder="John" value={formData.firstName} onChange={onChange}
                                className="w-full bg-transparent border border-slate-200 p-4 rounded-[5px] text-slate-950 font-light placeholder:text-slate-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300"
                            />
                        </div>
                        <div className="group/field relative">
                            <label className="text-[10px] font-light text-slate-500 uppercase tracking-widest mb-3 px-1 block group-focus-within/field:text-green-600 transition-colors">Last Name</label>
                            <input
                                type="text" name="lastName" required placeholder="Doe" value={formData.lastName} onChange={onChange}
                                className="w-full bg-transparent border border-slate-200 p-4 rounded-[5px] text-slate-950 font-light placeholder:text-slate-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="group/field relative">
                            <label className="text-[10px] font-light text-slate-500 uppercase tracking-widest mb-3 px-1 block group-focus-within/field:text-green-600 transition-colors">Email Address</label>
                            <input
                                type="email" name="email" required placeholder="email@company.com" value={formData.email} onChange={onChange}
                                className="w-full bg-transparent border border-slate-200 p-4 rounded-[5px] text-slate-950 font-light placeholder:text-slate-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300"
                            />
                        </div>
                        <div className="group/field relative">
                            <label className="text-[10px] font-light text-slate-500 uppercase tracking-widest mb-3 px-1 block group-focus-within/field:text-green-600 transition-colors">Phone Number</label>
                            <input
                                type="tel" name="phone" required placeholder="0700..." value={formData.phone} onChange={onChange}
                                className="w-full bg-transparent border border-slate-200 p-4 rounded-[5px] text-slate-950 font-light placeholder:text-slate-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="group/field relative">
                            <label className="text-[10px] font-light text-slate-500 uppercase tracking-widest mb-3 px-1 block group-focus-within/field:text-green-600 transition-colors">Company</label>
                            <input
                                type="text" name="company" required placeholder="Enterprise Ltd" value={formData.company} onChange={onChange}
                                className="w-full bg-transparent border border-slate-200 p-4 rounded-[5px] text-slate-950 font-light placeholder:text-slate-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300"
                            />
                        </div>
                        <div className="group/field relative">
                            <label className="text-[10px] font-light text-slate-500 uppercase tracking-widest mb-3 px-1 block group-focus-within/field:text-green-600 transition-colors">Job Title</label>
                            <input
                                type="text" name="jobTitle" required placeholder="Operations Manager" value={formData.jobTitle} onChange={onChange}
                                className="w-full bg-transparent border border-slate-200 p-4 rounded-[5px] text-slate-950 font-light placeholder:text-slate-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300"
                            />
                        </div>
                    </div>

                    <div className="group/field relative">
                        <label className="text-[10px] font-light text-slate-500 uppercase tracking-widest mb-3 px-1 block group-focus-within/field:text-green-600 transition-colors">Product of Interest</label>
                        <div className="relative">
                            <select
                                name="service" required value={formData.service} onChange={onChange}
                                className="w-full bg-transparent border border-slate-200 p-4 rounded-[5px] text-slate-950 font-light appearance-none cursor-pointer focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300"
                            >
                                <option value="" disabled>Select a module</option>
                                {demoServices.map((service, idx) => (
                                    <option key={idx} value={service} className="bg-white">{service}</option>
                                ))}
                            </select>
                            <CaretDown weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="group/field relative">
                            <label className="text-[10px] font-light text-slate-500 uppercase tracking-widest mb-3 px-1 block group-focus-within/field:text-green-600 transition-colors">Preferred Date</label>
                            <input
                                type="date" name="preferredDate" value={formData.preferredDate} onChange={onChange}
                                className="w-full bg-transparent border border-slate-200 p-4 rounded-[5px] text-slate-950 font-light focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300"
                            />
                        </div>
                        <div className="group/field relative">
                            <label className="text-[10px] font-light text-slate-500 uppercase tracking-widest mb-3 px-1 block group-focus-within/field:text-green-600 transition-colors">Preferred Time Slot</label>
                            <div className="relative">
                                <select
                                    name="preferredTime" value={formData.preferredTime} onChange={onChange}
                                    className="w-full bg-transparent border border-slate-200 p-4 rounded-[5px] text-slate-950 font-light appearance-none cursor-pointer focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300"
                                >
                                    <option value="">Select a time slot</option>
                                    {demoTimeSlots.map((slot, idx) => (
                                        <option key={idx} value={slot} className="bg-white">{slot}</option>
                                    ))}
                                </select>
                                <CaretDown weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    <div className="group/field relative">
                        <label className="text-[10px] font-light text-slate-500 uppercase tracking-widest mb-3 px-1 block group-focus-within/field:text-green-600 transition-colors">Additional Briefing</label>
                        <textarea
                            name="message" rows={4} value={formData.message} onChange={onChange}
                            className="w-full bg-transparent border border-slate-200 p-4 rounded-[5px] text-slate-950 font-light placeholder:text-slate-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300 resize-none"
                            placeholder="Tell us about your specific requirements..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="relative w-full overflow-hidden rounded-[5px] bg-slate-950 hover:bg-green-600 text-white transition-colors duration-300 py-6"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-3 font-black text-xs tracking-widest uppercase">
                            Submit Demo Access <PaperPlaneRight weight="fill" className="w-4 h-4" />
                        </span>
                    </button>
                </form>
            </div>
        </div>
    </div>
);

export default DemoForm;
