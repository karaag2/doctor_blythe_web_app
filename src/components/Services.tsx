import React from "react";
import DetailCard from "./DetailCard";
import fort from "../assets/images/specialist.png";
import ServicePill from "./ServicePill";
import iconPharmacy from "../assets/images/pharmacy.png";
import iconHeart from "../assets/images/cardiology.png";
import iconTooth from "../assets/images/tooth.png";
import iconDoctor from "../assets/images/doctor.png";

interface ServicesProps {
  onOpenBooking: () => void;
}

const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  return (
    <section id="services" className="bg-white py-16 overflow-hidden font-[Montserrat] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 text-center max-w-2xl mx-auto mb-12">
          <h1 className="font-bold text-sky-500 text-xs uppercase tracking-widest">
            NOS SERVICES MÉDICAUX
          </h1>
          <h2 className="font-extrabold text-slate-900 text-2xl sm:text-4xl capitalize tracking-tight">
            Des Soins Spécialisés Pour Toute la Famille
          </h2>
          <p className="text-slate-500 text-sm">
            Une expertise médicale transversale réunie sous un même toit pour simplifier votre parcours de santé.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Sphere visuelle avec pilules interactives */}
          <div className="lg:col-span-6 relative flex justify-center items-center min-h-[380px]">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              <img
                src={fort}
                alt="Médecin Spécialiste"
                className="w-4/5 h-auto object-contain ammdow select-none"
              />

              <ServicePill
                title="Cardiologie"
                positionning="top-[10%] left-[5%]"
                size="scale-90 sm:scale-100"
                rightIcon={iconHeart}
              />

              <ServicePill
                title="Dentisterie & Soins"
                positionning="top-[25%] right-[0%]"
                size="scale-90 sm:scale-100"
                leftIcon={iconTooth}
              />

              <ServicePill
                title="Chirurgie Générale"
                positionning="bottom-[25%] left-[0%]"
                size="scale-90 sm:scale-100"
                rightIcon={iconDoctor}
              />

              <ServicePill
                title="Pharmacie Clinique"
                positionning="bottom-[10%] right-[5%]"
                size="scale-90 sm:scale-100"
                leftIcon={iconPharmacy}
              />
            </div>
          </div>

          {/* Explication et statistiques cliniques */}
          <div className="lg:col-span-6 space-y-6">
            <DetailCard
              title="Prise en Charge Intégrale & Diagnostic Rapide"
              detail="Nos praticiens collaborent quotidiennement afin d'établir des diagnostics précis et des plans de traitement adaptés à chaque pathologie. Du dépistage préventif aux interventions programmées, vous bénéficiez d'un encadrement médical d'excellence."
              buttontitle="Prendre rendez-vous"
              isbutton
              onButtonClick={onOpenBooking}
            />

            <div className="grid grid-cols-2 gap-4 px-4 sm:px-6">
              <div className="p-4 bg-sky-50/70 rounded-2xl border border-sky-100">
                <span className="text-2xl font-black text-sky-500">98%</span>
                <p className="text-xs text-slate-700 font-semibold mt-1">Satisfaction Patient</p>
                <p className="text-[11px] text-slate-500">Sur plus de 2 400 avis vérifiés</p>
              </div>

              <div className="p-4 bg-sky-50/70 rounded-2xl border border-sky-100">
                <span className="text-2xl font-black text-sky-500">&lt; 15 min</span>
                <p className="text-xs text-slate-700 font-semibold mt-1">Ponctualité Respectée</p>
                <p className="text-[11px] text-slate-500">Prise en charge à l'heure convenue</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
