import React, { type ReactNode } from "react";

interface SpecialCardProps {
  title: string;
  icon: string;
  children: ReactNode;
}

const SpecialCard: React.FC<SpecialCardProps> = ({ title, icon, children }) => {
  return (
    <div className="flex flex-col flex-none justify-between space-y-4 bg-sky-500 text-white px-6 py-6 rounded-3xl w-60 font-[Montserrat] shadow-lg shadow-sky-500/20">
      <div className="flex justify-between items-start space-x-2">
        <h3 className="font-bold text-sm leading-tight text-white">{title}</h3>
        <img src={icon} alt="" className="w-8 h-8 object-contain flex-none brightness-0 invert" />
      </div>
      <div className="text-xs space-y-2 opacity-95 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default SpecialCard;
