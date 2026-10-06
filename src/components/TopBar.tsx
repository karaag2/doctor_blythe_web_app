import React from "react";
import LogoBlue from "../assets/images/logo-blue.svg";
import { Calendar } from "lucide-react";

interface TopBarProps {
  onOpenBooking: () => void;
  onOpenAppointments: () => void;
  appointmentsCount: number;
}

const TopBar: React.FC<TopBarProps> = ({
  onOpenBooking,
  onOpenAppointments,
  appointmentsCount
}) => {
  return (
    <header className="w-full px-6 sm:px-12 pt-6 pb-4 flex items-center justify-between">
      {/* Brand logo & nav links */}
      <div className="flex items-center gap-8 sm:gap-12">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 flex items-center justify-center">
            <img
              src={LogoBlue}
              alt="medCare"
              className="w-8 h-8 object-contain"
            />
          </div>
          <span className="text-xl sm:text-2xl font-bold text-sky-500 tracking-tight font-[Montserrat]">
            medCare
          </span>
        </a>

        {/* Navigation links full French */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs font-semibold text-slate-500">
          <a href="#" className="hover:text-sky-500 transition">Accueil</a>
          <a href="#services" className="hover:text-sky-500 transition">Services</a>
          <a href="#specialities" className="hover:text-sky-500 transition">Spécialités</a>
          <a href="#doctors" className="hover:text-sky-500 transition">Médecins</a>
          <a href="#schedules" className="hover:text-sky-500 transition">Horaires</a>
          <a href="#contact" className="hover:text-sky-500 transition">Contact</a>
        </nav>
      </div>

      {/* Action buttons full French with matching sky palette */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenAppointments}
          className="relative px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-sky-50 rounded-full border border-slate-200/80 shadow-xs flex items-center gap-1.5 transition cursor-pointer"
        >
          <Calendar size={14} className="text-sky-500" />
          <span className="hidden sm:inline">Mes rendez-vous</span>
          {appointmentsCount > 0 && (
            <span className="w-4 h-4 text-[10px] bg-sky-500 text-white font-bold rounded-full flex items-center justify-center">
              {appointmentsCount}
            </span>
          )}
        </button>

        <button
          type="button"
          onClick={onOpenBooking}
          className="px-6 py-2 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-[Montserrat] font-semibold text-xs tracking-wide shadow-md shadow-sky-500/25 transition-all duration-200 cursor-pointer"
        >
          Prendre RDV
        </button>
      </div>
    </header>
  );
};

export default TopBar;
