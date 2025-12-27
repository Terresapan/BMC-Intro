import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BreakdownRowProps {
    label: string;
    value: number;
    total: number;
    icon: LucideIcon;
    color: string;
    bgClass: string;
    colorClass: string;
}

export const BreakdownBarRow: React.FC<BreakdownRowProps> = ({ 
    label, 
    value, 
    total, 
    icon: Icon, 
    color, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    bgClass, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    colorClass 
}) => {
    const percent = total > 0 ? (value / total) * 100 : 0;
    // Ensure even small non-zero values are visible (min 1%)
    const barWidth = value > 0 && percent < 1 ? 1 : percent;
    
    return (
        <div className="flex items-center py-3.5 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 transition-colors duration-200 group"
             style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%)' }}>
            <div 
                className={`p-2.5 mr-4 flex-shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110`}
                style={{ 
                    backgroundColor: `${color}20`, 
                    color: color,
                    clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)'
                }} 
            >
                <Icon size={20} />
            </div>
            <div className="flex-grow">
                <div className="flex justify-between items-end mb-1.5">
                    <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">{label}</span>
                    <div className="text-right">
                        <span className="text-sm font-bold text-slate-100">${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        <span className="text-xs text-slate-500 ml-2 font-medium w-12 inline-block text-right">({percent.toFixed(1)}%)</span>
                    </div>
                </div>
                {/* Pixelated progress bar */}
                <div className="w-full bg-slate-800 h-2 overflow-hidden"
                     style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}>
                    <div 
                        className="h-full transition-all duration-700 ease-out relative" 
                        style={{ 
                            width: `${barWidth}%`, 
                            backgroundColor: color, 
                            boxShadow: `0 0 8px ${color}60`,
                            clipPath: 'polygon(0 0, calc(100% - 2px) 0, 100% 2px, 100% 100%, 0 100%)'
                        }}
                    >
                         <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
