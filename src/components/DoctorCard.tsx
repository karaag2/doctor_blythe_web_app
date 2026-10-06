import React from "react";
import { Star, Clock, Calendar, Check } from "lucide-react";
import type { Doctor } from "../types/medical";

interface DoctorCardProps {
  doctor: Doctor;
  onSelectDoctor: (doctorId: string) => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onSelectDoctor }) => {
  return (
    <div className="flex flex-col flex-none justify-between bg-sky-500 hover:bg-sky-600 p-4 rounded-3xl w-60 shadow-lg shadow-sky-500/20 transition-all duration-300 font-[Montserrat] group">
      <div>
        {/* Médaillon blanc avec photo du docteur */}
        <div className="relative bg-white rounded-[32px] w-full h-36 flex items-center justify-center overflow-hidden mb-3 p-2">
          <img
            src={doctor.avatar}
            alt={doctor.name}
            className="w-28 h-28 object-cover rounded-full shadow-xs group-hover:scale-105 transition-transform duration-300 border-2 border-sky-100"
          />
          <span className="absolute top-2.5 right-2.5 bg-white/95 text-amber-500 text-[11px] font-bold px-2 py-0.5 rounded-full shadow-xs flex items-center gap-1">
            <Star size={11} className="fill-amber-400 text-amber-400" /> {doctor.rating}
          </span>
          <span className="absolute bottom-2 left-2.5 bg-emerald-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
            <Check size={10} /> Dispo
          </span>
        </div>

        {/* Nom et spécialité */}
        <div className="text-center px-1">
          <h4 className="font-bold text-white text-base truncate">{doctor.name}</h4>
          <p className="text-sky-100 text-xs font-medium mt-0.5">{doctor.speciality}</p>
        </div>

        {/* Détails d'expérience et tarif */}
        <div className="mt-3 pt-2.5 border-t border-sky-400/40 flex items-center justify-between text-[11px] text-sky-100 px-1">
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{doctor.experienceYears} ans exp.</span>
          </div>
          <div className="flex items-center gap-1 font-semibold text-white">
            <Calendar size={12} />
            <span>{doctor.fee}</span>
          </div>
        </div>
      </div>

      {/* Bouton d'action */}
      <div className="mt-4 pt-1">
        <button
          type="button"
          onClick={() => onSelectDoctor(doctor.id)}
          className="w-full py-2 bg-white hover:bg-sky-50 active:scale-95 text-sky-600 font-bold rounded-2xl text-xs transition cursor-pointer shadow-md"
        >
          Prendre RDV
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
