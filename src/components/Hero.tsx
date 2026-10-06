import React from "react";
import medecins from "../assets/images/medecins-removebg-preview.png";
import healthIcon from "../assets/images/heart.svg";
import stetoscope from "../assets/images/stetoscope.svg";
import TopBar from "./TopBar";
import Button from "./Button";

interface HeroProps {
  onOpenBooking: () => void;
  onOpenAppointments: () => void;
  appointmentsCount: number;
}

const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onOpenAppointments,
  appointmentsCount
}) => {
  return (
    <section className="relative w-full bg-white overflow-hidden font-[Montserrat]">
      {/* Top Header Navigation matching the mockup */}
      <TopBar
        onOpenBooking={onOpenBooking}
        onOpenAppointments={onOpenAppointments}
        appointmentsCount={appointmentsCount}
      />

      {/* Main Hero Container */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 pt-8 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Hero Content: Headings, description & Find Doctors button */}
          <div className="lg:col-span-6 z-20 space-y-6 max-w-xl">
            <div className="space-y-2">
              <span className="text-[11px] font-bold tracking-widest text-sky-500 uppercase">
                MÉDECINE & SOINS
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Solutions <br />
                de Santé
              </h1>
            </div>

            <p className="text-slate-500 text-sm sm:text-base leading-relaxed pr-4">
              Des soins complets et accessibles pour toute la famille. Consultez nos praticiens certifiés et réservez votre rendez-vous en ligne en toute simplicité.
            </p>

            <div className="pt-2">
              <Button
                title="Trouver un médecin"
                onClick={onOpenBooking}
                addStyle="!bg-sky-500 hover:!bg-sky-600 !px-8 !py-3.5 !rounded-full !text-xs !font-bold tracking-wide shadow-lg shadow-sky-500/25"
              />
            </div>
          </div>

          {/* Right Hero Graphic: Faithful reproduction of the circular blue arch with 3D doctors and floating icon badges */}
          <div className="lg:col-span-6 relative flex justify-center items-center min-h-[360px] sm:min-h-[460px] lg:min-h-[500px]">
            {/* The circular blue backdrop container clipping the characters */}
            <div className="relative w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] lg:w-[480px] lg:h-[480px] rounded-full bg-sky-500 flex items-end justify-center shadow-xl shadow-sky-500/20">
              {/* Doctor illustration sitting inside the circle */}
              <img
                src={medecins}
                alt="Équipe médicale"
                className="w-full h-auto object-contain max-h-[110%] scale-105 translate-y-3 pointer-events-none drop-shadow-md select-none"
              />

              {/* Floating Badge Left: Stethoscope with glowing pill container */}
              <div className="absolute left-[-16px] sm:left-[-22px] top-[48%] -translate-y-1/2 bg-sky-400 p-2.5 sm:p-3 rounded-2xl shadow-lg border-2 border-white flex items-center justify-center animate-pulse">
                <img src={stetoscope} alt="Stéthoscope" className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>

              {/* Floating Badge Right: Heart ECG with glowing pill container */}
              <div className="absolute right-[-10px] sm:right-[-16px] top-[26%] bg-sky-400 p-2.5 sm:p-3 rounded-2xl shadow-lg border-2 border-white flex items-center justify-center">
                <img src={healthIcon} alt="Pouls cardiaque" className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
