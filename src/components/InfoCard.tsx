import React, { type ReactNode } from "react";
import Button from "./Button";

interface InfoCardProps {
  title: string;
  icon: string;
  children: ReactNode;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  icon,
  children,
  buttonLabel = "Request",
  onButtonClick
}) => {
  return (
    <div className="flex flex-col flex-none justify-between space-y-4 bg-white border border-slate-100 shadow-sm hover:shadow-md px-6 py-6 rounded-3xl w-60 font-[Montserrat] transition">
      <div className="flex justify-between items-start space-x-2">
        <h3 className="font-bold text-slate-800 text-sm leading-tight">{title}</h3>
        <img src={icon} alt="" className="w-8 h-8 object-contain flex-none" />
      </div>
      <p className="text-xs text-slate-500 leading-relaxed min-h-[48px]">{children}</p>
      <div>
        <Button
          title={buttonLabel}
          onClick={onButtonClick}
          addStyle="!bg-sky-500 hover:!bg-sky-600 !text-xs !font-semibold w-full !py-2 !rounded-full shadow-xs"
        />
      </div>
    </div>
  );
};

export default InfoCard;
