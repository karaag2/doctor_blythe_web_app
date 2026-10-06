import React from "react";
import DetailCard from "./DetailCard";
import icon from "../assets/images/hospital.png";
import stetho from "../assets/images/stethoscope (3).png";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";

interface FeaturesProps {
  onOpenBooking: () => void;
}

const Features: React.FC<FeaturesProps> = ({ onOpenBooking }) => {
  return (
    <section id="specialities" className="relative bg-sky-50/60 py-16 px-4 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <DetailCard
          heading="NOTRE SPÉCIALITÉ"
          title="Une Expérience de Soins d'Excellence"
          detail="Une prise en charge humaine, des équipements de diagnostic de pointe et un suivi personnalisé pour chaque patient."
          styles="pb-10 text-center max-w-2xl mx-auto"
        />

        <div className="relative overflow-hidden bg-gradient-to-br from-sky-500 to-sky-600 text-white mx-auto p-8 sm:p-12 rounded-3xl max-w-4xl shadow-xl shadow-sky-500/20 font-[Montserrat]">
          <div className="relative z-10 max-w-xl space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-white/10 rounded-2xl backdrop-blur-xs">
                <img src={icon} alt="" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">
                Rendez-Vous Médical en Ligne
              </h3>
            </div>

            <p className="text-sky-50 text-sm leading-relaxed">
              Bénéficiez d'une coordination médicale fluide entre votre médecin traitant et nos spécialistes. Vos ordonnances et comptes-rendus sont centralisés et téléchargeables en toute sécurité.
            </p>

            <ul className="space-y-2.5 text-xs text-sky-50 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-white flex-none" />
                Téléconsultation et consultations sur place sans attente
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-white flex-none" />
                Données d'hébergement de santé certifiées HDS & RGPD
              </li>
              <li className="flex items-center gap-2">
                <Zap size={16} className="text-white flex-none" />
                Rappel automatique par SMS 24h avant votre consultation
              </li>
            </ul>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-7 py-3.5 bg-white text-sky-600 hover:bg-sky-50 active:scale-95 rounded-full font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-lg shadow-black/10"
              >
                Prendre un rendez-vous rapide
              </button>
            </div>
          </div>

          <div className="hidden md:block absolute -right-6 -bottom-8 w-80 opacity-90 pointer-events-none">
            <img src={stetho} alt="" className="w-full h-auto drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
