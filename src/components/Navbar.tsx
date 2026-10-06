import React, { useState } from "react";
import LogoBlue from "../assets/images/logo-blue.svg";
import { Calendar, PhoneCall, Menu, X, ShieldCheck } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenAppointments: () => void;
  appointmentsCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenAppointments,
  appointmentsCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center">
              <img
                src={LogoBlue}
                alt="medCare Logo"
                className="h-10 w-auto group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-blue-900 font-[Montserrat]">
                Doctor <span className="text-blue-600">Blythe</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-1">
                <ShieldCheck size={11} className="text-emerald-500" /> Centre Médical Accrédité
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 font-[Montserrat] text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition">
              Services
            </a>
            <a href="#specialities" className="hover:text-blue-600 transition">
              Spécialités
            </a>
            <a href="#doctors" className="hover:text-blue-600 transition">
              Nos Médecins
            </a>
            <a href="#schedules" className="hover:text-blue-600 transition">
              Horaires
            </a>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              type="button"
              onClick={onOpenAppointments}
              className="relative px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition flex items-center gap-2 cursor-pointer"
            >
              <Calendar size={15} className="text-blue-600" />
              Mes Rendez-vous
              {appointmentsCount > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-blue-600 rounded-full">
                  {appointmentsCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={onOpenBooking}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-500/20 transition cursor-pointer flex items-center gap-2"
            >
              <PhoneCall size={14} />
              Prendre RDV
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenAppointments}
              className="relative p-2 text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
              aria-label="Mes rendez-vous"
            >
              <Calendar size={20} className="text-blue-600" />
              {appointmentsCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 text-[9px] font-bold text-white bg-blue-600 rounded-full flex items-center justify-center">
                  {appointmentsCount}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 font-[Montserrat]">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
              Services
            </a>
            <a
              href="#specialities"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
              Spécialités
            </a>
            <a
              href="#doctors"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
              Nos Médecins
            </a>
            <a
              href="#schedules"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
              Horaires
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
              Contact
            </a>
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl text-center shadow-md shadow-blue-500/20"
            >
              Prendre Rendez-vous en ligne
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
