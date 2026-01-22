

interface GlowBackgroundProps {
    variant?: 'light' | 'dark';
}

const GlowBackground = ({ variant = 'dark' }: GlowBackgroundProps) => {
    const opacity = variant === 'light' ? 'opacity-60' : 'opacity-100';

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${opacity}`}>
            {/* Pulsing Base Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-green-500/10 blur-[120px] animate-pulse-glow" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-[120px] animate-pulse-glow animation-delay-2000" />

            {/* Moving Blobs */}
            <div className="absolute top-[20%] left-[20%] w-[30%] h-[30%] rounded-full bg-emerald-500/15 blur-[100px] animate-blob" />
            <div className="absolute top-[40%] right-[20%] w-[35%] h-[35%] rounded-full bg-blue-400/10 blur-[130px] animate-blob animation-delay-2000" />
            <div className="absolute bottom-[20%] left-[30%] w-[25%] h-[25%] rounded-full bg-indigo-500/10 blur-[90px] animate-blob animation-delay-4000" />
        </div>
    );
};

export default GlowBackground;
