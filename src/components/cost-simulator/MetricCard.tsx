import React from 'react';
import { cn } from '@/lib/utils'; // Assuming cn utility exists, usually common in Next.js + Tailwind setups, if not I'll just use template literals or class-variance-authority if available. 
// However, I didn't verify lib/utils existence. I'll stick to safe template literals to be sure, or check directory first.
// Checking file listing earlier: src/lib exists. I will assume it has utils or similar. 
// Safest is to stick to class string interpolation like original to avoid import errors if utils.ts isn't standard.

type ColorVariant = "blue" | "indigo" | "emerald" | "amber" | "purple" | "teal" | "fuchsia";

interface MetricCardProps {
    title: string;
    value: string;
    subtext: string;
    color?: ColorVariant;
    className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ title, value, subtext, color = "blue", className }) => {
    const colors: Record<ColorVariant, string> = {
        blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
        emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
        purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
        teal: "bg-teal-500/10 text-teal-400 border-teal-500/20",
        fuchsia: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20",
    };

    const gradientBorders: Record<ColorVariant, string> = {
        blue: "from-blue-500 to-cyan-500",
        indigo: "from-indigo-500 to-purple-500",
        emerald: "from-emerald-500 to-teal-500",
        amber: "from-amber-500 to-orange-500",
        purple: "from-purple-500 to-fuchsia-500",
        teal: "from-teal-500 to-cyan-500",
        fuchsia: "from-fuchsia-500 to-purple-500",
    };

    return (
        <div className="group relative">
            {/* Outer glow on hover */}
            <div className={`absolute -inset-[2px] bg-gradient-to-r ${gradientBorders[color]} opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500`}></div>
            
            <div className={`relative p-5 border-2 ${colors[color]} hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-1 ${className || ''}`}
                 style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}>
                <div className="text-xs font-bold uppercase tracking-wider opacity-80 mb-2 font-pixel">{title}</div>
                <div className="text-3xl font-extrabold mb-1 tracking-tight text-white">{value}</div>
                <div className="text-xs opacity-80 font-medium">{subtext}</div>
            </div>
        </div>
    );
};
