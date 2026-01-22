import React from 'react';

interface ModernCardProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'light' | 'dark';
}

const ModernCard: React.FC<ModernCardProps> = ({ children, className = '', variant = 'dark' }) => {
    const baseStyles = "rounded-2xl p-8 transition-all duration-500 border backdrop-blur-xl shadow-2xl ring-1 ring-white/5";
    const variants = {
        dark: "bg-slate-900/40 border-white/10 text-white hover:border-green-500/40 hover:shadow-green-500/10 hover:-translate-y-1",
        light: "bg-white border-slate-200 text-slate-900 hover:border-green-500/30 hover:shadow-xl hover:-translate-y-1"
    };

    return (
        <div className={`${baseStyles} ${variants[variant]} ${className}`}>
            {children}
        </div>
    );
};

export default ModernCard;
